# Prompts de Ilustração — Cartilha Halux Valgo (projeto Haluxpo)

Guia único e copiável de prompts para gerar manualmente as ilustrações da cartilha digital de **halux valgo (joanete)** no GPT Image 2.0 ou modelo equivalente. Os conteúdos visuais seguem o tom educativo do app: pós-operatório após correção de halux valgo, fases de recuperação, sandália cirúrgica, fisioterapia e marcos temporais — **sem** promessa estética e **sem** antes/depois.

Os prompts mantêm o padrão estrutural: cabeçalhos em PT-BR, prompts principais em inglês, aspect ratio sugerido, uso visual e negative prompts consistentes para coesão entre as imagens.

---

## 0. Style guide global

Use este bloco como cabeçalho/contexto antes de cada prompt ou cole-o no “system style” se a interface permitir. Ele garante coesão visual entre todas as ilustrações da cartilha.

```text
STYLE GUIDE — apply to ALL images:

- Visual style: premium modern medical editorial illustration for a mobile-first digital patient booklet by Dra. Laice Cunha, foot and ankle surgeon, focused on hallux valgus (bunion) education and post-operative recovery after hallux valgus correction.
- Mood: elegant, warm, calm, reassuring, ethical, educational, sophisticated clinic aesthetic.
- Illustration style: soft flat vector illustration with subtle gradients, gentle grain texture, thin smooth linework, rounded shapes, clean composition.
- Anatomy: simplified but medically respectful and accurate; feet must have exactly five toes; natural proportions; if showing hallux valgus conceptually, use a mild, schematic, non-caricatured representation of first-ray alignment — never grotesque deformity.
- Medical tone: educational and functional, never sensationalist; emphasize comfort, safety, recovery, shared decision-making, realistic expectations, bone-healing timeline, and individualized medical clearance.
- Color palette must dominate every image:
    Bronze gold:        #b78b4c
    Deep bronze:        #9a7239
    Soft sand:          #f5e6d3
    Off-white:          #fcfaf7
    Graphite gray:      #3a3a3a
    Sage green:         #7d9489
    Soft medical blue:  #4a7c8a
    Optional soft rose: #e8a7a0
- Background: light cream or off-white, generous negative space, soft shadows, no visual clutter.
- Lighting: soft and even, warm editorial glow, no harsh contrast.
- Composition: one clear focal point, mobile-friendly layout, clean space for titles or interface text when needed.
- People: inclusive, adult patients, calm facial expressions or simplified faces; avoid sensual framing of feet.
- Output: high-resolution web-ready illustration, preferably PNG/WebP, with cream or transparent background depending on the prompt.

GLOBAL NEGATIVE PROMPTS — apply to ALL images:

- no text, no letters, no numbers, no logos, no watermarks
- no photorealism, no 3D render, no stock photo look
- no blood, no gore, no open wounds, no exposed surgery
- no aggressive surgical instruments, no scary operating room, no dramatic pain
- no before-and-after comparison, no perfect-result promise, no beauty-transformation promise
- no sensual foot pose, no fetish framing, no exaggerated aesthetics
- no incorrect toe count, no deformed anatomy, no exaggerated deformities
- no clutter, no busy background, no dark horror palette, no neon colors
- no invented contact information, no tiny illegible text
```

Dica: no GPT Image 2.0, cole a Seção 0 primeiro como contexto. Depois cole a seção específica da imagem. Mantenha o bloco de negative prompts para evitar textos, logos inventados, anatomia incorreta e aparência sensacionalista.

---

## 1. Capa / Hero da Cartilha

Onde: capa da cartilha digital / hero principal (Haluxpo — halux valgo).  
Aspect ratio: 4:5.  
Uso: abertura premium, acolhedora e ética; tema joanete / primeiro raio, sem sensacionalismo.

```text
A premium modern medical editorial illustration for the cover of a digital patient booklet about hallux valgus (bunion) and structured post-operative recovery after hallux valgus correction. Show a pair of stylized adult feet resting gently on soft cream fabric, viewed from a respectful three-quarter angle, with subtle bronze-gold guide arcs suggesting the first metatarsophalangeal region and first-ray alignment in a calm, educational way. The feet look cared for and comfortable, with natural proportions and exactly five toes on each foot. Around the feet, add delicate abstract bronze-gold arcs and small soft light dots suggesting care, safety, and steady recovery. Background: elegant bronze gold gradient from #b78b4c to #9a7239, with a clean central negative-space area for a title to be added later outside the image. Style: soft flat vector, subtle grain, thin rounded linework, warm premium clinic aesthetic. No text in the image. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no watermark, no before-and-after, no sensual pose, no beauty-transformation promise, no photorealism, no blood, no surgery scene, no deformed toes, no grotesque bunion exaggeration
```

Nome sugerido do arquivo:
```text
01-cover-hero-hallux-valgus.webp
```

---

