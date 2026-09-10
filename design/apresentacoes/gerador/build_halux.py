# -*- coding: utf-8 -*-
"""Monta a apresentacao da cartilha de halux valgo a partir do conteudo real do app."""
import json
import pathlib
import re

import deck as D

HERE = pathlib.Path(__file__).parent
BASE = pathlib.Path(r"C:/Users/mvito/OneDrive/Documents/Laice/cartilha-po/cartilha-po")
HALUX = BASE / "haluxpo"
CACHE = HERE / "cache"
NOVAS = HERE.parent / "gen" / "out" / "final"       # ilustracoes novas dos exercicios

dados = json.loads((HERE / "halux.json").read_text(encoding="utf-8"))


def img(rel):
    """/assets/... -> caminho no public/ do haluxpo."""
    if not rel:
        return None
    p = HALUX / "public" / rel.lstrip("/")
    return p if p.exists() else None


def cartilha(nome):
    hits = sorted((HALUX / "public/assets/cartilha").glob(f"{nome}*"))
    return hits[0] if hits else None


def exercicio_img(exercise):
    """Prefere a ilustracao nova; cai na foto atual se ela nao existir."""
    m = re.search(r"/(\d{2})_", exercise["image"])
    if m:
        nova = NOVAS / f"{m.group(1)}_{pathlib.Path(exercise['image']).stem.split('_', 1)[1]}-static.webp"
        if nova.exists():
            return nova
        cand = sorted(NOVAS.glob(f"{m.group(1)}_*-static.webp"))
        if cand:
            return cand[0]
    return img(exercise["image"])


d = D.Deck(CACHE, logo=HALUX / "public/design-system/assets/logo-principal.png.webp")

# ---------------------------------------------------------------- abertura
d.capa("Hálux Valgo", "Guia do pós-operatório — o que esperar e o que fazer em cada fase")

d.secao = "Visão geral"
d.conteudo(
    "O que vamos ver hoje",
    kicker="Roteiro da consulta",
    itens=[
        "As três fases da recuperação e o que muda em cada uma",
        "A linha do tempo: o que acontece até o retorno, no primeiro mês e depois",
        "Orientações gerais — curativo, sandália, medicações, cicatriz",
        "O dia a dia: banho, trabalho, calçados, dirigir",
        "Sinais de alerta: quando falar com a equipe na hora",
        "Os exercícios, um a um, com a dose de cada um",
        "Marcos da recuperação e expectativa realista",
    ],
    imagem=cartilha("03-what-is-hallux-valgus"),
    nota="Esta apresentação segue exatamente o conteúdo da cartilha digital que você recebeu.",
)

# ---------------------------------------------------------------- fases
d.secao_divisoria(1, "As fases da recuperação",
                  "Cada fase tem um objetivo próprio. Saber em qual você está evita "
                  "tanto o excesso quanto o medo desnecessário.",
                  imagem=cartilha("05-phase-01-hv-protection"))

for f in dados["phases"]:
    titulo = re.sub(r"^\d+\.\s*", "", f["title"])
    d.conteudo(
        titulo,
        kicker=f"Fase {f['id']} · {f['duration']}",
        sub=f["description"],
        itens=[f"{g['label']}: {g['value']}" for g in f["goals"]],
        imagem=img(f.get("image")),
        marker="▪",
    )
    colunas = [
        {"titulo": "Fazer", "itens": f["toDos"], "accent": D.SAGE_DARK,
         "tint": D.SAGE_SOFT, "marker": "✓"},
        {"titulo": "Evitar", "itens": f["avoid"], "accent": D.WARN,
         "tint": D.WARN_SOFT, "marker": "✕"},
    ]
    kicker = f"Fase {f['id']} · {f['duration']}"
    ex = f.get("exercises") or []
    if ex and len(ex) <= 7:
        colunas.append({"titulo": "Exercícios liberados", "itens": ex,
                        "accent": D.BLUE, "tint": D.BLUE_SOFT, "marker": "▪"})
    d.conteudo(f"{titulo} — na prática", kicker=kicker, colunas=colunas)
    if len(ex) > 7:
        d.conteudo("Exercícios liberados nesta fase", kicker=kicker, itens=ex, marker="▪")

