import { Shield, Activity, TrendingUp, Clock, Award, CheckCircle, AlertCircle, Hand, Pill, Calendar, Globe, Users } from '../components/Icons';
import type { Phase, TimelineItem, Guideline, DailyActivity, Milestone, FAQ } from '../types';

export const phases: Phase[] = [
  {
    id: 1,
    title: "1. Repouso em Casa",
    duration: "Semanas 0-2",
    icon: <Shield />,
    description: "Proteção da cirurgia, controle de dor e inchaço. O curativo fica intacto — só a Dra. Laice troca — e a sandália pós-operatória é usada o tempo todo, inclusive para dormir e no banho.",
    goals: [
      { label: "Curativo", value: "Não abrir, não molhar, não trocar — só a Dra. Laice troca" },
      { label: "Dor e Inchaço", value: "Remédios da receita, repouso e pé elevado" },
      { label: "Sandália", value: "O tempo todo — inclusive para dormir e no banho" },
      { label: "Trabalho", value: "Afastada nas 2 primeiras semanas" }
    ],
    toDos: [
      "Manter o pé elevado acima do nível do coração sempre que estiver deitada",
      "Andar com a sandália conforme tolerar — dentro de casa, só o necessário",
      "Mexer o tornozelo várias vezes por hora (prevenção de trombose)",
      "Nunca pisar descalça, mesmo dentro de casa",
      "Tomar os remédios exatamente como na receita"
    ],
    avoid: [
      "Abrir, molhar, trocar ou afrouxar o curativo",
      "Aplicar pomadas, cremes ou qualquer substância sobre o curativo",
      "Utilizar gelo (o curativo não permite passagem adequada de frio)",
      "Caminhar longas distâncias ou ficar longos períodos em pé",
      "Subir e descer escadas repetidamente",
      "Viajar nesse período",
      "Fumar (retarda a cicatrização)"
    ],
    exercises: [
      "Bomba de tornozelo: puxar o pé para cima e empurrar para baixo, várias vezes por hora",
      "Movimentos dos dedos não operados e contração da coxa"
    ],
    image: "/assets/cartilha/05-phase-01-hv-protection-rest.png",
    imageAlt: "Pé operado elevado em travesseiros com sandália cirúrgica"
  },
  {
    id: 2,
    title: "2. Sandália e Curativos Semanais",
    duration: "Semanas 2-6",
    icon: <Activity />,
    description: "Os pontos saem com cerca de 2 semanas. Os curativos são semanais com a Dra. Laice (presencial ou online) e a sandália continua o tempo todo. Entram caminhadas curtas e o retorno gradual ao trabalho.",
    goals: [
      { label: "Curativo", value: "Troca semanal com a Dra. Laice até 6 semanas" },
      { label: "Sandália", value: "Continua o tempo todo, inclusive para dormir" },
      { label: "Caminhada", value: "Curtas, sempre com a sandália" },
      { label: "Trabalho", value: "Home office até 4 semanas; presencial sentada de 4 a 6 semanas" }
    ],
    toDos: [
      "Fazer caminhadas curtas com a sandália",
      "Comparecer aos retornos semanais (curativo)",
      "Continuar elevando o pé nos períodos de repouso",
      "Home office com o pé elevado (2 a 4 semanas)",
      "Trabalho presencial sentada a partir de 4 semanas, indo de Uber ou táxi",
      "A partir da 4ª semana: mobilidade sem carga de quadril, joelho e alongamento de posterior de coxa sentada, sem tirar a sandália"
    ],
    avoid: [
      "Academia, corrida, caminhadas longas e escadas repetidas",
      "Transporte público",
      "Dirigir sem liberação (trajetos curtos só a partir de 3–4 semanas)",
      "Viagens que não sejam tranquilas e combinadas com a Dra. Laice",
      "Tirar a sandália ou pisar descalça",
      "Exercícios do dedo operado antes da 6ª semana"
    ],
    exercises: [
      "Bomba de tornozelo e contração da coxa",
      "Semana 4-6 — Alongamento de posterior de coxa sentada",
      "Semana 4-6 — Mobilidade de quadril e joelho sem carga no pé"
    ],
    image: "/assets/cartilha/10-phase-02-hv-load-physiotherapy.png",
    imageAlt: "Paciente caminhando com sandália cirúrgica acompanhada por fisioterapeuta"
  },
  {
    id: 3,
    title: "3. Fisioterapia e Tênis Largo",
    duration: "Semanas 6-12",
    icon: <TrendingUp />,
    description: "Com 6 semanas saem a sandália e os curativos. Começa a fisioterapia para movimentar o dedo, a drenagem em casa e os exercícios em vídeo. Calçado: tênis largo ou papete.",
    goals: [
      { label: "Calçado", value: "Tênis largo ou papete" },
      { label: "Movimento", value: "Recuperar o movimento do dedão operado" },
      { label: "Atividade", value: "Sem impacto no pé: pilates e musculação adaptada" },
      { label: "A partir de 8 semanas", value: "Bicicleta, elíptico e caminhadas maiores" }
    ],
    toDos: [
      "Fazer a fisioterapia do dedo e a drenagem em casa, seguindo os vídeos",
      "Pilates e musculação sem apoiar peso na ponta dos pés",
      "Começar a massagem da cicatriz quando a Dra. Laice liberar",
      "Trabalho em pé ou andando a partir de 6 semanas",
      "Dirigir trajetos longos a partir de 6 semanas, se liberada",
      "A partir de 8 semanas: bicicleta, elíptico e caminhadas maiores"
    ],
    avoid: [
      "Impacto no pé: corrida e saltos",
      "Exercícios com peso na ponta dos pés",
      "Calçados apertados ou de salto",
      "Mar e piscina antes da liberação da Dra. Laice"
    ],
    exercises: [
      "Mobilização e alongamentos suaves do hálux (conforme tolerância)",
      "Bola na sola do pé, evitando a área operada",
      "Fortalecimento progressivo dos músculos do pé",
      "Drenagem do pé em casa",
      "Massagem da cicatriz (quando liberado)"
    ],
    image: "/assets/cartilha/22-hv-phase-03-low-impact-exercise.png",
    imageAlt: "Atividade de baixo impacto após liberação médica"
  },
  {
    id: 4,
    title: "4. Tudo Liberado",
    duration: "A partir de 12 semanas",
    icon: <Award />,
    description: "Qualquer calçado, inclusive salto (comece baixo e por poucas horas). Atividades liberadas, inclusive corrida e saltos, com progressão. O inchaço ainda vai e volta até 6–8 meses, quando aparece o resultado final.",
    goals: [
      { label: "Calçado", value: "Qualquer um, inclusive salto — começar baixo e por poucas horas" },
      { label: "Atividade", value: "Liberada, inclusive corrida e saltos" },
      { label: "Inchaço", value: "Pode ir e voltar até 6–8 meses" },
      { label: "Resultado final", value: "Entre 6 e 8 meses" }
    ],
    toDos: [
      "Voltar ao salto começando baixo e por poucas horas",
      "Progredir corrida e saltos aos poucos",
      "Manter os exercícios de fortalecimento do pé",
      "Proteger a cicatriz do sol (FPS 50) até completar 6 meses"
    ],
    avoid: [
      "Salto alto o dia inteiro logo no início",
      "Aumentar corrida ou saltos de uma vez",
      "Negligenciar os exercícios de manutenção"
    ],
    exercises: [
      "Fortalecimento do pé e da panturrilha",
      "Treino de marcha e equilíbrio",
      "Corrida e saltos com progressão gradual"
    ],
    image: "/assets/cartilha/21-hv-footwear-progression-wide-toe.png",
    imageAlt: "Progressão de calçados: sandália cirúrgica, tênis largo e sapato confortável"
  }
];

