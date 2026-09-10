# -*- coding: utf-8 -*-
"""Monta a apresentacao da Cirurgia Cinderela a partir do conteudo real do app."""
import json
import pathlib
import re

import deck as D

HERE = pathlib.Path(__file__).parent
BASE = pathlib.Path(r"C:/Users/mvito/OneDrive/Documents/Laice/cartilha-po/cartilha-po")
CIND = BASE / "cartilha-cinderela"
HALUX = BASE / "haluxpo"
CACHE = HERE / "cache"
NOVAS = HERE.parent / "gen" / "out" / "final"

USAR_ILUSTRACOES_NOVAS = True     # False volta para as fotos atuais dos exercicios

dados = json.loads((HERE / "cinderela.json").read_text(encoding="utf-8"))
ILUS = dados["illustrations"]
PAINEIS = dados["paineis"]


def ilus(ref):
    """'ILLUSTRATIONS.phase1Protection' -> caminho do arquivo."""
    if not ref:
        return None
    chave = ref.split(".")[-1]
    rel = ILUS.get(chave)
    if not rel:
        return None
    p = CIND / "public" / rel.lstrip("/")
    return p if p.exists() else None


def exercicio_img(e):
    if USAR_ILUSTRACOES_NOVAS:
        m = re.search(r"/(\d{2})_", e["image"])
        if m:
            cand = sorted(NOVAS.glob(f"{m.group(1)}_*-static.webp"))
            if cand:
                return cand[0]
    p = CIND / "public" / e["image"].lstrip("/")
    return p if p.exists() else None


def stream(painel):
    return PAINEIS[painel]["stream"]


def consts(painel):
    return PAINEIS[painel]["dados"]


def blocos_por_titulo(painel, tags=("SectionHeader", "AccordionItem")):
    """Agrupa o fluxo: cada titulo leva consigo o que vem depois dele."""
    out, atual = [], None
    for e in stream(painel):
        if e["t"] == "comp" and e["tag"] in tags:
            atual = {"titulo": e["props"].get("title"), "sub": e["props"].get("subtitle"),
                     "li": [], "p": [], "stat": [], "alert": [], "img": None, "faq": []}
            out.append(atual)
            continue
        if atual is None:
            continue
        if e["t"] == "comp" and e["tag"] == "Illustration" and not atual["img"]:
            atual["img"] = ilus(e["props"].get("src"))
        elif e["t"] == "comp" and e["tag"] == "FaqList":
            atual["faq"] = e["props"].get("items") or []
        elif e["t"] in ("li", "p", "stat", "alert"):
            atual[e["t"]].append(e["text"])
    return out


d = D.Deck(CACHE, logo=HALUX / "public/design-system/assets/logo-principal.png.webp")

# ---------------------------------------------------------------- abertura
d.capa("Cirurgia Cinderela do Pé",
       "Guia do pós-operatório — indicação funcional, recuperação e exercícios")

d.secao = "Visão geral"
oquee = blocos_por_titulo("faq")[0]
d.conteudo("O que é a Cirurgia Cinderela do pé?", kicker="Antes de tudo",
           sub=oquee["sub"], itens=oquee["p"], imagem=oquee["img"],
           nota="Esta apresentação segue o conteúdo da cartilha digital que você recebeu.")

d.conteudo(
    "O que vamos ver hoje", kicker="Roteiro da consulta",
    itens=[
        "As três fases da recuperação e o que muda em cada uma",
        "Os exercícios, um a um, com a dose de cada um",
        "Marcos da recuperação, tempo médio e expectativa realista",
        "Orientações gerais — curativo, sandália Augusta, medicações, trombose, cicatriz",
        "Sinais de alerta e quando ligar para o consultório",
        "Mitos e verdades, e as dúvidas mais comuns",
    ],
    imagem=ilus("ILLUSTRATIONS.coverHero"),
)

# ---------------------------------------------------------------- fases
d.secao_divisoria(1, "As fases da recuperação",
                  "Cada fase tem um objetivo próprio. Saber em qual você está evita "
                  "tanto o excesso quanto o medo desnecessário.",
                  imagem=ilus("ILLUSTRATIONS.phase1Protection"))

