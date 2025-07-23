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
  let monthIndex = 0;

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
      monthIndex++;
    }
  }

  // Добавим "после окончания льгот"
  const finalMonth = current.toLocaleDateString('ru-RU', {
    month: '2-digit',
    year: 'numeric',
  });

  months.push({
    month: finalMonth + ' и далее',
    extraPoints: 0,
    basePoints,
    totalPoints: basePoints,
    totalDiscount: basePoints * CREDIT_VALUE,
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
            <tr key={index}>
              <td>{row.month}</td>
              <td>{row.extraPoints}</td>
              <td>{row.basePoints}</td>
              <td>{row.totalPoints}</td>
              <td>{row.totalDiscount.toFixed(2)} ₪</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