## 2. “Importante” / Aviso Educativo

Onde: card educativo de aviso importante.  
Aspect ratio: 16:9.  
Uso: orientação segura sobre o pós-operatório de halux valgo sem tom alarmista.

```text
A premium medical editorial illustration for an “important notice” card in a digital hallux valgus post-operative booklet. Show an elegant clipboard with a small abstract alert icon in bronze gold, placed beside a stylized adult foot wearing a simplified post-operative surgical sandal used after hallux valgus surgery. The composition should feel calm, safe, and educational, not alarming. Background: off-white #fcfaf7 with a soft vertical warm accent strip on one side and subtle bronze-gold details. Use rounded corners, clean vector shapes, gentle shadows, and generous negative space for text to be added later outside the image. No readable text inside the image. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no watermark, no red alarm, no scary mood, no blood, no wounds, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
02-important-notice-hallux-valgus.webp
```

---

## 3. O Que É o Halux Valgo (Joanete)

Onde: seção educativa “O que é o halux valgo”.  
Aspect ratio: 4:5.  
Uso: explicar o conceito (primeiro raio, articulação MTP) de forma esquemática e respeitosa.

```text
A clean educational medical illustration explaining hallux valgus (bunion) without showing surgery. Show a stylized top-down or gentle oblique view of an adult foot with soft bronze-gold anatomical guide lines highlighting the first metatarsophalangeal region, first-ray alignment, and weight-transfer concept toward the forefoot. Use a very mild, schematic, respectful representation of big-toe angulation — educational, not exaggerated. Beside the foot, include three small abstract icons: appropriate wide-toe footwear, walking comfort, and clinical follow-up, in bronze gold, sage green, and soft medical blue. Background: light cream #fcfaf7. The message is understanding the condition, mechanics, and individualized care — not cosmetic transformation. Style: soft flat vector, premium medical editorial, minimal and respectful. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no before-and-after, no promise of cosmetic result, no surgical instruments, no open wounds, no grotesque deformity, no photorealism, no incorrect toe count
```

Nome sugerido do arquivo:
```text
03-what-is-hallux-valgus.webp
```

---

## 4. Indicação, Expectativas e Decisão Compartilhada

Onde: seção sobre avaliação médica, expectativas realistas e decisão compartilhada (conservador x cirúrgico quando aplicável).  
Aspect ratio: 4:5.  
Uso: ética, avaliação individualizada, função e dor — sem promessa de resultado.

```text
A premium medical editorial illustration showing a foot and ankle specialist speaking calmly with an adult patient during a consultation about hallux valgus. The doctor gestures toward a simplified schematic foot illustration on a tablet emphasizing the first metatarsophalangeal region, while the patient listens comfortably. The scene should communicate shared decision-making, individualized evaluation, realistic expectations about recovery timelines and bone healing, and functional goals such as walking comfort and appropriate footwear — not guaranteed aesthetics. Setting: modern clinic office with off-white walls, bronze-gold accents, sage-green detail, soft medical blue shadows, clean furniture, and no brand marks. Faces are simplified and calm. No before-and-after images on the tablet. No readable text. Style: soft flat vector, elegant and educational. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no before-and-after, no beauty promise, no suffering expression, no exaggerated white coat, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
04-shared-decision-hallux-valgus-consultation.webp
```

---

## 5. Fase 1 — Proteção e Repouso Inicial (Pós-HV)

Onde: card da Fase 1 / pós-operatório inicial após correção de halux valgo.  
Aspect ratio: 4:5.  
Uso: proteção, repouso, elevação, controle de edema e uso contínuo da sandália.

```text
A calm post-operative recovery illustration after hallux valgus correction surgery. Show a stylized adult foot elevated on two soft cream pillows, wearing a simplified post-operative forefoot offloading sandal (generic surgical sandal). Beside the foot, include small abstract icons representing rest, elevation, and protection: a soft pillow shape, an upward curved arrow, and a bronze-gold shield. Background: off-white #fcfaf7 with subtle warm sand shadows and sage-green accents. The mood is peaceful, safe, and reassuring. Style: premium medical editorial flat vector, thin rounded lines, gentle grain. No wounds or blood. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no wound, no dirty bandage, no suffering, no photorealism, no surgical scene, no clutter, no deformed toes, no open incision
```

Nome sugerido do arquivo:
```text
05-phase-01-hv-protection-rest.webp
```

---

## 6. Curativo Intacto

Onde: orientação sobre curativo limpo e seco (pós-HV).  
Aspect ratio: 1:1.  
Uso: reforçar não manipular, não molhar, não aplicar pomadas — apenas ícones.