export const timeline: TimelineItem[] = [
  { time: 'Semana 0-2', items: ['Repouso em casa', 'Curativo intacto', 'Sandália o tempo todo', 'Afastada do trabalho'] },
  { time: 'Semana 2', items: ['Retirada dos pontos', 'Home office com pé elevado', 'Caminhadas curtas com a sandália'] },
  { time: 'Semana 3-4', items: ['Dirigir trajetos curtos (se liberada)', 'Presencial sentada a partir de 4 semanas'] },
  { time: 'Semana 6', items: ['Saem a sandália e os curativos', 'Início da fisioterapia do dedo', 'Tênis largo ou papete', 'Trabalho em pé'] },
  { time: 'Semana 8', items: ['Bicicleta, elíptico e caminhadas maiores', 'Viagens liberadas'] },
  { time: 'Semana 12', items: ['Tudo liberado, inclusive corrida e saltos', 'Qualquer calçado, inclusive salto'] },
  { time: '6-8 meses', items: ['Resultado final', 'Inchaço vai diminuindo'] }
];

export const generalGuidelines: Guideline[] = [
  {
    id: 'before',
    title: "Antes da Cirurgia",
    icon: <Calendar />,
    items: [
      "Prepare a casa: almofadas para elevar o pé, tapetes fora do caminho, banquinho para o banho e capa impermeável para o curativo (bota de chuveiro)",
      "Tenha um acompanhante para a alta hospitalar",
      "Reserve os retornos semanais das primeiras 6 semanas",
      "Organize o trabalho: 2 semanas de afastamento, depois home office até a 4ª semana",
      "Faça os exames pré-operatórios solicitados",
      "Avise a equipe se usa hormônios ou anticoagulantes, se é fumante ou se tem varizes ou histórico de trombose",
      "Retire o esmalte das unhas dos pés"
    ]
  },
  {
    id: 'surgery-day',
    title: "Dia da Cirurgia",
    icon: <CheckCircle />,
    items: [
      "Hospital-dia: você volta para casa no mesmo dia",
      "Anestesia com bloqueio do nervo — por isso a dor costuma ser pouca",
      "Você sai com o curativo feito pela Dra. Laice e a sandália pós-operatória — são dois pares: um para andar e outro para dormir",
      "Em casa: pé elevado, andar com a sandália conforme tolerar e mexer o tornozelo várias vezes por hora",
      "Tome os remédios conforme a receita"
    ]
  },
  {
    id: 'dressing',
    title: "Curativo",
    icon: <Shield />,
    items: [
      "Não abrir, não molhar e não trocar o curativo",
      "Só a Dra. Laice troca: toda semana até 6 semanas, no consultório ou online",
      "Não aplicar pomadas, cremes ou qualquer substância",
      "Se o curativo molhar, soltar ou ficar apertado, avise a equipe no mesmo dia"
    ],
    image: "/assets/cartilha/06-hv-intact-dressing.png",
    imageAlt: "Curativo limpo, seco e intacto com símbolos de não molhar e não manipular"
  },
  {
    id: 'sandal',
    title: "Sandália e Calçados",
    icon: <Activity />,
    items: [
      "Do 1º dia até 6 semanas: sandália pós-operatória o tempo todo — para andar, para dormir e no banho",
      "Nunca pisar descalça, mesmo dentro de casa",
      "De 6 a 12 semanas: tênis largo ou papete",
      "A partir de 12 semanas: qualquer calçado, inclusive salto — comece baixo e por poucas horas"
    ],
    image: "/assets/cartilha/07-hv-surgical-sandal-forefoot.png",
    imageAlt: "Sandália cirúrgica de descarga do antepé"
  },
  {
    id: 'medications',
    title: "Medicações",
    icon: <Pill />,
    items: [
      "Siga sempre a receita entregue pela equipe — as doses, os horários e o tempo de uso podem variar conforme o seu caso",
      "Antibiótico: Zinnat® (cefuroxima) — por 7 dias",
      "Anti-inflamatório: Alginac® — por 5 dias",
      "Analgésico para dor leve a moderada: Novalgina®",
      "Analgésico para dor intensa: Tramadol®",
      "Após tomar Tramadol, evite dirigir, ingerir álcool ou tomar decisões importantes",
      "Profilaxia antitrombótica (prevenção de trombose): mantida ou retirada conforme avaliação individual da equipe"
    ]
  },
  {
    id: 'elevation',
    title: "Repouso e Elevação",
    icon: <TrendingUp />,
    items: [
      "Manter o pé elevado acima do nível do coração sempre que estiver deitada",
      "Evitar caminhar longas distâncias ou ficar longos períodos em pé",
      "Evitar subir e descer escadas repetidamente",
      "Nas 2 primeiras semanas, fazer apenas o necessário dentro de casa"
    ],
    image: "/assets/cartilha/08-hv-foot-elevation-edema-control.png",
    imageAlt: "Pé elevado sobre travesseiros para controle de edema"
  },
  {
    id: 'dvt',
    title: "Prevenção de Trombose (TVP)",
    icon: <Activity />,
    items: [
      "Mexa o tornozelo várias vezes por hora: puxe o pé para cima e empurre para baixo (movimento de bomba), mesmo deitada — isso ativa a circulação da perna",
      "Caminhe um pouco ao longo do dia com a sandália: pequenas caminhadas ajudam o sangue a circular",
      "Nos períodos de repouso, mantenha o pé elevado e evite ficar muitas horas totalmente parada",
      "Beba bastante água ao longo do dia e evite cruzar as pernas por longos períodos",
      "Viagens com mais de 2 horas nas primeiras 6 semanas: avise a Dra. Laice antes, levante e caminhe a cada 1 a 2 horas",
      "Use meias de compressão e/ou medicação anticoagulante apenas se forem prescritas pela equipe — não inicie por conta própria",
      "Avise a equipe se você tem histórico de trombose, usa anticoncepcional/hormônios, é fumante ou tem varizes"
    ]
  },
  {
    id: 'ice',
    title: "Gelo — NÃO utilizar",
    icon: <AlertCircle />,
    items: [
      "Não utilizar gelo no pós-operatório",
      "O curativo não permite passagem adequada de frio",
      "Para controle do inchaço: repouso, elevação do pé e uso contínuo da sandália"
    ],
    image: "/assets/cartilha/09-hv-dos-and-donts-no-ice.png",
    imageAlt: "Checklist do que fazer e do que evitar, incluindo não usar gelo"
  },
  {
    id: 'scar',
    title: "Inchaço e Cicatriz",
    icon: <Hand />,
    items: [
      "O inchaço dura de 6 a 8 meses e vai e volta — isso é esperado",
      "Os pontos saem com cerca de 2 semanas",
      "Massagem na cicatriz só depois da liberação da Dra. Laice: ajuda a reduzir rigidez, aderências, dor e coceira",
      "Hidrate e proteja a cicatriz por 6 meses; ela vai clareando ao longo de 1 ano"
    ],
    image: "/assets/cartilha/13-hv-scar-care-massage.png",
    imageAlt: "Massagem suave ao redor da cicatriz cirúrgica"
  }
];

