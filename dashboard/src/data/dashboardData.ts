/** Данные из аналитической записки по МСУ КР + открытые источники Минфина/НСК */

export const meta = {
  title: 'Эффективность исполнительных органов МСУ',
  subtitle:
    'Аналитический дашборд по финансовой устойчивости, институциональным ограничениям и кадровому потенциалу местного самоуправления Кыргызской Республики',
  source: 'Аналитическая записка + данные Минфина / НСК КР',
};

/** Диаграмма 1: структура доходов местных бюджетов (по записке) */
export const revenueStructure = [
  { name: 'Трансферты', value: 85, fill: 'var(--chart-transfer)' },
  { name: 'Собственные доходы', value: 15, fill: 'var(--chart-own)' },
];

/** Таблица 1: потенциал перераспределения налогов */
export const taxRedistribution = [
  {
    tax: 'Единый налог',
    currentLocal: 0,
    currentRepublican: 100,
    proposedLocal: 30,
    proposedRepublican: 70,
  },
  {
    tax: 'Налог с продаж',
    currentLocal: 0,
    currentRepublican: 100,
    proposedLocal: 30,
    proposedRepublican: 70,
  },
];

/** Диаграмма 2: прогноз доли собственных доходов МСУ */
export const ownRevenueForecast = [
  { year: 2024, withoutReform: 27.5, withReform: 27.5 },
  { year: 2025, withoutReform: 28.0, withReform: 30.5 },
  { year: 2026, withoutReform: 28.5, withReform: 33.5 },
  { year: 2027, withoutReform: 29.0, withReform: 36.5 },
  { year: 2028, withoutReform: 29.5, withReform: 39.0 },
  { year: 2029, withoutReform: 30.0, withReform: 41.5 },
  { year: 2030, withoutReform: 30.5, withReform: 43.5 },
];

/** Диаграмма 3: международное сравнение (оценка 1–10) */
export const internationalScores = [
  {
    country: 'Кыргызстан',
    financial: 3,
    institutional: 3,
    hr: 4,
    digital: 3,
    effectiveness: 2,
  },
  {
    country: 'Эстония',
    financial: 8,
    institutional: 9,
    hr: 8,
    digital: 10,
    effectiveness: 9,
  },
  {
    country: 'Финляндия',
    financial: 10,
    institutional: 9,
    hr: 9,
    digital: 8,
    effectiveness: 9,
  },
  {
    country: 'Польша',
    financial: 8,
    institutional: 8,
    hr: 7,
    digital: 7,
    effectiveness: 8,
  },
  {
    country: 'Казахстан',
    financial: 5,
    institutional: 5,
    hr: 5,
    digital: 6,
    effectiveness: 5,
  },
  {
    country: 'Респ. Корея',
    financial: 7,
    institutional: 8,
    hr: 8,
    digital: 10,
    effectiveness: 9,
  },
];

export const scoreDimensions = [
  { key: 'financial', label: 'Финансовая самостоятельность' },
  { key: 'institutional', label: 'Институциональная автономия' },
  { key: 'hr', label: 'Кадровый потенциал' },
  { key: 'digital', label: 'Цифровизация' },
  { key: 'effectiveness', label: 'Оценка эффективности' },
] as const;

/** Диаграмма 4: кадровый дефицит */
export const staffDeficit = [
  { area: 'Цифровизация', current: 30, target: 10 },
  { area: 'Проектное управление', current: 28, target: 10 },
  { area: 'Финансовый менеджмент', current: 22, target: 10 },
  { area: 'Градостроительство', current: 18, target: 10 },
  { area: 'Инвестиции', current: 16, target: 10 },
];

/** Системные проблемы */
export const systemicProblems = [
  {
    problem: 'Высокая зависимость местных бюджетов от трансфертов',
    solution: 'Расширение собственной доходной базы и совершенствование межбюджетных отношений',
    result: 'Рост финансовой самостоятельности органов МСУ',
  },
  {
    problem: 'Недостаточная институциональная самостоятельность',
    solution: 'Разграничение полномочий и устранение дублирования функций',
    result: 'Повышение эффективности управления',
  },
  {
    problem: 'Дефицит квалифицированных кадров',
    solution: 'Развитие муниципальной службы, обучение и кадровый резерв',
    result: 'Формирование профессионального кадрового корпуса',
  },
];