```text
A clean educational medical illustration about keeping a post-operative dressing intact after hallux valgus surgery. Show a stylized adult foot with a clean, dry, intact dressing, protected by a soft bronze-gold shield or rounded frame. Around the foot, include three simple no-action icons without text: a gentle hand with a small diagonal “no” line, a water droplet with a diagonal “no” line, and a small ointment tube silhouette with a diagonal “no” line. Background: soft sand #f5e6d3 and off-white #fcfaf7. Style: soft flat vector, minimal, premium, calm. No blood, no wound. No readable text. Aspect ratio 1:1.
```

Negative prompts:
```text
no text, no letters, no numbers, no blood, no open wound, no redness, no dirty dressing, no scary medical imagery, no photorealism
```

Nome sugerido do arquivo:
```text
06-hv-intact-dressing.webp
```

---

## 7. Sandália Cirúrgica / Descarga do Antepé

Onde: orientação sobre sandália cirúrgica após HV.  
Aspect ratio: 16:9.  
Uso: proteção do antepé, apoio parcial, calçado médico genérico sem marca.

```text
A premium medical editorial illustration of a generic post-operative forefoot surgical sandal shown from a slightly elevated side view, with a stylized adult foot inside after hallux valgus surgery. Visually highlight the protective rigid sole and partial forefoot unloading using soft bronze-gold arrows and translucent sage-green support zones. The sandal should look medical but elegant, with neutral cream, graphite, bronze gold, and sage tones. Background: clean off-white with subtle shadow. No commercial branding, no labels, no text. Style: soft flat vector, instructional, minimal. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no logo, no brand, no watermark, no photorealism, no deformed foot, no dirty sandal, no blood, no clutter
```

Nome sugerido do arquivo:
```text
07-hv-surgical-sandal-forefoot.webp
```

---

## 8. Pé Elevado para Controle de Edema

Onde: elevação acima do nível do coração (alternativa ao gelo nesta cartilha).  
Aspect ratio: 4:5.  
Uso: repouso confortável e controle de inchaço pós-HV.

```text
A warm editorial medical illustration of an adult patient resting on a sofa or bed after hallux valgus surgery, with the operated foot elevated above heart level on soft cream pillows. The foot wears a clean post-operative surgical sandal and is positioned comfortably. Use delicate bronze-gold curved lines to indicate upward elevation and supportive swelling control without depicting ice therapy. The environment is minimal, sophisticated, and calm, with off-white background, sand-toned furniture, and sage-green details. No dramatization, no pain expression, no wound. Style: soft flat vector, premium clinic aesthetic, mobile-first composition. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no wound, no intense pain, no messy room, no photorealism, no dark palette, no clutter, no ice pack, no cold therapy imagery
```

Nome sugerido do arquivo:
```text
08-hv-foot-elevation-edema-control.webp
```

---

## 9. O Que Fazer / O Que Evitar (inclui “sem gelo”)

Onde: card de checklist duplo alinhado às FAQs do app.  
Aspect ratio: 16:9.  
Uso: elevação, sandália, repouso versus molhar curativo, pisar descalça, escadas; e **não usar gelo**.

```text
A clean premium medical infographic-style illustration with two elegant rounded panels side by side for hallux valgus post-operative guidance. The left panel uses sage-green accents and contains three positive icons: elevated foot on pillows, post-operative surgical sandal worn continuously, and calm resting posture. The right panel uses soft rose accents and contains four avoidance icons: water droplet near dressing with a diagonal no line, bare foot walking with a diagonal no line, repeated stairs with a diagonal no line, and an ice pack symbol with a diagonal no line to indicate cold therapy is not used with the dressing. Use bronze-gold outlines, off-white background, subtle shadows, and generous spacing. No words, no labels, no letters. Style: soft flat vector, mobile-friendly, educational. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no tiny labels, no harsh red, no scary symbols, no clutter, no photorealism
```

Nome sugerido do arquivo:
```text
09-hv-dos-and-donts-no-ice.webp
```

---

## 10. Fase 2 — Progressão de Carga e Fisioterapia (HV)

Onde: card da Fase 2 / semanas 2–8, progressão conforme liberação.  
Aspect ratio: 4:5.  
Uso: carga parcial supervisionada, fisioterapia, proteção até liberação da sandália.

```text
A premium medical editorial illustration about gradual weight-bearing and physiotherapy after hallux valgus correction. Show an adult patient standing calmly with a post-operative surgical sandal, placing partial weight on the operated foot while a physiotherapist stands nearby guiding posture and alignment. Add soft bronze-gold progression arrows and three small abstract icons: safe mobility, gradual load, and hallux-friendly rehabilitation. The room is bright, modern, and welcoming, with off-white walls, sage-green accents, and sand-toned floor. No complex equipment, no pain expression. Style: soft flat vector, educational and reassuring. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no surgery, no suffering, no heavy gym equipment, no exaggerated medical setting, no photorealism, no clutter, no high-impact sports
```

Nome sugerido do arquivo:
```text
10-phase-02-hv-load-physiotherapy.webp
```

---

## 11. Início da Fisioterapia (Mobilidade sem sobrecarga)