export const dailyActivities: DailyActivity[] = [
  {
    id: 'bath',
    title: "Banho",
    icon: <Activity />,
    items: [
      "Liberado desde o 1º dia",
      "Sentada, no banquinho",
      "Com a sandália e a capa impermeável (bota de chuveiro) protegendo o curativo",
      "O curativo não pode molhar"
    ],
    image: "/assets/cartilha/19-hv-daily-activity-bath.png",
    imageAlt: "Banho com sandália cirúrgica e curativo protegido"
  },
  {
    id: 'walking',
    title: "Atividade Física",
    icon: <TrendingUp />,
    items: [
      "Até 2 semanas: repouso",
      "2 a 6 semanas: caminhadas curtas com a sandália (sem academia, corrida, caminhadas longas ou escadas repetidas)",
      "A partir de 6 semanas: sem impacto no pé — fisioterapia do dedo, pilates e musculação sem peso na ponta dos pés",
      "A partir de 8 semanas: bicicleta, elíptico e caminhadas maiores",
      "A partir de 12 semanas: tudo liberado, inclusive corrida e saltos"
    ],
    image: "/assets/cartilha/21-hv-footwear-progression-wide-toe.png",
    imageAlt: "Progressão de calçados: sandália cirúrgica, tênis largo e sapato confortável"
  },
  {
    id: 'work',
    title: "Trabalho",
    icon: <Award />,
    items: [
      "Até 2 semanas: afastada",
      "2 a 4 semanas: home office, com o pé elevado",
      "4 a 6 semanas: presencial sentada, com a sandália. Vá de Uber/táxi (ou dirigindo, se for perto e estiver liberada) — sem transporte público",
      "A partir de 6 semanas: trabalho em pé ou andando"
    ],
    image: "/assets/cartilha/20-hv-work-home-office-elevated-foot.png",
    imageAlt: "Home office com pé elevado e sandália cirúrgica"
  },
  {
    id: 'driving',
    title: "Dirigir",
    icon: <Clock />,
    items: [
      "Trajetos curtos: a partir de 3 a 4 semanas",
      "Trajetos longos: a partir de 6 semanas",
      "Não dirija depois de tomar analgésicos fortes",
      "A liberação é individual — confirme com a Dra. Laice no retorno"
    ]
  },
  {
    id: 'travel',
    title: "Viagens",
    icon: <Globe />,
    items: [
      "Até 2 semanas: evitar",
      "2 a 8 semanas: só viagens tranquilas e combinadas com a Dra. Laice (os curativos são semanais até 6 semanas)",
      "A partir de 8 semanas: liberado",
      "Viagens com mais de 2 h nas primeiras 6 semanas: avise a Dra. Laice. Levante e caminhe a cada 1 a 2 h, beba água, use meia de compressão só se prescrita e eleve o pé ao chegar"
    ]
  },
  {
    id: 'outside-sp',
    title: "Mora Fora de São Paulo?",
    icon: <Users />,
    items: [
      "Volte para casa cerca de 3 dias após a cirurgia",
      "Retorne por volta de 14 dias para tirar os pontos e fazer o primeiro tape",
      "Depois disso, os curativos podem ser online até 6 semanas",
      "Se mora fora do Brasil, permaneça no país até a retirada dos pontos e o tape"
    ]
  },
  {
    id: 'sun',
    title: "Sol, Mar e Piscina",
    icon: <AlertCircle />,
    items: [
      "Proteja a cicatriz com FPS 50 ou mantenha-a coberta por 6 meses",
      "Mar e piscina só depois da liberação da Dra. Laice"
    ]
  }
];

