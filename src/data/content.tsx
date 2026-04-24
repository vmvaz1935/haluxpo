import { Shield, Activity, TrendingUp, Clock, Award, CheckCircle, AlertCircle, Hand } from '../components/Icons';
import type { Phase, TimelineItem, Guideline, DailyActivity, Milestone, FAQ } from '../types';

export const phases: Phase[] = [
  {
    id: 1,
    title: "1. Proteção e Repouso Inicial",
    duration: "Semanas 0-2",
    icon: <Shield />,
    description: "Proteção da cirurgia, controle de dor e edema. O curativo deve permanecer intacto e a sandália cirúrgica deve ser usada o tempo todo.",
    goals: [
      { label: "Curativo", value: "Manter intacto até o retorno" },
      { label: "Dor e Edema", value: "Controlar com repouso e elevação" },
      { label: "Sandália", value: "Usar o tempo todo — inclusive para dormir e no banho" },
      { label: "Carga", value: "Parcial, somente com a sandália cirúrgica" }
    ],
    toDos: [
      "Manter o pé elevado acima do nível do coração sempre que estiver deitada",
      "Usar a sandália cirúrgica o tempo todo: para andar, dormir e durante o banho",
      "Nunca pisar descalça, mesmo dentro de casa",
      "Fazer apenas atividades necessárias dentro de casa",
      "Carga parcial somente com a sandália cirúrgica"
    ],
    avoid: [
      "Remover, afrouxar ou manipular o curativo",
      "Molhar o curativo em hipótese alguma",
      "Aplicar pomadas, cremes ou qualquer substância sobre o curativo",
      "Utilizar gelo (o curativo não permite passagem adequada de frio)",
      "Caminhar longas distâncias ou ficar longos períodos em pé",
      "Subir e descer escadas repetidamente",
      "Fumar (retarda cicatrização)"
    ],
    exercises: [
      "Movimentos suaves dos dedos e tornozelo (quando liberado)"
    ]
  },
  {
    id: 2,
    title: "2. Progressão de Carga e Fisioterapia",
    duration: "Semanas 2-8",
    icon: <Activity />,
    description: "Progressão gradual de carga e retorno a atividades básicas. Fisioterapia com início mais claro a partir da 4ª semana (mobilidade global sem carga). Por volta da 6ª semana, liberação da sandália cirúrgica e dos curativos.",
    goals: [
      { label: "Carga", value: "Progressão conforme liberação médica" },
      { label: "Movimento", value: "Recuperar amplitude de movimento" },
      { label: "Fisioterapia", value: "Início mais claro a partir da 4ª semana" },
      { label: "Sandália e Curativos", value: "Liberação por volta da 6ª semana" },
      { label: "Atividades", value: "Retorno gradual a atividades básicas" }
    ],
    toDos: [
      "Progressão de carga conforme orientação médica específica",
      "Iniciar fisioterapia de forma mais clara a partir da 4ª semana",
      "A partir da 4ª semana: mobilidade global sem carga (cadeia posterior sentado, quadril, joelho, tornozelo)",
      "A partir da 4ª semana: bola na fáscia plantar sem sandália, carga leve/moderada (evitando a área operada)",
      "A partir da 6ª semana: exercícios específicos de mobilidade ativa do hálux, conforme liberação",
      "Continuar elevação do pé quando em repouso",
      "Usar calçado adequado conforme orientação",
      "Realizar exercícios prescritos regularmente"
    ],
    avoid: [
      "Sobrecarga precoce (pode comprometer consolidação óssea)",
      "Exercícios ativos específicos do hálux antes da 6ª semana (proteger a região operada)",
      "Carga no antepé ou bola sobre a área operada nas primeiras semanas",
      "Calçados apertados ou de salto alto",
      "Atividades de alto impacto",
      "Longos períodos em pé sem descanso",
      "Dirigir sem liberação médica",
      "Carregar peso"
    ],
    exercises: [
      "Semana 4-6 — Alongamento de cadeia posterior sentado",
      "Semana 4-6 — Mobilidade de quadril, joelho e tornozelo sem carga",
      "Semana 4-6 — Bola na fáscia plantar, sem sandália, carga leve/moderada (evitando a área operada)",
      "A partir da 6ª semana — Mobilização articular específica do hálux (quando liberado)",
      "A partir da 6ª semana — Alongamentos suaves do hálux (conforme tolerância)",
      "A partir da 6ª semana — Fortalecimento progressivo dos músculos do pé",
      "A partir da 6ª semana — Mobilização suave da cicatriz (quando liberado pela equipe)"
    ]
  },
  {
    id: 3,
    title: "3. Fortalecimento e Retorno às Atividades",
    duration: "Mês 2-6 (alta em 6 meses)",
    icon: <TrendingUp />,
    description: "Atividade física de baixo impacto a partir do 2º mês. Aos 3 meses, se a evolução estiver adequada, liberação para qualquer tipo de calçado e atividades de maior impacto. Alta médica prevista em 6 meses.",
    goals: [
      { label: "Atividade Física", value: "Baixo impacto a partir do 2º mês; maior impacto a partir do 3º mês (se evolução adequada)" },
      { label: "Calçados", value: "Liberação para qualquer tipo de calçado aos 3 meses (se evolução adequada)" },
      { label: "Força", value: "Fortalecimento completo da musculatura do pé" },
      { label: "Correção", value: "Manutenção da correção obtida" },
      { label: "Alta", value: "Prevista em 6 meses" }
    ],
    toDos: [
      "Continuar exercícios de fortalecimento e alongamento",
      "Iniciar atividade física de baixo impacto (a partir do 2º mês, com liberação)",
      "Progredir para atividade física de maior impacto a partir do 3º mês (com liberação, se evolução adequada)",
      "Retomar o uso de qualquer tipo de calçado a partir do 3º mês (com liberação, se evolução adequada)",
      "Manter acompanhamento médico conforme agendado",
      "Realizar controle radiográfico no retorno"
    ],
    avoid: [
      "Esportes de alto impacto sem liberação médica",
      "Calçados inadequados antes da liberação",
      "Negligenciar exercícios de manutenção"
    ],
    exercises: [
      "Exercícios de fortalecimento específicos para o pé",
      "Treino de marcha e equilíbrio",
      "Exercícios funcionais com progressão gradual"
    ]
  }
];

