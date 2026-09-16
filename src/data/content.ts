import { Plan, ComparisonItem, CaseStudy, FaqItem, DiagnosticQuestion } from '../types';

export const PLANS_DATA: Plan[] = [
  {
    id: 'performance',
    name: 'PERFORMANCE',
    badge: 'Mais Contratado para Lançamentos',
    price: 'R$ 5.000',
    pricePeriod: '/mês',
    contractTerm: 'Contrato de 12 meses',
    mediaBudgetNote: '+ verba de mídia do cliente (para verbas de até R$ 20.000/mês)',
    summary: 'Para empreendimentos ativos que precisam gerar demanda continuamente e trabalhar em conjunto com o time comercial.',
    idealFor: 'Lançamentos e empreendimentos com stand aberto ou em fase de vendas que necessitam de tração contínua de leads qualificados.',
    deliverables: [
      'Vídeo teaser / manifesto institucional do projeto',
      'Book executivo completo do empreendimento',
      'Kit completo de apoio e argumentos para o corretor',
      'Peças dinâmicas e estáticas de remarketing segmentado',
      'Materiais gráficos e impressos complementares contínuos',
      'Gestão especializada de Meta Ads (Facebook e Instagram)',
      'Gestão especializada de Google Ads (Pesquisa, Display e PMax)',
      'Geração contínua e previsível de leads qualificados',
      'Desenho e parametrização de fluxos de WhatsApp',
      '8 posts + 8 stories por mês com foco em tração comercial',
      'Campanhas de remarketing ativo sobre a base',
      'Relatório gerencial mensal detalhado de métricas',
      'Reunião mensal de alinhamento com a diretoria comercial',
      'Acompanhamento semanal de fechamento e conversão'
    ],
    exclusionsNote: 'Gestão de mídia para verbas de até R$ 20 mil/mês. Verba de mídia paga diretamente às plataformas (Meta/Google).',
    ctaText: 'QUERO CONHECER O PERFORMANCE',
    highlighted: false
  },
  {
    id: 'venda-total',
    name: 'VENDA TOTAL',
    badge: 'Operação Completa Integrada',
    price: 'R$ 7.900',
    pricePeriod: '/mês',
    setupFee: '+ R$ 3.000 de implantação única',
    contractTerm: 'Contrato de 12 meses',
    summary: 'Para operações que querem integrar marketing, atendimento, qualificação com Inteligência Artificial e dados comerciais.',
    idealFor: 'Incorporadoras e loteadoras que buscam máxima liquidez, eliminando o gargalo do atendimento humano inicial e blindando o funil.',
    includesInherited: 'Inclui tudo do Performance +',
    deliverables: [
      'Atendimento inteligente com IA 24 horas por dia, 7 dias por semana',
      'Qualificação imediata de perfil financeiro e capacidade de compra',
      'Qualificação detalhada do horizonte de compra e urgência do lead',
      'Distribuição instantânea do lead qualificado diretamente ao corretor de plantão',
      'Até 5 usuários simultâneos no software de gestão operacional',
      'Treinamento imersivo e homologação de todo o time comercial',
      'Dashboard executivo em tempo real com visão total do funil',
      'Dados e relatórios analíticos do funil completo (Lead ao VGV)',
      'Consultoria estratégica mensal direta com o fundador (Diogo Garcia)',
      'Suporte operacional prioritário com SLA de resposta em até 4 horas úteis'
    ],
    exclusionsNote: 'Do lead à venda: uma visão completa da operação comercial e de marketing.',
    ctaText: 'QUERO CONHECER O VENDA TOTAL',
    highlighted: true
  },
  {
    id: 'branding',
    name: 'BRANDING',
    badge: 'Estruturação Inicial',
    price: 'R$ 25.000',
    pricePeriod: 'Projeto único',
    contractTerm: 'Duração: 2 meses',
    summary: 'Para lançamentos que precisam de uma base profissional de posicionamento, identidade e materiais de venda.',
    idealFor: 'Empreendimentos em fase de concepção, aprovação ou pré-marketing que ainda não possuem identidade e book comercial estruturados.',
    deliverables: [
      'Workshop imersivo de alinhamento (2 horas)',
      'Diagnóstico de mercado e posicionamento de produto',
      'Naming e arquitetura de marca (se aplicável)',
      'Logomarca, tipografia e identidade visual completa',
      'Conceito criativo do empreendimento e slogan',
      'Kit de anúncios para Meta Ads e Google Ads (layouts prontos)',
      'Landing Page de alta conversão para o lançamento',
      '8 posts estratégicos para redes sociais (feed e stories)',
      '4 peças institucionais para disparo em WhatsApp',
      'Flyer impresso + Folder de apresentação do projeto',
      'Painel para outdoor, tapume de obra e testeira de stand',
      'Deck comercial executivo para corretores e imobiliárias'
    ],
    exclusionsNote: 'Não inclui gestão mensal de tráfego, produção de conteúdo recorrente ou software de IA para atendimento.',
    ctaText: 'QUERO CONHECER O BRANDING',
    highlighted: false
  }
];