export const milestones: Milestone[] = [
  {
    id: 'initial',
    title: "Até 2 Semanas — Repouso em Casa",
    icon: <Shield />,
    items: [
      "Curativo intacto, trocado só pela Dra. Laice",
      "Sandália pós-operatória o tempo todo",
      "Pé elevado e afastada do trabalho",
      "Retirada dos pontos com cerca de 2 semanas"
    ]
  },
  {
    id: 'week2',
    title: "2 a 6 Semanas — Sandália e Curativos Semanais",
    icon: <Activity />,
    items: [
      "Caminhadas curtas com a sandália",
      "Home office até 4 semanas; presencial sentada de 4 a 6 semanas",
      "Curativos e retornos semanais",
      "Dirigir trajetos curtos a partir de 3 a 4 semanas, se liberada"
    ]
  },
  {
    id: 'week6',
    title: "6 Semanas — Saem a Sandália e os Curativos",
    icon: <CheckCircle />,
    items: [
      "Tênis largo ou papete",
      "Início da fisioterapia do dedo e da drenagem em casa",
      "Pilates e musculação sem impacto no pé",
      "Trabalho em pé ou andando"
    ]
  },
  {
    id: 'week8',
    title: "8 Semanas",
    icon: <TrendingUp />,
    items: ["Bicicleta, elíptico e caminhadas maiores", "Viagens liberadas"]
  },
  {
    id: 'week12',
    title: "12 Semanas — Tudo Liberado",
    icon: <Award />,
    items: [
      "Qualquer calçado, inclusive salto (comece baixo e por poucas horas)",
      "Qualquer atividade, inclusive corrida e saltos, com progressão"
    ]
  },
  {
    id: 'final',
    title: "6 a 8 Meses — Resultado Final",
    icon: <Award />,
    items: [
      "O inchaço vai diminuindo",
      "Retornos com 8 semanas, 3, 4 e 6 meses"
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "Dói muito?",
    answer: "Em geral, pouco. A anestesia com bloqueio do nervo ajuda bastante, e os analgésicos da receita controlam o desconforto."
  },
  {
    question: "Posso tomar banho?",
    answer: "Sim, desde o 1º dia: sentada no banquinho, com a sandália e a capa impermeável protegendo o curativo."
  },
  {
    question: "Quem troca o curativo?",
    answer: "Só a Dra. Laice, toda semana até 6 semanas, no consultório ou online.",
    note: "Não abra, não molhe e não troque o curativo em casa."
  },
  {
    question: "Posso usar gelo para o inchaço?",
    answer: "Não. O curativo do pós-operatório não permite passagem adequada de frio. O controle do inchaço é feito com repouso, elevação do pé e uso contínuo da sandália."
  },
  {
    question: "Posso pisar sem a sandália?",
    answer: "Não. Até 6 semanas a sandália pós-operatória é usada o tempo todo — para andar, dormir e no banho. Nunca pisar descalça, mesmo dentro de casa."
  },
  {
    question: "Quando posso voltar a dirigir?",
    answer: "Trajetos curtos a partir de 3 a 4 semanas e longos a partir de 6 semanas. Não dirija depois de tomar analgésicos fortes.",
    note: "A liberação é sempre individual."
  },
  {
    question: "Quando volto ao trabalho?",
    answer: "Afastada até 2 semanas. Home office com o pé elevado de 2 a 4 semanas. Presencial sentada, com a sandália, de 4 a 6 semanas (Uber/táxi, sem transporte público). Trabalho em pé ou andando a partir de 6 semanas."
  },
  {
    question: "Quando posso fazer atividade física?",
    answer: "Caminhadas curtas com a sandália de 2 a 6 semanas. A partir de 6 semanas, pilates e musculação sem impacto no pé; a partir de 8 semanas, bicicleta, elíptico e caminhadas maiores. Com 12 semanas, tudo liberado, inclusive corrida e saltos."
  },
  {
    question: "Quando volto a usar tênis e salto?",
    answer: "Sandália pós-operatória até 6 semanas. Tênis largo ou papete de 6 a 12 semanas. A partir de 12 semanas, qualquer calçado — inclusive salto, começando baixo e por poucas horas."
  },
  {
    question: "Posso viajar?",
    answer: "Evite nas 2 primeiras semanas. De 2 a 8 semanas, só viagens tranquilas e combinadas com a Dra. Laice. A partir de 8 semanas, liberado.",
    note: "Viagens com mais de 2 h nas primeiras 6 semanas: avise a Dra. Laice antes."
  },
  {
    question: "É normal ter inchaço?",
    answer: "Sim. O inchaço dura de 6 a 8 meses e vai e volta nesse período. Repouso, elevação do pé e, no início, o uso contínuo da sandália ajudam no controle. Se piorar de repente ou vier com dor na panturrilha, procure a equipe.",
    note: "Inchaço que vai e volta é esperado; piora súbita não é."
  },
  {
    question: "Como são os retornos?",
    answer: "Semanais até 6 semanas, depois com 8 semanas, 3, 4 e 6 meses. Todos já estão incluídos."
  },
  {
    question: "A fisioterapia está incluída?",
    answer: "O guia de exercícios com vídeos está incluído e começa com 6 semanas. Sessões individuais de fisioterapia são contratadas à parte."
  },
  {
    question: "Quando vejo o resultado final?",
    answer: "Entre 6 e 8 meses, quando o inchaço já diminuiu bastante."
  },
  {
    question: "O joanete pode voltar?",
    answer: "É raro, especialmente na técnica percutânea."
  },
  {
    question: "Os parafusos precisam ser retirados?",
    answer: "Em geral, não. São parafusos sem cabeça, que ficam dentro do osso."
  },
  {
    question: "Preciso cuidar da cicatriz depois que ela fechar?",
    answer: "Sim. Depois da liberação da Dra. Laice, a massagem ajuda a reduzir rigidez, aderências, dor e coceira. Hidrate e proteja do sol (FPS 50 ou cicatriz coberta) por 6 meses.",
    note: "Mar e piscina só depois da liberação."
  }
];

export const emergencySigns: string[] = [
  "Falta de ar súbita",
  "Dor no peito",
  "Palpitação",
  "Tosse com sangue"
];

export const warningSigns: string[] = [
  "Dor que não melhora com o analgésico",
  "Febre acima de 37,8°C",
  "Vermelhidão, secreção ou mau cheiro no curativo",
  "Panturrilha dolorida, inchada, vermelha, quente ou endurecida (possível trombose)",
  "Sangramento que encharca o curativo",
  "Dedo frio ou roxo, ou dormência que aumenta",
  "Curativo que molhou, soltou ou ficou apertado"
];