Onde: início mais claro da fisioterapia (ex.: a partir da 4ª semana no conteúdo do app).  
Aspect ratio: 4:5.  
Uso: mobilização suave de tornozelo/dedos sem estresse precoce do antepé.

```text
A close-up premium medical illustration of a physiotherapist’s hands gently demonstrating soft mobilization of the toes and ankle on a stylized adult foot after hallux valgus surgery. The touch is careful and supportive, with no pain or invasiveness, emphasizing gentle range-of-motion without aggressive pressure on the forefoot. Use subtle bronze-gold and soft medical-blue movement lines around the toes and ankle. Background: off-white #fcfaf7 with sage-green and blue accents. The anatomy is simplified but accurate, with exactly five toes and natural proportions. Style: soft flat vector, clean, elegant, educational. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no wound, no painful manipulation, no aggressive hands, no deformed toes, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
11-hv-start-physiotherapy.webp
```

---

## 12. Mobilização do Hálux e dos Dedos (quando liberado)

Onde: card de exercícios de mobilização específica do hálux após liberação.  
Aspect ratio: 1:1.  
Uso: movimento seguro do hálux — sem prometer amplitude “perfeita”.

```text
A simplified anatomical medical illustration of the forefoot after hallux valgus recovery context, showing gentle big-toe and lesser-toe mobilization. The foot is drawn with clean thin graphite and bronze-gold lines, natural proportions, and exactly five toes. Add discreet curved bronze-gold arrows around the hallux and lesser toes to show safe, gentle movement within comfortable limits. Background: light cream with subtle sand texture. No scars, no wounds, no excessive realism. Style: minimal premium medical vector, ideal for an exercise card. No text. Aspect ratio 1:1.
```

Negative prompts:
```text
no text, no letters, no numbers, no blood, no wound, no deformed toe count, no exaggerated anatomy, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
12-hv-hallux-toe-mobilization.webp
```

---

## 13. Cuidado com a Cicatriz (MTP / primeiro raio)

Onde: cicatriz já epitelizada — massagem quando liberado pela equipe.  
Aspect ratio: 4:5.  
Uso: massagem suave em várias direções; foco conforto e aderências, sem invasivo.

```text
A clean educational illustration about caring for a fully healed surgical scar after hallux valgus surgery. Show a stylized adult foot with a very thin, pale, discreet healed scar along the medial first metatarsophalangeal region (generic placement, not graphic). Two calm hands demonstrate gentle massage around the scar. Add three delicate bronze-gold arrows indicating vertical, horizontal, and circular motions, arranged elegantly around the foot. Background: off-white with sage-green and sand accents. Non-invasive, calm, reassuring. No redness, no blood, no open wound. Style: soft flat vector, premium medical editorial. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no open wound, no intense redness, no fresh incision, no scary medical imagery, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
13-hv-scar-care-massage.webp
```

---

## 14. Timeline da Recuperação (HV)

Onde: marcos do app (curativo, sandália, fisioterapia, 6 semanas, 2–3 meses, 6 meses).  
Aspect ratio: 4:5.  
Uso: base visual para timeline vertical; textos no layout.

```text
A premium mobile-first vertical recovery timeline illustration for post-operative hallux valgus surgery. Create a thin vertical bronze-gold line with six circular milestone markers connected along it. Each marker contains a tiny abstract icon: intact dressing, post-operative surgical sandal, physiotherapy, sandal and dressing clearance concept, low-impact activity, and final clinical follow-up/high-level recovery concept. Add soft empty rounded pill tags beside each milestone, intentionally blank so text can be added later in the app or booklet. Background: white/off-white #fcfaf7, subtle sand shadows, sage-green accents. Clean app-card aesthetic. No readable text, no numbers, no labels. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no clutter, no tiny illegible labels, no harsh colors, no photorealism
```

Nome sugerido do arquivo:
```text
14-hv-recovery-timeline.webp
```

---

## 15. Marcos de Recuperação (sem garantia de prazo exato)

Onde: card sobre evolução típica, radiografia e liberações graduais.  
Aspect ratio: 16:9.  
Uso: marcos visuais; **sem** prometer resultado nem data fixa para todos.

```text
A clean premium medical illustration with two elegant rounded cards side by side on an off-white background for hallux valgus recovery milestones. The first card shows a gentle low-impact activity icon, such as stationary cycling or pilates, represented in bronze gold and sage green. The second card shows a clinical follow-up concept with a simplified foot X-ray silhouette and a calm abstract check-in shape, suggesting radiographic follow-up without showing a real film or readable details. Leave blank space inside each card for text to be added later outside the generated image. The composition must communicate individualized milestones and medical clearance, not a guaranteed timeline for everyone. Style: soft flat vector, subtle grain, bronze-gold, off-white, and soft medical-blue palette. No text, no numbers. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no numbers, no guaranteed result, no before-and-after, no racing, no high-impact sports, no photorealism, no clutter, no readable x-ray text
```