export const COMPARISON_TABLE: ComparisonItem[] = [
  { feature: 'Posicionamento e Identidade Visual', branding: true, performance: true, vendaTotal: true },
  { feature: 'Materiais de Venda e Apresentação', branding: true, performance: true, vendaTotal: true },
  { feature: 'Landing Page de Alta Conversão', branding: true, performance: true, vendaTotal: true },
  { feature: 'Deck Comercial Executivo', branding: true, performance: true, vendaTotal: true },
  { feature: 'Gestão de Mídia Meta Ads + Google Ads', branding: false, performance: true, vendaTotal: true },
  { feature: 'Geração Contínua de Demanda e Leads', branding: false, performance: true, vendaTotal: true },
  { feature: 'Remarketing Ativo e Estratégico', branding: false, performance: true, vendaTotal: true },
  { feature: 'Produção de Conteúdo Mensal (Redes)', branding: false, performance: true, vendaTotal: true },
  { feature: 'Reunião Mensal com Time Comercial', branding: false, performance: true, vendaTotal: true },
  { feature: 'Inteligência Artificial para Atendimento 24/7', branding: false, performance: false, vendaTotal: true },
  { feature: 'Qualificação Instantânea de Perfil & Renda', branding: false, performance: false, vendaTotal: true },
  { feature: 'Distribuição Direta ao Corretor em Minutos', branding: false, performance: false, vendaTotal: true },
  { feature: 'Dashboard Executivo do Funil Completo', branding: false, performance: false, vendaTotal: true },
  { feature: 'Consultoria Estratégica com Fundador Diogo Garcia', branding: false, performance: false, vendaTotal: true },
  { feature: 'Suporte Prioritário com SLA de 4h', branding: false, performance: false, vendaTotal: true }
];

export const FUNNEL_STAGES = [
  {
    step: '01',
    title: 'Lead Gerado',
    description: 'Campanhas de alta segmentação atraem interessados reais com intenção de compra.',
    metric: 'CPL otimizado',
    badge: 'Marketing & Mídia'
  },
  {
    step: '02',
    title: 'Primeiro Atendimento',
    description: 'Resposta em menos de 2 minutos via IA no WhatsApp, antes que o lead esfrie ou busque concorrência.',
    metric: 'Tempo de resposta < 120s',
    badge: 'Atendimento IA'
  },
  {
    step: '03',
    title: 'Qualificação Ativa',
    description: 'Triagem inteligente de perfil financeiro, objetivo (moradia/investimento) e horizonte de compra.',
    metric: 'Taxa de qualificação > 42%',
    badge: 'Inteligência de Dados'
  },
  {
    step: '04',
    title: 'Distribuição ao Corretor',
    description: 'Lead quente entregue ao corretor ou imobiliária certa, já com dossiê resumido e histórico da conversa.',
    metric: 'Notificação instantânea',
    badge: 'Encaminhamento Ágil'
  },
  {
    step: '05',
    title: 'Visita ao Stand / Empreendimento',
    description: 'Corretor foca seu tempo exclusivamente em apresentar o decorado ou lote para quem tem perfil de compra.',
    metric: 'Presença confirmada',
    badge: 'Time Comercial'
  },
  {
    step: '06',
    title: 'Proposta Formal',
    description: 'Negociação estruturada baseada na tabela de vendas e nas condições aprovadas pela incorporadora.',
    metric: 'Propostas validadas',
    badge: 'Fechamento'
  },
  {
    step: '07',
    title: 'Venda & Contrato Assinado',
    description: 'Liquidez do empreendimento, velocidade de vendas (VSO) e aceleração do VGV total planejado.',
    metric: 'Conversão em VGV',
    badge: 'Resultado Final'
  }
];

