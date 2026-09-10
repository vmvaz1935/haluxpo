# Apresentações das cartilhas

Decks em PowerPoint 16:9 para compartilhar tela na consulta e passar as orientações
e os exercícios com a paciente.

| Arquivo | Slides | Onde |
|---|---|---|
| `Cartilha-Halux-Valgo-Apresentacao.pptx` | 65 | aqui |
| `Cartilha-Cinderela-Apresentacao.pptx` | 76 | `cartilha-cinderela/design/` |

## De onde vem o conteúdo

Nada é digitado à mão. O texto é lido direto do código das cartilhas, então o deck
não sai do ar em relação ao app:

- **Hálux valgo** — `haluxpo/src/data/content.tsx` e `exercises.ts`, carregados por
  transpilação do TypeScript com os ícones JSX substituídos por `null`.
- **Cinderela** — o conteúdo vive inline em JSX nos painéis, então é extraído pela AST
  do TypeScript (`gerador/dump-cinderela.cjs`): constantes de topo já avaliadas mais um
  fluxo em ordem de documento com títulos, listas, tags e alertas.

As ilustrações vêm de `public/assets/cartilha/` (hálux) e `public/illustrations/`
(cinderela), reduzidas para 1500 px e gravadas como JPEG no arquivo — sem isso o deck
passaria de 30 MB.

## Design system

Paleta e tipografia do design system da Dra. Laice: bronze `#b78b4c`, creme `#f5e6d3`,
sage `#7d9489`, azul `#4a7c8a`. Poppins e Inter são webfonts e **não** estão instaladas
nas máquinas onde o deck vai rodar — o PowerPoint substituiria por conta própria, então
o deck usa **Segoe UI**, que é o par mais próximo e renderiza igual em qualquer Windows.
Marcadores fora do ASCII (✓ ✕) usam Segoe UI Symbol, que os tem.

## Imagens dos exercícios

Os slides de exercício usam as **fotografias que estão hoje nas cartilhas**, para que a
paciente veja na tela exatamente o mesmo que vai encontrar depois no app.

As ilustrações novas do design system (`haluxpo/design/exercicios-ilustracoes-2026-09.zip`)
ainda não foram aplicadas às cartilhas, então também não entram aqui. No dia em que
forem, basta ligar `USAR_ILUSTRACOES_NOVAS = True` no topo de `gerador/build_halux.py` e
`gerador/build_cinderela.py` e refazer os decks.

## Refazer os decks

Precisa de `python-pptx` e `pillow`. De dentro de cada repo, gere o JSON de conteúdo e
depois rode os builders:

```bash
python gerador/build_halux.py
python gerador/build_cinderela.py
```

`gerador/preview.py` renderiza o `.pptx` para PNG lendo as formas reais do arquivo e
aponta as caixas em que o texto passa do limite — é a conferência que substitui abrir o
PowerPoint. Sobras de ~4 pt são arredondamento da estimativa e não aparecem no slide.