Nome sugerido do arquivo:
```text
15-hv-recovery-milestones.webp
```

---

## 16. Expectativa Realista / Sem Promessa de Resultado

Onde: função, calçado e consistência do programa — sem “joanete perfeito”.  
Aspect ratio: 4:5.  
Uso: transparência e ética.

```text
A conceptual premium medical illustration about realistic expectations after hallux valgus treatment. Show an elegant balance scale with two abstract visual elements: a stylized foot icon with a subtle first-ray emphasis representing walking function and a wide comfortable shoe silhouette representing footwear comfort and protection. Behind the scale, include a subtle ethical document silhouette without readable text. The mood is serene, transparent, and professional, not legalistic or heavy. Palette: bronze gold, soft sand, off-white, graphite, and sage green. Style: soft flat vector, minimalist, calm. No text, no letters, no numbers. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no legal fear, no guarantee promise, no before-and-after, no beauty-transformation symbol, no photorealism
```

Nome sugerido do arquivo:
```text
16-hv-realistic-expectations.webp
```

---

## 17. Riscos e Prevenção (cicatrização e consolidação)

Onde: prevenção positiva (higiene, não fumar, seguir carga, fisioterapia).  
Aspect ratio: 4:5.  
Uso: empoderamento sem mostrar complicações gráficas.

```text
A positive preventive medical illustration showing a soft bronze-gold shield surrounding a stylized adult foot after hallux valgus surgery. Around the shield, place small elegant icons representing hygiene, not smoking, controlled weight-bearing, physiotherapy, hydration, and medical follow-up, plus a subtle abstract bone-healing motif (very simple geometric arc, not graphic). Use sage green, bronze gold, off-white, and soft medical blue. Protective, empowering, educational, not frightening. Background: light cream with subtle shadows and generous negative space. Style: premium soft flat vector, clean and mobile-first. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no blood, no wound, no complications shown, no smoking glamorization, no scary alert, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
17-hv-risks-prevention.webp
```

---

## 18. Sinais de Alerta

Onde: card de quando procurar a equipe.  
Aspect ratio: 1:1.  
Uso: buscar orientação; tom calmo.

```text
A calm instructional medical illustration for post-operative warning signs after hallux valgus surgery. Show a stylized smartphone with a simple call icon and a small abstract foot icon on the screen, protected by a soft bronze-gold outline. Beside it, include a discreet medical alert symbol in muted soft rose, not harsh red. The composition should communicate “seek guidance” without fear. Background: off-white, bronze gold, graphite, and soft rose accents. No wounds, no blood, no intense pain. No readable text or numbers. Style: soft flat vector, premium and reassuring. Aspect ratio 1:1.
```

Negative prompts:
```text
no text, no phone numbers, no logos, no blood, no open wound, no panic, no harsh red, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
18-hv-warning-signs.webp
```

---

## 19. Atividades do Dia a Dia — Banho

Onde: banho com sandália e curativo seco.  
Aspect ratio: 4:5.  
Uso: proteção do curativo; opcional capa plástica.

```text
A clean educational illustration about bathing during post-operative recovery after hallux valgus surgery. Show a stylized adult foot wearing a post-operative surgical sandal, with the clean dressing protected by a simplified waterproof plastic cover. The setting is a minimal, safe bathroom with off-white tiles and soft medical-blue accents. Add a few blue droplets outside the protected area and a small bronze-gold protection arc around the dressing, showing that the dressing stays dry. Practical and calm, not dramatic. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no wet dressing, no blood, no wound, no slippery danger scene, no cluttered bathroom, no photorealism, no logos
```

Nome sugerido do arquivo:
```text
19-hv-daily-activity-bath.webp
```

---

## 20. Trabalho, Home Office e Atividades Sedentárias

Onde: retorno gradual conforme tipo de trabalho e liberação.  
Aspect ratio: 16:9.  
Uso: home office com pé elevado e sandália.

```text
A warm editorial illustration of an adult patient working from home after hallux valgus surgery, seated at a clean desk with a laptop, while the operated foot is elevated comfortably on a soft pillow and wearing a post-operative surgical sandal. The room is bright, minimal, and elegant, with off-white walls, bronze-gold details, sage-green plant accents, and soft sand furniture. Communicate gradual, safe return to sedentary activities and practical comfort. No excessive objects, no visible brand on laptop, no readable text. Style: soft flat vector, premium clinic aesthetic. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no logos, no busy desk, no pain expression, no blood, no wound, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
20-hv-work-home-office-elevated-foot.webp
```

---

## 21. Retorno Progressivo ao Calçado (biqueira anatômica)

Onde: progressão até liberação para calçados — joanete precisa de espaço.  
Aspect ratio: 16:9.  
Uso: sandália → tênis largo → sapato confortável; salto não como meta.