# ---------------------------------------------------------------- linha do tempo
d.secao_divisoria(2, "Linha do tempo",
                  "O que esperar em cada janela de tempo.",
                  imagem=cartilha("14-hv-recovery-timeline"))

tl = dados["timeline"]
for i in range(0, len(tl), 3):
    bloco = tl[i:i + 3]
    d.conteudo(
        "Linha do tempo" + (" (continuação)" if i else ""),
        kicker="Do pós-operatório imediato à alta",
        colunas=[{"titulo": t["time"], "itens": t["items"], "accent": D.BRONZE,
                  "tint": D.SURFACE_CREAM} for t in bloco],
    )

# ---------------------------------------------------------------- orientações
d.secao_divisoria(3, "Orientações gerais",
                  "O que cuidar todo dia, do curativo ao calçado.",
                  imagem=cartilha("09-hv-dos-and-donts"))

for g in dados["generalGuidelines"]:
    d.conteudo(g["title"], kicker="Orientações gerais",
               itens=g["items"], imagem=img(g.get("image")))

# ---------------------------------------------------------------- dia a dia
d.secao_divisoria(4, "O dia a dia",
                  "Como resolver as situações práticas da rotina.",
                  imagem=cartilha("19-hv-daily-activity-bath"))

for a in dados["dailyActivities"]:
    d.conteudo(a["title"], kicker="Dia a dia",
               itens=a["items"], imagem=img(a.get("image")))

# ---------------------------------------------------------------- alerta
d.alerta(
    "Sinais de alerta",
    dados["warningSigns"],
    nota="Na dúvida, entre em contato. É sempre melhor avisar cedo.",
    imagem=cartilha("18-hv-warning-signs"),
)

# ---------------------------------------------------------------- exercícios
d.secao_divisoria(5, "Os exercícios",
                  "Cada exercício com a posição, a execução e a dose. "
                  "Comece apenas quando a equipe liberar.",
                  imagem=cartilha("11-hv-start-physiotherapy"))

total = sum(len(g["exercises"]) for g in dados["exerciseGroups"])
n = 0
for g in dados["exerciseGroups"]:
    d.conteudo(g["title"], kicker="Grupo de exercícios", sub=g["phase"],
               itens=[e["title"] for e in g["exercises"]], marker="▪")
    for e in g["exercises"]:
        n += 1
        d.exercicio(n, total, e["title"], e["category"], e["description"],
                    e["dosage"], exercicio_img(e), grupo=g["title"])

# ---------------------------------------------------------------- marcos
d.secao_divisoria(6, "Marcos e expectativas",
                  "Quando cada coisa costuma acontecer — e o que não prometer a si mesma.",
                  imagem=cartilha("16-hv-realistic-expectations"))

ms = dados["milestones"]
for i in range(0, len(ms), 2):
    bloco = ms[i:i + 2]
    d.conteudo("Marcos da recuperação" + (" (continuação)" if i else ""),
               kicker="Marcos e expectativas",
               colunas=[{"titulo": m["title"], "itens": m["items"], "accent": D.BLUE,
                         "tint": D.BLUE_SOFT} for m in bloco])

# ---------------------------------------------------------------- dúvidas
d.secao_divisoria(7, "Dúvidas frequentes",
                  "As perguntas que mais aparecem no consultório.",
                  imagem=cartilha("24-hv-faq"))

fq = dados["faqs"]
for i in range(0, len(fq), 2):
    d.perguntas("Dúvidas frequentes",
                [(q["question"], q["answer"]) for q in fq[i:i + 2]])

# ---------------------------------------------------------------- fecho
d.encerramento(
    "Combinado?",
    [
        "A cartilha digital fica com você e pode ser consultada a qualquer momento.",
        "Os exercícios só começam quando a equipe liberar.",
        "Qualquer sinal de alerta, fale com a gente na hora.",
        "O acompanhamento é semanal nas duas primeiras semanas.",
    ],
    contato=["Dra. Laice Cunha", "dralaicecunha.com.br",
             "Cartilha: cartilhas.dralaicecunha.com.br",
             "Acompanhamento: acompanhamento.dralaicecunha.com.br"],
)

out = d.salvar(HERE / "out" / "Cartilha-Halux-Valgo-Apresentacao.pptx")
print(out, "|", len(d.prs.slides._sldIdLst), "slides |",
      out.stat().st_size // 1024, "KB")