export const METRICS_DATA = [
  {
    id: 'cpl',
    label: 'CPL (Custo por Lead)',
    value: 'R$ 28,40',
    subValue: 'Benchmark mercado: R$ 45–65',
    description: 'Quanto custa gerar cada contato qualificado nas plataformas de tráfego pago.',
    trend: '-38% de desperdício',
    badge: 'Performance'
  },
  {
    id: 'qualificacao',
    label: 'Taxa de Qualificação',
    value: '44.8%',
    subValue: 'Leads com perfil de compra validado',
    description: 'Percentual de contatos com renda, perfil e horizonte compatíveis com o produto.',
    trend: '+2.4x vs. tráfego sem triagem',
    badge: 'Atendimento IA'
  },
  {
    id: 'tempo_resposta',
    label: 'Tempo de Resposta Inicial',
    value: '1m 24s',
    subValue: 'Atendimento 24/7 sem fila',
    description: 'Velocidade com que o primeiro contato é estabelecido pelo canal oficial do empreendimento.',
    trend: 'Imediato (dia e noite)',
    badge: 'Agilidade'
  },
  {
    id: 'conversao',
    label: 'Conversão Lead → Visita',
    value: '18.2%',
    subValue: 'Visitas agendadas no stand/obra',
    description: 'Avanço do contato qualificado para a experiência presencial ou tour virtual estruturado.',
    trend: 'Filtro sem perda de tempo',
    badge: 'Eficiência'
  },
  {
    id: 'vso',
    label: 'Velocidade de Vendas (VSO)',
    value: '14.6% /mês',
    subValue: 'Ritmo sustentável de liquidez',
    description: 'Acompanhamento do ritmo de escoamento das unidades conforme a curva de obra e fluxo de caixa.',
    trend: 'Alinhado à meta de VGV',
    badge: 'Gestão de Liquidez'
  },
  {
    id: 'vgv',
    label: 'Evolução do VGV Comercializado',
    value: 'R$ 42.8 Mi',
    subValue: 'Acompanhamento ponta a ponta',
    description: 'Visão executiva do valor geral de vendas gerado pela esteira de marketing e comercial.',
    trend: 'Empreendimento ativo',
    badge: 'Resultado Real'
  }
];