/** Международные модели */
export const countryModels = [
  {
    country: 'Эстония',
    features: 'Единая цифровая платформа, электронный документооборот, интеграция ИС',
    value: 'Развитие электронных муниципальных услуг',
    focus: 'digital',
  },
  {
    country: 'Финляндия',
    features: 'Высокая финансовая самостоятельность, стратегическое планирование, KPI',
    value: 'Расширение финансовой самостоятельности и стратегического управления',
    focus: 'finance',
  },
  {
    country: 'Польша',
    features: 'Финансовая децентрализация, программно-целевое бюджетирование, ГЧП',
    value: 'Программное бюджетирование и инвестиционная политика',
    focus: 'investment',
  },
  {
    country: 'Казахстан',
    features: 'Последовательная децентрализация, межбюджетные отношения, цифровизация',
    value: 'Поэтапное расширение полномочий органов МСУ',
    focus: 'reform',
  },
  {
    country: 'Республика Корея',
    features: 'Smart City, цифровое управление, национальная система KPI',
    value: 'Управление по результатам и цифровые технологии',
    focus: 'kpi',
  },
];

/** Риски */
export const risks = [
  {
    type: 'Финансовые',
    level: 'высокий',
    description:
      'Ограниченные бюджетные ресурсы, зависимость от трансфертов, слабая доходная база',
    mitigation:
      'Межбюджетные отношения, программно-целевое бюджетирование, ГЧП, международная помощь',
  },
  {
    type: 'Кадровые',
    level: 'высокий',
    description:
      'Дефицит специалистов, текучесть кадров, низкая квалификация в цифровизации и финансах',
    mitigation:
      'Муниципальная служба, повышение квалификации, кадровый резерв, мотивация',
  },
  {
    type: 'Институциональные',
    level: 'средний',
    description:
      'Дублирование функций, недостаточная координация, устаревшая НПА',
    mitigation:
      'Актуализация НПА, разграничение полномочий, межведомственная координация',
  },
];

/** Контекст из открытых источников (Минфин / НСК) */
export const publicContext = [
  {
    label: 'Доходы местных бюджетов (2024)',
    value: '63,6–68 млрд сом',
    note: 'Центральное казначейство Минфина',
  },
  {
    label: 'Официальные трансферты (2024)',
    value: '≈14–21 млрд сом',
    note: 'НСК / Минфин (разные периоды отчётности)',
  },
  {
    label: 'Собственные доходы (янв–июль 2025)',
    value: '34 млрд сом',
    note: 'Рост в 1,5 раза г/г',
  },
  {
    label: 'Доля трансфертов (янв–июль 2025)',
    value: '20%',
    note: 'Снижение с 36% годом ранее',
  },
];

export const kpis = [
  {
    id: 'transfers',
    label: 'Зависимость от трансфертов',
    value: '85%',
    hint: 'Доля трансфертов в доходах МСУ (по записке)',
    tone: 'danger' as const,
  },
  {
    id: 'own',
    label: 'Собственные доходы',
    value: '15%',
    hint: 'Критический дисбаланс ресурсной базы',
    tone: 'warn' as const,
  },
  {
    id: 'gain',
    label: 'Эффект реформы 30/70 к 2030',
    value: '+16 п.п.',
    hint: 'Доля собственных доходов: 30,5% → 43,5%',
    tone: 'good' as const,
  },
  {
    id: 'staff',
    label: 'Пик кадрового дефицита',
    value: '30%',
    hint: 'Цифровизация; целевой ориентир ≤10%',
    tone: 'danger' as const,
  },
];

export const reformProposal = {
  law: 'ст. 9 Закона КР «О республиканском бюджете» от 27.01.2026 № 9',
  ratio: '30% местные бюджеты / 70% республиканский бюджет',
  taxes: ['Единый налог', 'Налог с продаж'],
};
