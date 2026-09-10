# design/

Material de design que **não** entra no build. Nada aqui é servido ao paciente.

## exercicios-ilustracoes-2026-09.zip

Lote de 26 ilustrações novas dos exercícios, no design system da Dra. Laice,
geradas com `gpt-image-2.5-flare`. Substituem as fotografias atuais em
`public/assets/exercicios/` (23) e `public/assets/massagem-cicatriz/` (3) —
as mesmas imagens servem a cartilha de hálux valgo e a cartilha cinderela.

**Ainda não aplicado.** Guardado aqui aguardando decisão.

Estrutura do zip:

| pasta | conteúdo |
|---|---|
| `animado/` | `<slug>.webp` — 4 quadros em loop de ~1,7 s |
| `estatico/` | `<slug>-static.webp` — quadro de pico |
| `revisao/` | folhas antes/depois das 26 |
| `LEIA-ME.txt` | tabela de qual arquivo novo substitui qual arquivo antigo |

Peso: 562 KB o conjunto animado, 183 KB o estático — contra 616 KB das fotos atuais.

As setas são bronze `#b78b4c`, compostas por cima da arte depois da geração e
idênticas nos quatro quadros, para não tremerem no loop.