export const CASES_DATA: CaseStudy[] = [
  {
    id: 'crescer',
    name: 'CRESCER',
    tagline: 'Empreendimento Residencial Estruturado',
    location: 'Juiz de Fora / MG',
    productType: 'Unidades Residenciais',
    imageUrl: 'https://www.meucrescer.com.br/storage/app/uploads/public/eb6/3a5/a63/thumb__0_850_0_0_auto.webp',
    mediaInvestment: 'R$ 48.000',
    leads: '1.620 leads qualificados',
    cpl: 'R$ 29,60',
    visits: '240 visitas ao stand',
    proposals: '85 propostas geradas',
    sales: '54 unidades vendidas',
    vgv: 'R$ 38.500.000 em VGV',
    vso: '72% comercializado no período de lançamento',
    highlightResult: 'Posicionamento e branding que valorizaram o m² com campanhas de Meta e Google Ads integradas à triagem rápida de leads.'
  },
  {
    id: 'parque-das-palmeiras',
    name: 'PARQUE DAS PALMEIRAS',
    tagline: 'Bairro Planejado & Loteamento Fechado',
    location: 'Loteamento Fechado',
    productType: 'Lotes Residenciais',
    imageUrl: 'https://www.doroincorporacoes.com.br/storage/app/uploads/public/685/979/db4/685979db4c0c0460869351.webp',
    mediaInvestment: 'R$ 62.000',
    leads: '2.180 leads qualificados',
    cpl: 'R$ 28,40',
    visits: '310 visitas ao plantão',
    proposals: '110 propostas formais',
    sales: '78 lotes comercializados',
    vgv: 'R$ 44.200.000 em VGV',
    vso: '85% dos lotes comercializados na fase inicial',
    highlightResult: 'Do posicionamento à esteira de conversão com IA respondendo os interessados em menos de 2 minutos, garantindo recorde de cadastros pré-qualificados.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'A verba de anúncios está inclusa nos planos?',
    answer: 'Não. A gestão estratégica e técnica das campanhas no Meta Ads e Google Ads está inclusa nos planos Performance e Venda Total. A verba de mídia é paga diretamente pela incorporadora/loteadora às plataformas, garantindo total transparência e propriedade sobre as contas.'
  },
  {
    question: 'Quanto tempo leva para colocar o lançamento no ar?',
    answer: 'No plano Branding, a entrega completa do enxoval e posicionamento leva cerca de 2 meses. No plano Performance ou Venda Total com identidade já definida, a estruturação de campanhas, landing page e automações é colocada no ar em aproximadamente 15 a 20 dias.'
  },
  {
    question: 'Qual plano é o mais indicado para o meu momento?',
    answer: 'Se já possui marca e quer gerar demanda contínua com os corretores, o Performance (R$ 5k/mês) é o plano de entrada mais indicado. Se deseja integrar marketing, atendimento 24/7 com IA e qualificação de leads, escolha o Venda Total (R$ 7.9k/mês). Se o empreendimento ainda não tem conceito, identidade e materiais de venda, o Branding (R$ 25k) estrutura a base antes da tração.'
  },
  {
    question: 'Vocês atendem apenas lançamentos ou também estoque?',
    answer: 'Atendemos lançamentos imobiliários (verticais, horizontais e loteamentos) e também empreendimentos em fase de comercialização com unidades remanescentes em estoque que precisam de reativação de demanda e velocidade de vendas.'
  },
  {
    question: 'Como funciona a IA de atendimento no plano Venda Total?',
    answer: 'Nossa Inteligência Artificial é configurada com todas as informações do empreendimento. Ela atende o lead em tempo real (24/7), faz a triagem de perfil e horizonte de compra e encaminha a oportunidade pronta diretamente para o corretor responsável no WhatsApp/CRM.'
  },
  {
    question: 'Quem atende o lead quando ele responde fora do horário comercial?',
    answer: 'No plano Venda Total, a IA de atendimento opera 24 horas por dia, 7 dias por semana. À noite, finais de semana e feriados, o lead é respondido em segundos, qualificado e mantido aquecido para o time comercial.'
  },
  {
    question: 'O que acontece se eu já tiver equipe interna de marketing?',
    answer: 'Nossa atuação é complementar e sinérgica. Integramos com sua equipe interna ou agência de house para assumir a inteligência de posicionamento, gestão de mídia de performance e tecnologia de qualificação comercial.'
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: '1. Qual é o perfil da sua empresa?',
    options: [
      { label: 'Incorporadora imobiliária', planWeight: { 'venda-total': 2, performance: 1 } },
      { label: 'Loteadora / Parcelamento de solo', planWeight: { 'venda-total': 2, performance: 1 } },
      { label: 'Construtora com empreendimentos próprios', planWeight: { performance: 2, branding: 1 } },
      { label: 'Imobiliária de lançamentos ou outro', planWeight: { performance: 1, branding: 1 } }
    ]
  },
  {
    id: 2,
    question: '2. Em que estágio está o seu empreendimento?',
    options: [
      { label: 'Estruturação (projeto, conceito ou aprovação)', planWeight: { branding: 3 } },
      { label: 'Pré-lançamento (reunindo mailing e corretores)', planWeight: { branding: 1, performance: 2 } },
      { label: 'Lançamento acontecendo agora', planWeight: { 'venda-total': 3, performance: 2 } },
      { label: 'Comercialização ativa / Remanescentes de estoque', planWeight: { performance: 2, 'venda-total': 2 } }
    ]
  },
  {
    id: 3,
    question: '3. Quando você pretende iniciar ou acelerar a comercialização?',
    options: [
      { label: 'Imediatamente ou em até 30 dias', planWeight: { 'venda-total': 3, performance: 2 } },
      { label: 'Nos próximos 2 a 4 meses', planWeight: { performance: 2, branding: 2 } },
      { label: 'Entre 5 a 12 meses', planWeight: { branding: 3 } },
      { label: 'Ainda em fase de planejamento sem data fixada', planWeight: { branding: 2 } }
    ]
  },
  {
    id: 4,
    question: '4. Qual é a sua maior necessidade operacional hoje?',
    options: [
      { label: 'Gerar demanda previsível e leads contínuos para os corretores', planWeight: { performance: 4 } },
      { label: 'Integrar captação, atendimento ágil 24/7 com IA e qualificação antes do corretor', planWeight: { 'venda-total': 4 } },
      { label: 'Criar do zero o posicionamento, conceito, identidade e materiais de venda', planWeight: { branding: 4 } }
    ]
  },
  {
    id: 5,
    question: '5. Qual verba de investimento mensal pretende destinar à operação de marketing?',
    options: [
      { label: 'Até R$ 5.000 / mês (foco em projeto pontual ou mídia inicial)', planWeight: { branding: 2, performance: 1 } },
      { label: 'De R$ 5.000 a R$ 15.000 / mês', planWeight: { performance: 3, 'venda-total': 1 } },
      { label: 'Acima de R$ 15.000 / mês (operação robusta de lançamento)', planWeight: { 'venda-total': 3, performance: 1 } }
    ]
  }
];