```text
A horizontal premium medical editorial illustration showing three types of footwear aligned left to right, connected by a soft bronze-gold progression arrow, specifically for hallux valgus recovery: first, a generic post-operative surgical sandal; second, a wide-toe-box comfortable sneaker; third, a comfortable closed shoe with generous toe room. All shoes are elegant, neutral, and functional, in off-white, sage, bronze gold, and graphite tones. Background: light cream with subtle shadow. The message is gradual progression according to medical clearance and hallux-friendly footwear, not fashion transformation. No high heels as the main goal. No text, no logos, no labels. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no logos, no high heel as goal, no luxury fashion branding, no before-and-after, no beauty promise, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
21-hv-footwear-progression-wide-toe.webp
```

---

## 22. Fase 3 — Atividade de Baixo Impacto (com liberação)

Onde: a partir do 2º mês no conteúdo do app, se liberado.  
Aspect ratio: 4:5.  
Uso: exercício leve; consolidação óssea implícita.

```text
A premium medical editorial illustration of an adult patient doing a low-impact activity such as stationary cycling or gentle pilates in a clean studio environment after hallux valgus surgery, only as a milestone concept following medical clearance. The posture is relaxed and safe, with neutral activewear and a calm expression. Add a small abstract medical-clearance icon or blank checklist card nearby, without readable text. Use sage green, bronze gold, off-white, and soft sand palette. Communicate supervised, gradual, low-impact movement. No running, no jumping, no intense sport performance. Style: soft flat vector, clean and reassuring. No text. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no numbers, no running, no jumping, no high-impact exercise, no extreme performance, no pain, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
22-hv-phase-03-low-impact-exercise.webp
```

---

## 23. Mitos e Verdades sobre Halux Valgo e o Pós-Operatório

Onde: esclarecimentos (gelo, descalço, dirigir, edema etc.).  
Aspect ratio: 4:5.  
Uso: educação ética sem comparação visual de pés.

```text
A clean conceptual medical illustration for a myths-and-truths educational section about hallux valgus and post-operative care. Show two elegant floating cards or panels over an off-white background: one with an abstract question-mark-like symbol made of dots and curves, the other with a simple soft lightbulb or clarity icon. At the center, place a stylized adult foot icon with subtle first-ray emphasis and small medical-information shapes around it. Educational, ethical, reassuring. Palette: bronze gold, soft sand, graphite, sage green. No readable text, no letters, no before-and-after comparison. Style: premium soft flat vector. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no before-and-after feet, no beauty promise, no sensationalism, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
23-hv-myths-and-truths.webp
```

---

## 24. Perguntas Frequentes (FAQ)

Onde: seção de FAQ do app.  
Aspect ratio: 16:9.  
Uso: tablet + ícones; bolhas vazias.

```text
A premium editorial FAQ illustration for a hallux valgus patient booklet. Show a tablet with a clean blank medical card on the screen, surrounded by minimalist question-bubble shapes and small icons: foot, calendar, phone, physiotherapy, and a subtle surgical-sandal silhouette. Use bronze gold, off-white, soft medical blue, and sage green. Clean, sophisticated, friendly, easy to use in a digital layout. All screen areas and bubbles must remain blank, with no readable text. Style: soft flat vector, subtle grain, rounded shapes. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no contact details, no tiny unreadable UI text, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
24-hv-faq.webp
```

---

## 25. Como Escolher o Profissional Certo (pé e tornozelo / HV)

Onde: institucional — especialista e equipe multidisciplinar.  
Aspect ratio: 4:5.  
Uso: checklist só com ícones.

```text
A premium institutional medical illustration showing a stylized foot and ankle specialist in a modern clinic setting, standing beside an elegant blank checklist board for hallux valgus care pathways. The checklist contains only abstract icons, not words: medical certification, foot-and-ankle specialty, accredited hospital, multidisciplinary team, and individualized evaluation. The doctor has a calm, professional posture and a simplified friendly face. Environment: off-white, bronze-gold, sage-green, and graphite palette, with soft shadows and clean furniture. No external brands, no readable credentials, no logos. Style: soft flat vector, trustworthy and elegant. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no fake certificates with readable text, no exaggerated white coat, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
25-hv-choose-right-professional.webp
```

---

## 26. Jornada da Paciente (avaliação → preparo → hospital → reabilitação)

Onde: infográfico da jornada para tratamento cirúrgico do HV (sem cirurgia explícita).  
Aspect ratio: 16:9.  
Uso: cinco etapas conectadas.

