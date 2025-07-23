// src/components/Calculator.jsx
import './Calculator.css';

const CREDIT_VALUE = 242;

function Calculator({ gender, aliyahDate, aliyahType }) {
  const basePoints = gender === 'female' ? 2.75 : 2.25;
  const start = new Date(aliyahDate);
  const months = [];

  const stages =
    aliyahType === 'before2022'
      ? [
          { duration: 18, extraPoints: 3 },
          { duration: 12, extraPoints: 2 },
          { duration: 12, extraPoints: 1 },
        ]
      : [
          { duration: 12, extraPoints: 1 },
          { duration: 18, extraPoints: 3 },
          { duration: 12, extraPoints: 2 },
          { duration: 12, extraPoints: 1 },
        ];

  let current = new Date(start);

  for (const stage of stages) {
    for (let i = 0; i < stage.duration; i++) {
      const monthLabel = current.toLocaleDateString('ru-RU', {
        month: '2-digit',
        year: 'numeric',
      });

      const totalPoints = basePoints + stage.extraPoints;
      const totalDiscount = totalPoints * CREDIT_VALUE;

      months.push({
        month: monthLabel,
        extraPoints: stage.extraPoints,
        basePoints,
        totalPoints,
        totalDiscount,
      });

      current.setMonth(current.getMonth() + 1);
    }
  }

  const lastBenefitMonth = current.toLocaleDateString('ru-RU', {
    month: '2-digit',
    year: 'numeric',
  });

  months.push({
    month: lastBenefitMonth,
    extraPoints: 0,
    basePoints,
    totalPoints: basePoints,
    totalDiscount: basePoints * CREDIT_VALUE,
  });

  months.push({
    message: (
      <span>
        ⚠️ Льготы репатрианта закончились — осталось только базовые очки.{' '}
        Вы можете также проверить, полагаются ли вам дополнительные баллы за статус семейного положения:
        <br />
        <a
          href="https://secapp.taxes.gov.il/srsimulatorNZ/#/simulator"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '0.5rem',
            padding: '0.4rem 0.9rem',
            backgroundColor: '#1e4c9a',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
          }}
        >
          Перейти к калькулятору
        </a>
      </span>
    ),
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Доп. н.з.</th>
            <th>Базовые н.з.</th>
            <th>Всего н.з.</th>
            <th>Льгота (₪)</th>
          </tr>
        </thead>
        <tbody>
          {months.map((row, index) => (
            row.message ? (
              <tr key={index}>
                <td colSpan="5" style={{ textAlign: 'center', fontStyle: 'italic', color: '#999' }}>
                  {row.message}
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{row.month}</td>
                <td>{row.extraPoints}</td>
                <td>{row.basePoints}</td>
                <td>{row.totalPoints}</td>
                <td>{row.totalDiscount.toFixed(2)} ₪</td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