fase, fases = None, []
for e in stream("fases"):
    if e["t"] == "comp" and e["tag"] == "PhaseCard":
        fase = {"props": e["props"], "metas": [], "do": [], "avoid": [], "tags": []}
        fases.append(fase)
    elif fase is None:
        continue
    elif e["t"] == "comp" and e["tag"] == "MetaRow":
        fase["metas"] = e["props"].get("items") or []
    elif e["t"] == "comp" and e["tag"] == "DoAvoidList":
        fase["do"] = e["props"].get("doItems") or []
        fase["avoid"] = e["props"].get("avoidItems") or []
    elif e["t"] == "tag":
        fase["tags"].append(e["text"])

for f in fases:
    pr = f["props"]
    kicker = f"Fase {pr.get('index')} · {pr.get('badge', '')}"
    d.conteudo(pr["title"], kicker=kicker, sub=pr.get("focus"),
               itens=[f"{m['label']}: {m['value']}" for m in f["metas"]],
               imagem=ilus((pr.get("illustration") or {}).get("src")), marker="▪")
    colunas = [
        {"titulo": "Fazer", "itens": f["do"], "accent": D.SAGE_DARK,
         "tint": D.SAGE_SOFT, "marker": "✓"},
        {"titulo": "Evitar", "itens": f["avoid"], "accent": D.WARN,
         "tint": D.WARN_SOFT, "marker": "✕"},
    ]
    if f["tags"]:
        if len(f["tags"]) > 7:
            d.conteudo(f"{pr['title']} — na prática", kicker=kicker, colunas=colunas)
            d.conteudo("Exercícios liberados nesta fase", kicker=kicker,
                       itens=f["tags"], marker="▪")
            continue
        colunas.append({"titulo": "Exercícios liberados", "itens": f["tags"],
                        "accent": D.BLUE, "tint": D.BLUE_SOFT, "marker": "▪"})
    d.conteudo(f"{pr['title']} — na prática", kicker=kicker, colunas=colunas)

# ---------------------------------------------------------------- exercícios
d.secao_divisoria(2, "Os exercícios",
                  "Cada exercício com a execução e a dose. Comece apenas quando a equipe liberar.",
                  imagem=ilus("ILLUSTRATIONS.startPhysiotherapy"))

EX = dados["exercises"]["EXERCISES"]
LABELS = dados["exercises"]["EXERCISE_GROUP_LABEL"]
ordem = list(LABELS)
n, total = 0, len(EX)
for gk in ordem:
    grupo = [e for e in EX if e["group"] == gk]
    if not grupo:
        continue
    d.conteudo(LABELS[gk], kicker="Grupo de exercícios",
               itens=[e["name"] for e in grupo], marker="▪")
    for e in grupo:
        n += 1
        d.exercicio(n, total, e["name"], LABELS[gk], e["description"],
                    e["dose"], exercicio_img(e), grupo=LABELS[gk])

# ---------------------------------------------------------------- previsão
d.secao_divisoria(3, "Marcos e expectativas",
                  "Quando cada coisa costuma acontecer — e o que não prometer a si mesma.",
                  imagem=ilus("ILLUSTRATIONS.recoveryTimeline"))

prev = {b["titulo"]: b for b in blocos_por_titulo("previsao")}
MIL = consts("previsao").get("MILESTONES", [])
for i in range(0, len(MIL), 3):
    bloco = MIL[i:i + 3]
    d.conteudo("Marcos da recuperação" + (" (continuação)" if i else ""),
               kicker="Marcos e expectativas",
               colunas=[{"titulo": m["window"], "itens": m["tags"], "accent": D.BRONZE,
                         "tint": D.SURFACE_CREAM} for m in bloco],
               nota=(prev.get("Marcos da Recuperação", {}).get("p") or [None])[0] if i == 0 else None)

tm = prev.get("Tempo médio de recuperação", {})
d.conteudo("Tempo médio de recuperação", kicker="Marcos e expectativas",
           itens=tm.get("stat", []), imagem=tm.get("img"), marker="▪",
           nota=(tm.get("p") or [None])[0])