```text
A premium horizontal infographic-style illustration showing a patient journey in five connected steps for hallux valgus care. Use five soft rounded icon circles connected by a thin bronze-gold line: initial clinical evaluation, individualized treatment planning, pre-operative preparation, hospital care represented only by a safe hospital building icon (no operating room detail), and post-operative follow-up with physiotherapy and hallux-focused rehabilitation. Place a stylized foot icon with subtle first-ray emphasis softly in the center or background. Palette: off-white, bronze gold, soft sand, sage green, and soft medical blue. No real surgery, no blood, no surgical instruments. No text or numbers. Style: soft flat vector, mobile-friendly and clean. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no numbers, no surgery scene, no blood, no surgical instruments, no before-and-after, no promise of result, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
26-hv-patient-journey.webp
```

---

## 27. Agende sua Avaliação

Onde: CTA de avaliação para halux valgo.  
Aspect ratio: 4:5.  
Uso: áreas limpas para dados reais no layout.

```text
A premium call-to-action illustration for scheduling a medical evaluation for hallux valgus. Show a smartphone with a clean blank appointment screen, a minimal calendar icon, a subtle location pin, and an abstract bronze-gold decorative monogram-like clinic motif in the background. Warm, premium, welcoming, with generous blank space for real website text to be added later outside the image. Use off-white, bronze gold, sage green, and graphite palette. Do not invent any contact information. No readable text, no numbers, no logos. Style: soft flat vector, rounded shapes, mobile-first. Aspect ratio 4:5.
```

Negative prompts:
```text
no text, no phone number, no email, no address, no invented logo, no watermark, no readable calendar dates, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
27-hv-schedule-evaluation.webp
```

---

## 28. Contatos e Localização

Onde: institucional — mapa abstrato (ex.: São Paulo, Berrini/Brooklin).  
Aspect ratio: 16:9.  
Uso: sem endereços ou mapas reais legíveis.

```text
A premium institutional illustration for a clinic contact and location section related to hallux valgus care. Show an abstract minimal map silhouette inspired by São Paulo, with a refined bronze-gold location marker in the Berrini/Brooklin region, without street names or real map details. Beside it, place an elegant blank contact card with simple icons for phone, email, website, and location, but no readable text or numbers. Add a subtle abstract decorative clinic motif, not a readable logo. Palette: bronze gold, off-white, graphite, soft sand. Style: soft flat vector, clean, sophisticated, web-ready. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no phone numbers, no emails, no addresses, no real map details, no street names, no logos, no watermark, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
28-hv-contact-location.webp
```

---

## 29. Rodapé / Encerramento Ético

Onde: fechamento da cartilha.  
Aspect ratio: 16:9.  
Uso: responsabilidade, educação, sem garantia de desfecho.

```text
A final premium editorial illustration for the closing section of a hallux valgus patient booklet. Create a minimal composition with a stylized adult foot icon with subtle first-ray emphasis, a bronze-gold safety shield, a blank ethical document silhouette, and a delicate gold decorative line flowing across the background. The mood should communicate care, responsibility, education, transparency, and no guarantee of outcome. Background: off-white with soft sand shadows, sage-green accent dots, and graphite details. Style: soft flat vector, elegant, calm, high-end medical branding. No readable text. Aspect ratio 16:9.
```

Negative prompts:
```text
no text, no letters, no numbers, no promises, no before-and-after, no legal fear, no blood, no photorealism, no clutter
```

Nome sugerido do arquivo:
```text
29-hv-ethical-closing-footer.webp
```

---

## 30. Ícones Avulsos do Design System (Haluxpo)

Onde: biblioteca visual / ícones reutilizáveis.  
Aspect ratio: 1:1.  
Uso: kit de 12 ícones alinhados ao conteúdo da cartilha HV.

```text
Create a consistent set of 12 vector line icons for a premium medical booklet about hallux valgus post-operative care: protection shield, calendar, physiotherapy, rest, foot elevation, surgical sandal, dressing, warning alert, phone, checklist, hallux mobilization, and radiographic follow-up. Use thin rounded linework, clean geometry, and soft filled accents. Main color: bronze gold #b78b4c; secondary accents: sage green #7d9489 and soft medical blue #4a7c8a. Arrange the icons in a clean 4x3 grid on a transparent or off-white background. Each icon must be simple, elegant, and visually consistent. No text, no letters, no numbers. Aspect ratio 1:1.
```

Negative prompts:
```text
no text, no letters, no numbers, no logos, no watermark, no inconsistent style, no photorealism, no clutter, no medical gore
```

Nome sugerido do arquivo:
```text
30-hv-design-system-icons.webp
```

---

## Como usar este arquivo no GPT Image 2.0

1. Cole a Seção 0 — Style guide global como contexto antes de gerar qualquer imagem.
2. Depois cole apenas a seção específica da imagem desejada.
3. Ajuste o aspect ratio na interface: 4:5, 16:9, 1:1 ou conforme indicado.
4. Se aparecer texto, letras ou números, regenere com o reforço:
   ```text
   Important: absolutely no text, no letters, no numbers, no logos, no watermark in the image.
   ```
5. Se o resultado ficar realista demais, regenere com:
   ```text
   Make it more editorial, more soft flat vector, less realistic, less photographic.
   ```
