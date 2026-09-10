// Extrai o conteudo da cartilha cinderela para JSON, para montar o PowerPoint.
// O texto vive inline em JSX nos paineis: a leitura e feita pela AST do
// TypeScript, emitindo (a) as constantes de topo de cada painel, ja avaliadas,
// e (b) um fluxo em ordem de documento com titulos, listas e tags.
//
// Rodar de dentro de cartilha-cinderela/ (precisa resolver 'typescript'):
//   SP=<scratchpad> node .dump.cjs
const ts = require('typescript');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function loadModule(file) {
  const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
      jsxFactory: '__jsx',
      jsxFragmentFactory: '__frag',
    },
  }).outputText;
  const module = { exports: {} };
  const stub = new Proxy({}, { get: () => () => null });
  vm.runInNewContext(js, {
    module, exports: module.exports, require: () => stub,
    __jsx: () => null, __frag: null, console,
  }, { filename: file });
  return module.exports;
}

const clean = (s) => s.replace(/\s+/g, ' ').trim();

/** Texto visivel: so filhos, nunca atributos da tag de abertura. */
function jsxText(node) {
  let out = '';
  const walk = (n) => {
    if (ts.isJsxText(n)) { out += n.text; return; }
    if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) { out += n.text; return; }
    if (ts.isJsxExpression(n)) { if (n.expression) walk(n.expression); return; }
    if (ts.isJsxElement(n)) { n.children.forEach(walk); return; }
    if (ts.isJsxSelfClosingElement(n)) return;
    if (ts.isJsxFragment(n)) { n.children.forEach(walk); return; }
    n.forEachChild(walk);
  };
  if (ts.isJsxElement(node)) node.children.forEach(walk);
  else if (ts.isJsxFragment(node)) node.children.forEach(walk);
  return clean(out);
}

const tagOf = (el) => {
  const o = ts.isJsxElement(el) ? el.openingElement : el;
  return o.tagName && o.tagName.getText ? o.tagName.getText() : '';
};

function evalNode(n, consts, depth = 0) {
  if (!n || depth > 8) return null;
  if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
  if (ts.isNumericLiteral(n)) return Number(n.text);
  if (n.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (n.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (ts.isArrayLiteralExpression(n)) {
    return n.elements.map((e) => evalNode(e, consts, depth + 1)).filter((v) => v !== null && v !== '');
  }
  if (ts.isObjectLiteralExpression(n)) {
    const o = {};
    for (const p of n.properties) {
      if (ts.isPropertyAssignment(p)) o[p.name.getText().replace(/['"]/g, '')] = evalNode(p.initializer, consts, depth + 1);
    }
    return o;
  }
  if (ts.isJsxElement(n) || ts.isJsxFragment(n)) return jsxText(n);
  if (ts.isJsxSelfClosingElement(n)) return null;
  if (ts.isPropertyAccessExpression(n)) return n.getText();
  if (ts.isIdentifier(n)) {
    const c = consts.get(n.text);
    return c ? evalNode(c, consts, depth + 1) : null;
  }
  if (ts.isAsExpression(n) || ts.isParenthesizedExpression(n)) return evalNode(n.expression, consts, depth + 1);
  return null;
}

function attrs(el, consts) {
  const o = ts.isJsxElement(el) ? el.openingElement : el;
  const out = {};
  if (!o.attributes) return out;
  for (const a of o.attributes.properties) {
    if (!ts.isJsxAttribute(a)) continue;
    const name = a.name.getText();
    if (!a.initializer) { out[name] = true; continue; }
    if (ts.isStringLiteral(a.initializer)) { out[name] = a.initializer.text; continue; }
    if (ts.isJsxExpression(a.initializer) && a.initializer.expression) {
      const v = evalNode(a.initializer.expression, consts);
      if (v !== null) out[name] = v;
    }
  }
  return out;
}

/** Ha algum <li> dentro deste no? Blocos com lista sao percorridos item a item. */
function hasLi(node) {
  let found = false;
  const walk = (n) => {
    if (found) return;
    if (ts.isJsxElement(n) && tagOf(n) === 'li') { found = true; return; }
    n.forEachChild(walk);
  };
  node.forEachChild(walk);
  return found;
}

const COMPONENTES = new Set([
  'PhaseCard', 'AccordionItem', 'SectionHeader', 'FaqList', 'ExerciseGallery',
  'MetaRow', 'DoAvoidList', 'Illustration', 'MilestoneCard', 'Card',
]);

function parsePanel(file) {
  const sf = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'),
    ts.ScriptTarget.ES2020, true, ts.ScriptKind.TSX);

  const consts = new Map();
  sf.forEachChild((n) => {
    if (!ts.isVariableStatement(n)) return;
    for (const d of n.declarationList.declarations) {
      if (ts.isIdentifier(d.name) && d.initializer) consts.set(d.name.text, d.initializer);
    }
  });

  // constantes de topo ja avaliadas (MILESTONES, RISKS, FAQ, MITOS, ...)
  const dados = {};
  for (const [name, init] of consts) {
    if (!/^[A-Z][A-Z0-9_]*$/.test(name)) continue;      // so as CONSTANTES
    const v = evalNode(init, consts);
    if (Array.isArray(v) ? v.length : v && typeof v === 'object') dados[name] = v;
  }

  const stream = [];
  const visit = (n) => {
    if (ts.isJsxElement(n) || ts.isJsxSelfClosingElement(n)) {
      const tag = tagOf(n);
      const a = attrs(n, consts);
      const cls = String(a.className || '');
      if (COMPONENTES.has(tag)) {
        stream.push({ t: 'comp', tag, props: a });
      } else if (/^h[1-4]$/.test(tag)) {
        const x = jsxText(n); if (x) stream.push({ t: 'head', text: x });
      } else if (tag === 'li') {
        const x = jsxText(n); if (x) stream.push({ t: 'li', text: x });
        return;
      } else if (tag === 'span' && cls.includes('mini-tag')) {
        const x = jsxText(n); if (x) stream.push({ t: 'tag', text: x });
        return;
      } else if (tag === 'div' && /stat-card|alert/.test(cls) && !hasLi(n)) {
        const x = jsxText(n);
        if (x) stream.push({ t: cls.includes('alert') ? 'alert' : 'stat', text: x });
        return;
      } else if (tag === 'p') {
        const x = jsxText(n);
        if (x && x.length > 3) stream.push({ t: 'p', text: x, cls });
      }
    }
    n.forEachChild(visit);
  };
  visit(sf);
  return { dados, stream };
}

const SP = process.env.SP;
const data = {
  exercises: loadModule('src/data/exercises.ts'),
  illustrations: loadModule('src/data/illustrations.ts').ILLUSTRATIONS,
  paineis: {},
};
for (const f of fs.readdirSync('src/panels')) {
  data.paineis[f.replace(/Panel\.tsx$/, '').toLowerCase()] = parsePanel(path.join('src/panels', f));
}
fs.writeFileSync(path.join(SP, 'ppt', 'cinderela.json'),
  JSON.stringify(data, (k, v) => (typeof v === 'function' ? undefined : v), 1));

for (const [k, v] of Object.entries(data.paineis)) {
  const by = {};
  for (const e of v.stream) { const key = e.t === 'comp' ? e.tag : e.t; by[key] = (by[key] || 0) + 1; }
  console.log(k.padEnd(12), 'consts:', Object.keys(v.dados).join(',') || '-', '|',
    Object.entries(by).map(([t, n]) => `${t}:${n}`).join(' '));
}
console.log('exercicios', (data.exercises.EXERCISES || []).length,
  '| ilustracoes', Object.keys(data.illustrations || {}).length);