export const timeline: TimelineItem[] = [
  { time: 'Até o retorno', items: ['Curativo intacto', 'Sandália cirúrgica o tempo todo', 'Repouso com pé elevado'] },
  { time: 'Semana 2-4', items: ['Remoção de pontos (quando aplicável)', 'Progressão de carga conforme avaliação', 'Início de fisioterapia'] },
  { time: 'Semana 6', items: ['Liberação da sandália cirúrgica', 'Liberação dos curativos', 'Progressão da fisioterapia', 'Início do manejo da cicatriz (quando liberado)', 'Retorno a trabalho sedentário (quando apropriado)'] },
  { time: '2 meses', items: ['Atividade física de baixo impacto (com liberação)'] },
  { time: '3 meses', items: ['Liberação para qualquer tipo de calçado (se evolução adequada)', 'Liberação para atividade física de maior impacto (se evolução adequada)', 'Controle radiográfico'] },
  { time: '6 meses', items: ['Alta médica', 'Liberação progressiva completa conforme consolidação óssea'] }
];

export const generalGuidelines: Guideline[] = [
  {
    id: 'dressing',
    title: "Curativo",
    icon: <Shield />,
    items: [
      "O curativo do centro cirúrgico deve permanecer intacto até o retorno",
      "Não remover, não afrouxar e não manipular",
      "Se houver qualquer sangramento, comunique a equipe (médica, fisioterapeuta ou enfermeira) — eles orientarão a conduta",
      "Enquanto isso, apenas reforce com gaze estéril por cima em caso de pequeno sangramento",
      "Não aplicar pomadas, cremes ou qualquer substância",
      "Liberação dos curativos prevista por volta da 6ª semana"
    ]
  },
  {
    id: 'sandal',
    title: "Sandália Cirúrgica",
    icon: <Activity />,
    items: [
      "Usar a sandália o tempo todo: para andar, para dormir e durante o banho",
      "A sandália protege a sola e evita carga descalça",
      "Nunca pisar descalça, mesmo dentro de casa",
      "Carga parcial somente com a sandália"
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
      "Fazer apenas atividades necessárias dentro de casa"
    ]
  },
  {
    id: 'ice',
    title: "Gelo — NÃO utilizar",
    icon: <AlertCircle />,
    items: [
      "Não utilizar gelo no pós-operatório",
      "O curativo não permite passagem adequada de frio",
      "Para controle de edema: repouso, elevação do pé e uso contínuo da sandália"
    ]
  },
  {
    id: 'scar',
    title: "Cuidado com a Cicatriz",
    icon: <Hand />,
    items: [
      "Após cicatrização, a cicatriz pode receber tratamento quando liberado pela equipe",
      "Mobilização manual e massagem ajudam a reduzir rigidez, aderências, dor e coceira",
      "O objetivo é melhorar mobilidade do tecido e conforto no uso do calçado",
      "A progressão respeita a técnica cirúrgica e a fase de cicatrização — sempre com orientação da equipe"
    ]
  }
];