6. Se aparecer promessa estética, antes/depois ou sensualização dos pés, regenere com:
   ```text
   Keep the image strictly medical, ethical, functional, respectful, non-sensual, and without before-and-after comparison.
   ```
7. Textos finais, títulos, datas e contatos devem ser adicionados no layout do site/cartilha, não dentro da imagem gerada.

---

## Lista de aspect ratios sugeridos por uso

| Seção | Imagem | Aspect ratio | Onde aparece |
|---:|---|---|---|
| 1 | Capa / Hero HV | 4:5 | Capa da cartilha |
| 2 | Importante | 16:9 | Card de aviso |
| 3 | O que é halux valgo | 4:5 | Seção educativa |
| 4 | Decisão compartilhada | 4:5 | Consulta / ética |
| 5 | Fase 1 pós-HV | 4:5 | Pós-operatório inicial |
| 6 | Curativo intacto | 1:1 | Orientações |
| 7 | Sandália cirúrgica | 16:9 | Orientações |
| 8 | Elevação do pé | 4:5 | Orientações |
| 9 | Fazer / Evitar (+ sem gelo) | 16:9 | Checklist |
| 10 | Fase 2 carga + fisioterapia | 4:5 | Reabilitação |
| 11 | Início da fisioterapia | 4:5 | Orientações |
| 12 | Mobilização hálux/dedos | 1:1 | Exercícios |
| 13 | Cuidado com a cicatriz | 4:5 | Orientações |
| 14 | Timeline | 4:5 | Previsão |
| 15 | Marcos de recuperação | 16:9 | Card informativo |
| 16 | Expectativa realista | 4:5 | Ética |
| 17 | Riscos e prevenção | 4:5 | Prevenção |
| 18 | Sinais de alerta | 1:1 | Alerta |
| 19 | Banho | 4:5 | Dia a dia |
| 20 | Trabalho / home office | 16:9 | Dia a dia |
| 21 | Progressão de calçado | 16:9 | Orientações |
| 22 | Baixo impacto (Fase 3) | 4:5 | Atividade física |
| 23 | Mitos e verdades | 4:5 | Educação |
| 24 | FAQ | 16:9 | Perguntas frequentes |
| 25 | Profissional certo | 4:5 | Institucional |
| 26 | Jornada da paciente | 16:9 | Infográfico |
| 27 | Agende avaliação | 4:5 | CTA |
| 28 | Contatos e localização | 16:9 | Institucional |
| 29 | Rodapé ético | 16:9 | Fechamento |
| 30 | Ícones avulsos | 1:1 | Design system |

---

## Convenções de nome de arquivo

```text
01-cover-hero-hallux-valgus.webp
02-important-notice-hallux-valgus.webp
03-what-is-hallux-valgus.webp
04-shared-decision-hallux-valgus-consultation.webp
05-phase-01-hv-protection-rest.webp
06-hv-intact-dressing.webp
07-hv-surgical-sandal-forefoot.webp
08-hv-foot-elevation-edema-control.webp
09-hv-dos-and-donts-no-ice.webp
10-phase-02-hv-load-physiotherapy.webp
11-hv-start-physiotherapy.webp
12-hv-hallux-toe-mobilization.webp
13-hv-scar-care-massage.webp
14-hv-recovery-timeline.webp
15-hv-recovery-milestones.webp
16-hv-realistic-expectations.webp
17-hv-risks-prevention.webp
18-hv-warning-signs.webp
19-hv-daily-activity-bath.webp
20-hv-work-home-office-elevated-foot.webp
21-hv-footwear-progression-wide-toe.webp
22-hv-phase-03-low-impact-exercise.webp
23-hv-myths-and-truths.webp
24-hv-faq.webp
25-hv-choose-right-professional.webp
26-hv-patient-journey.webp
27-hv-schedule-evaluation.webp
28-hv-contact-location.webp
29-hv-ethical-closing-footer.webp
30-hv-design-system-icons.webp
```

---

## Observações finais

- Mantenha consistência visual: bronze dourado, off-white, areia, sage e azul médico suave.
- Esta cartilha é de **halux valgo** e pós-operatório: alinhe imagens a **proteção do curativo**, **sandália o tempo todo**, **sem gelo**, **progressão de carga e fisioterapia conforme liberação** e **marcos até ~6 meses**, como no conteúdo do app.
- Evite qualquer imagem de antes/depois.
- Evite qualquer promessa de resultado estético ou “joanete zero”.
- Evite sensualização dos pés.
- Prefira anatomia simplificada, educativa e respeitosa; joanete, se aparecer, de forma **esquemática e moderada**.
- Para títulos, datas ou contatos, deixe áreas limpas e adicione o texto no layout final.
- As ilustrações finais devem ser revisadas pela equipe clínica antes da publicação para garantir adequação médica, ética e comunicacional.