er = prev.get("Expectativa realista", {})
d.conteudo("Expectativa realista", kicker="Marcos e expectativas",
           itens=er.get("alert", []), imagem=er.get("img"))

RISKS = consts("previsao").get("RISKS", [])
for i in range(0, len(RISKS), 4):
    d.conteudo("Riscos e como são prevenidos" + (" (continuação)" if i else ""),
               kicker="Marcos e expectativas",
               itens=[f"{r['risk']}: {r['prevention']}" for r in RISKS[i:i + 4]],
               imagem=prev.get("Riscos e como são prevenidos", {}).get("img") if i == 0 else None)

# ---------------------------------------------------------------- orientações
d.secao_divisoria(4, "Orientações gerais",
                  "O que cuidar todo dia, do curativo ao calçado.",
                  imagem=ilus("ILLUSTRATIONS.dosAndDonts"))

for b in blocos_por_titulo("orientacoes"):
    t = b["titulo"]
    if not t or t in ("Orientações Gerais", "Atividades do dia a dia", "a.label",
                      "Sinais de alerta"):
        continue
    itens = b["li"] or b["p"]
    if itens:
        d.conteudo(t, kicker="Orientações gerais", itens=itens, imagem=b["img"])

ACT = consts("orientacoes").get("ACTIVITIES", [])
for i in range(0, len(ACT), 2):
    d.conteudo("Atividades do dia a dia" + (" (continuação)" if i else ""),
               kicker="Orientações gerais",
               colunas=[{"titulo": a.get("label", ""), "itens": a.get("items", []),
                         "accent": D.SAGE_DARK, "tint": D.SAGE_SOFT} for a in ACT[i:i + 2]])

alerta = next((b for b in blocos_por_titulo("orientacoes") if b["titulo"] == "Sinais de alerta"), None)
if alerta:
    d.alerta("Sinais de alerta", alerta["li"], imagem=alerta["img"],
             nota="Na dúvida, entre em contato. É sempre melhor avisar cedo.")
ligar = next((b for b in blocos_por_titulo("orientacoes")
              if b["titulo"] == "Quando ligar para o consultório"), None)
if ligar:
    d.conteudo("Quando ligar para o consultório", kicker="Orientações gerais", itens=ligar["li"])

# ---------------------------------------------------------------- dúvidas
d.secao_divisoria(5, "Mitos, verdades e dúvidas",
                  "O que se escuta por aí — e o que a medicina respalda.",
                  imagem=ilus("ILLUSTRATIONS.mythsTruths"))

blocos_faq = blocos_por_titulo("faq")
for b in blocos_faq:
    if b["faq"]:
        titulo = b["titulo"]
        for i in range(0, len(b["faq"]), 2):
            d.perguntas(titulo, [(x["q"], x["a"]) for x in b["faq"][i:i + 2]], kicker="Dúvidas")

for t in ("Como escolher o profissional certo", "Sua jornada", "Aspectos éticos (CFM)"):
    b = next((x for x in blocos_faq if x["titulo"] == t), None)
    if b and b["li"]:
        d.conteudo(t, kicker="Para fechar", itens=b["li"], imagem=b["img"])

# ---------------------------------------------------------------- fecho
d.encerramento(
    "Combinado?",
    [
        "A cartilha digital fica com você e pode ser consultada a qualquer momento.",
        "Os exercícios só começam quando a equipe liberar.",
        "Qualquer sinal de alerta, fale com a gente na hora.",
        "Sem promessa de resultado: o objetivo é sua função e seu conforto.",
    ],
    contato=["Dra. Laice Cunha", "dralaicecunha.com.br",
             "Cartilha: cartilhas.dralaicecunha.com.br",
             "Acompanhamento: acompanhamento.dralaicecunha.com.br"],
)

out = d.salvar(HERE / "out" / "Cartilha-Cinderela-Apresentacao.pptx")
print(out, "|", len(d.prs.slides._sldIdLst), "slides |", out.stat().st_size // 1024, "KB")
