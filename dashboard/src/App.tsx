import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell,
} from 'recharts';
import {
  countryModels,
  internationalScores,
  kpis,
  meta,
  ownRevenueForecast,
  publicContext,
  reformProposal,
  revenueStructure,
  risks,
  scoreDimensions,
  staffDeficit,
  systemicProblems,
  taxRedistribution,
} from './data/dashboardData';

const tooltipStyle = {
  background: '#1a333d',
  border: '1px solid rgba(232,220,196,0.18)',
  borderRadius: 10,
  color: '#f4efe4',
  fontSize: 12,
};

function KpiCard({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint: string;
  tone: 'danger' | 'warn' | 'good';
}) {
  return (
    <article className={`kpi tone-${tone}`}>
      <p className="kpi-label">{label}</p>
      <p className="kpi-value">{value}</p>
      <p className="kpi-hint">{hint}</p>
    </article>
  );
}

function RevenueBars() {
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={revenueStructure}
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid stroke="rgba(232,220,196,0.08)" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            stroke="#7a8c92"
            fontSize={12}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            stroke="#7a8c92"
            fontSize={12}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [`${value}%`, 'Доля']}
          />
          <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28} animationDuration={900}>
            {revenueStructure.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ForecastChart() {
  return (
    <div className="chart-wrap tall">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ownRevenueForecast} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="rgba(232,220,196,0.08)" />
          <XAxis dataKey="year" stroke="#7a8c92" fontSize={12} />
          <YAxis
            domain={[20, 50]}
            tickFormatter={(v) => `${v}%`}
            stroke="#7a8c92"
            fontSize={12}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [`${value}%`, '']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="withoutReform"
            name="Без реформы"
            stroke="#6b8790"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            animationDuration={1000}
          />
          <Line
            type="monotone"
            dataKey="withReform"
            name="С нормативом 30/70"
            stroke="#e8a54b"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function StaffChart() {
  return (
    <div className="chart-wrap tall">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={staffDeficit} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="rgba(232,220,196,0.08)" vertical={false} />
          <XAxis dataKey="area" stroke="#7a8c92" fontSize={11} interval={0} angle={-12} textAnchor="end" height={60} />
          <YAxis
            tickFormatter={(v) => `${v}%`}
            stroke="#7a8c92"
            fontSize={12}
            domain={[0, 35]}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [`${value}%`, '']}
          />
          <Legend />
          <Bar
            dataKey="current"
            name="Текущий дефицит"
            fill="#e06b5c"
            radius={[6, 6, 0, 0]}
            animationDuration={900}
          />
          <Bar
            dataKey="target"
            name="Целевой ориентир"
            fill="#5b9fd4"
            radius={[6, 6, 0, 0]}
            animationDuration={900}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function InternationalRadar() {
  const radarData = scoreDimensions.map((dim) => {
    const row: Record<string, string | number> = { dimension: dim.label };
    internationalScores.forEach((c) => {
      row[c.country] = c[dim.key];
    });
    return row;
  });

  const colors: Record<string, string> = {
    Кыргызстан: '#e06b5c',
    Эстония: '#5b9fd4',
    Финляндия: '#3dbf8f',
    Польша: '#e8a54b',
    Казахстан: '#a78bfa',
    'Респ. Корея': '#f0c48a',
  };

  return (
    <div className="chart-wrap tall">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} outerRadius="70%">
          <PolarGrid stroke="rgba(232,220,196,0.15)" />
          <PolarAngleAxis dataKey="dimension" tick={{ fill: '#a8b5b9', fontSize: 10 }} />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={{ fill: '#7a8c92', fontSize: 10 }} />
          {internationalScores.map((c) => (
            <Radar
              key={c.country}
              name={c.country}
              dataKey={c.country}
              stroke={colors[c.country]}
              fill={colors[c.country]}
              fillOpacity={c.country === 'Кыргызстан' ? 0.28 : 0.06}
              strokeWidth={c.country === 'Кыргызстан' ? 2.5 : 1.2}
            />
          ))}
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ComparisonBars() {
  const avg = internationalScores.map((c) => ({
    country: c.country,
    score:
      Math.round(
        ((c.financial + c.institutional + c.hr + c.digital + c.effectiveness) / 5) * 10,
      ) / 10,
  }));

  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={avg} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid stroke="rgba(232,220,196,0.08)" vertical={false} />
          <XAxis dataKey="country" stroke="#7a8c92" fontSize={11} />
          <YAxis domain={[0, 10]} stroke="#7a8c92" fontSize={12} />
          <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v} / 10`, 'Средний балл']} />
          <Bar dataKey="score" radius={[6, 6, 0, 0]} animationDuration={900}>
            {avg.map((entry) => (
              <Cell
                key={entry.country}
                fill={entry.country === 'Кыргызстан' ? '#e06b5c' : '#3dbf8f'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function TaxPanel() {
  return (
    <div className="tax-list">
      {taxRedistribution.map((tax) => (
        <div key={tax.tax} className="tax-item">
          <h4>{tax.tax}</h4>
          <p className="pair-label">Текущая пропорция</p>
          <div className="bar-row">
            <span>Местный</span>
            <div className="bar-track">
              <div className="bar-fill local" style={{ width: `${tax.currentLocal}%` }} />
            </div>
            <span>{tax.currentLocal}%</span>
          </div>
          <div className="bar-row">
            <span>Республ.</span>
            <div className="bar-track">
              <div className="bar-fill republican" style={{ width: `${tax.currentRepublican}%` }} />
            </div>
            <span>{tax.currentRepublican}%</span>
          </div>
          <p className="pair-label">Предлагаемая пропорция</p>
          <div className="bar-row">
            <span>Местный</span>
            <div className="bar-track">
              <div className="bar-fill proposed" style={{ width: `${tax.proposedLocal}%` }} />
            </div>
            <span>{tax.proposedLocal}%</span>
          </div>
          <div className="bar-row">
            <span>Республ.</span>
            <div className="bar-track">
              <div className="bar-fill republican" style={{ width: `${tax.proposedRepublican}%` }} />
            </div>
            <span>{tax.proposedRepublican}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <span className="eyebrow">Кыргызская Республика · Местное самоуправление</span>
        <h1>{meta.title}</h1>
        <p className="hero-lead">{meta.subtitle}</p>
        <div className="hero-meta">
          <span className="chip">Источник: {meta.source}</span>
          <span className="chip">Предложение: норматив 30/70</span>
        </div>
      </header>

      <nav className="nav-tabs" aria-label="Разделы дашборда">
        <a href="#finance">Финансы</a>
        <a href="#international">Международное сравнение</a>
        <a href="#staff">Кадры</a>
        <a href="#risks">Риски</a>
        <a href="#reform">Реформа</a>
        <a href="#context">Контекст</a>
      </nav>

      <section className="kpi-grid" aria-label="Ключевые показатели">
        {kpis.map((k) => (
          <KpiCard key={k.id} {...k} />
        ))}
      </section>

      <section id="finance" className="section">
        <div className="section-head">
          <h2>Финансовая устойчивость</h2>
          <p>
            Критический дисбаланс: органы МСУ финансируются за счёт трансфертов на 85%. Аргумент в
            пользу перераспределения единого налога и налога с продаж.
          </p>
        </div>
        <div className="grid-2">
          <div className="panel">
            <h3 className="panel-title">Структура доходов местных бюджетов</h3>
            <p className="panel-sub">Диаграмма 1 · горизонтальная гистограмма</p>
            <RevenueBars />
          </div>
          <div className="panel">
            <h3 className="panel-title">Потенциал перераспределения налогов</h3>
            <p className="panel-sub">Таблица 1 · текущая vs предлагаемая пропорция</p>
            <TaxPanel />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="callout">
          <strong>Предложение по законодательству</strong>
          <p className="ratio">{reformProposal.ratio}</p>
          <p>
            Изменения в {reformProposal.law}: нормативы отчислений от {reformProposal.taxes.join(' и ')}{' '}
            — 30% в местные бюджеты городов и айылных аймаков, 70% в республиканский бюджет.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="panel">
          <h3 className="panel-title">Прогноз роста собственных доходов МСУ</h3>
          <p className="panel-sub">
            Диаграмма 2 · без реформы к 2030 — 30,5%; с нормативом 30/70 — 43,5% (+16 п.п.)
          </p>
          <ForecastChart />
        </div>
      </section>

      <section id="international" className="section">
        <div className="section-head">
          <h2>Международное сравнение</h2>
          <p>
            Кыргызстан — 2–4 из 10; Финляндия и Эстония стабильно выше 8. Наибольший разрыв — оценка
            эффективности и финансовая самостоятельность.
          </p>
        </div>
        <div className="grid-2">
          <div className="panel">
            <h3 className="panel-title">Профиль по пяти параметрам</h3>
            <p className="panel-sub">Диаграмма 3 · радарное сравнение</p>
            <InternationalRadar />
          </div>
          <div className="panel">
            <h3 className="panel-title">Средний балл модели МСУ</h3>
            <p className="panel-sub">Агрегированная оценка по 5 измерениям</p>
            <ComparisonBars />
          </div>
        </div>
        <div className="panel" style={{ marginTop: '1rem' }}>
          <h3 className="panel-title">Практическая ценность зарубежных моделей</h3>
          <p className="panel-sub">Таблица 2 · адаптация опыта для КР</p>
          <div className="model-list">
            {countryModels.map((m) => (
              <article key={m.country} className="model">
                <h4>{m.country}</h4>
                <p>{m.features}</p>
                <p className="value-line">→ {m.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="staff" className="section">
        <div className="section-head">
          <h2>Кадровый потенциал</h2>
          <p>
            Наибольший дефицит — цифровизация (30%) и проектное управление (28%). Целевой ориентир
            после реформ — не выше 10% по каждому направлению.
          </p>
        </div>
        <div className="panel">
          <h3 className="panel-title">Кадровый дефицит в органах МСУ</h3>
          <p className="panel-sub">Диаграмма 4 · текущий уровень vs целевой ориентир</p>
          <StaffChart />
        </div>
      </section>

      <section id="risks" className="section">
        <div className="section-head">
          <h2>Оценка рисков реализации реформ</h2>
          <p>Наибольшее влияние оказывают финансовые, кадровые и институциональные риски.</p>
        </div>
        <div className="grid-3">
          {risks.map((r) => (
            <article key={r.type} className="risk">
              <div className="risk-top">
                <h4>{r.type}</h4>
                <span className={`badge ${r.level === 'высокий' ? 'high' : 'medium'}`}>
                  {r.level}
                </span>
              </div>
              <p>{r.description}</p>
              <p className="mitigation">Митигация: {r.mitigation}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reform" className="section">
        <div className="section-head">
          <h2>Проблемы и направления реформирования</h2>
          <p>Таблица 3 · системные ограничения и ожидаемые результаты.</p>
        </div>
        <div className="panel">
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr>
                  <th>Выявленная проблема</th>
                  <th>Предлагаемое решение</th>
                  <th>Ожидаемый результат</th>
                </tr>
              </thead>
              <tbody>
                {systemicProblems.map((row) => (
                  <tr key={row.problem}>
                    <td>{row.problem}</td>
                    <td>{row.solution}</td>
                    <td>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="context" className="section">
        <div className="section-head">
          <h2>Контекст из открытых источников</h2>
          <p>
            Дополнительные ориентиры Минфина и НСК (2024–2025) для сопоставления с оценками записки.
          </p>
        </div>
        <div className="context-grid">
          {publicContext.map((c) => (
            <article key={c.label} className="context-item">
              <p className="label">{c.label}</p>
              <p className="value">{c.value}</p>
              <p className="note">{c.note}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>Дашборд построен на основе аналитической записки по повышению эффективности органов МСУ</span>
        <span>Приоритет адаптации: Финляндия · Польша · Казахстан</span>
      </footer>
    </div>
  );
}