export const dailyActivities: DailyActivity[] = [
  {
    id: 'bath',
    title: "Banho",
    icon: <Activity />,
    items: [
      "Usar a sandália cirúrgica durante o banho (protege a sola)",
      "Não molhar o curativo em hipótese alguma",
      "Se necessário, proteger com plástico/bolsa impermeável"
    ]
  },
  {
    id: 'walking',
    title: "Locomoção",
    icon: <TrendingUp />,
    items: [
      "Carga parcial somente com a sandália cirúrgica",
      "Evitar subir e descer escadas repetidamente",
      "Fazer apenas deslocamentos necessários dentro de casa",
      "Progressão conforme avaliação médica"
    ]
  },
  {
    id: 'driving',
    title: "Dirigir",
    icon: <Clock />,
    items: [
      "Não dirigir por enquanto",
      "A liberação depende da avaliação médica individual"
    ]
  },
  {
    id: 'work',
    title: "Trabalho e Atividades",
    icon: <Award />,
    items: [
      "Não fazer academia, corrida ou esportes",
      "Evitar carregar peso",
      "Atividade física de baixo impacto: a partir do 2º mês (com liberação)",
      "Retorno ao trabalho depende do tipo de atividade — consulte a equipe"
    ]
  }
];

export const milestones: Milestone[] = [
  {
    id: 'initial',
    title: "Até o Retorno (Semanal nas 2 Primeiras Semanas)",
    icon: <Shield />,
    items: [
      "Curativo intacto",
      "Sandália cirúrgica o tempo todo",
      "Repouso com pé elevado",
      "Carga parcial apenas com a sandália",
      "Retornos semanais para avaliação da cirurgia e curativo"
    ]
  },
  {
    id: 'week4',
    title: "4 Semanas — Início Mais Claro da Fisioterapia",
    icon: <Activity />,
    items: [
      "Início mais claro da fisioterapia",
      "Mobilidade global sem carga: cadeia posterior sentado, quadril, joelho e tornozelo",
      "Bola na fáscia plantar sem sandália, com carga leve a moderada (evitando a área operada)",
      "Objetivo: evitar rigidez proximal sem estressar o antepé"
    ]
  },
  {
    id: 'week6',
    title: "6 Semanas — Liberação da Sandália e dos Curativos",
    icon: <CheckCircle />,
    items: [
      "Liberação da sandália cirúrgica",
      "Liberação dos curativos",
      "Início dos exercícios específicos do pé/hálux: elevação, abdução, controle dos dedos",
      "Progressão da reabilitação conforme avaliação"
    ]
  },
  {
    id: 'month2',
    title: "2 Meses",
    icon: <TrendingUp />,
    items: ["Atividade física de baixo impacto (com liberação)"]
  },
  {
    id: 'month3',
    title: "3 Meses — Liberação Funcional",
    icon: <TrendingUp />,
    items: [
      "Liberação funcional conforme consolidação óssea",
      "Liberação para qualquer tipo de calçado (se evolução adequada)",
      "Liberação para atividade física de maior impacto (se evolução adequada)",
      "Controle radiográfico"
    ]
  },
  {
    id: 'month6',
    title: "6 Meses — Alta Completa",
    icon: <Award />,
    items: [
      "Alta médica completa",
      "Liberação progressiva completa conforme consolidação óssea"
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: "Posso usar gelo para o inchaço?",
    answer: "Não. O curativo do pós-operatório não permite passagem adequada de frio. O controle do edema é feito com repouso, elevação do pé e uso contínuo da sandália cirúrgica."
  },
  {
    question: "Posso pisar sem a sandália?",
    answer: "Não. A sandália cirúrgica deve ser usada o tempo todo — para andar, dormir e durante o banho. Nunca pisar descalça, mesmo dentro de casa."
  },
  {
    question: "Quando posso voltar a dirigir?",
    answer: "Não dirija por enquanto. A liberação depende da avaliação médica individual e do lado operado.",
    note: "Consulte sua cirurgiã para liberação específica."
  },
  {
    question: "Quando posso fazer atividade física?",
    answer: "Atividade física de baixo impacto é liberada a partir do 2º mês, com autorização médica. A partir do 3º mês, se a evolução estiver adequada, é liberada atividade física de maior impacto e o uso de qualquer tipo de calçado. Esportes dependem da consolidação óssea e liberação individualizada.",
    note: "A alta médica está prevista para 6 meses."
  },
  {
    question: "E se o curativo sangrar um pouco?",
    answer: "Se houver qualquer sangramento, comunique a equipe (médica, fisioterapeuta ou enfermeira) para que orientem a conduta. Enquanto isso, apenas reforce com gaze estéril por cima — não remova, não afrouxe e não manipule o curativo. Se o sangramento for volumoso, procure a equipe imediatamente.",
    note: "Qualquer sangramento deve ser comunicado à equipe."
  },
  {
    question: "É normal ter inchaço?",
    answer: "Sim, o edema é esperado. O inchaço melhora de forma progressiva, mas pode persistir de maneira controlada até por volta do 6º mês. É normal variar bastante conforme o perfil do paciente (sexo, idade, comorbidades, entre outros fatores). Repouso, elevação do pé e uso contínuo da sandália ajudam no controle. Se piorar subitamente ou vier acompanhado de dor na panturrilha, procure a equipe.",
    note: "Edema controlado até o 6º mês é esperado; piora súbita não é."
  },
  {
    question: "Quanto tempo dura a fisioterapia?",
    answer: "A duração da fisioterapia é individualizada conforme a evolução. O programa inclui mobilização, alongamento, fortalecimento e treino funcional.",
    note: "A progressão é individualizada conforme a técnica cirúrgica."
  },
  {
    question: "Preciso cuidar da cicatriz depois que ela fechar?",
    answer: "Sim. Após a cicatrização, o tratamento da cicatriz ajuda a reduzir rigidez, aderências, dor e coceira. Quando liberado pela equipe, pode incluir mobilização manual, massagem e outros recursos em fisioterapia.",
    note: "O início depende da técnica cirúrgica. Sempre com orientação da equipe."
  }
];

export const warningSigns: string[] = [
  "Dor que não melhora com analgésico",
  "Febre acima de 37,8°C",
  "Vermelhidão intensa ou secreção no curativo",
  "Inchaço súbito e doloroso da panturrilha",
  "Sangramento volumoso no curativo"
];
