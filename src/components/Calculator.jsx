import { useMemo } from 'react';
import './Calculator.css';

const CREDIT_VALUE = 242;

function Calculator({ gender, aliyahDate }) {
  const aliyah = new Date(aliyahDate);

  const data = useMemo(() => {
    const basePoints = gender === 'female' ? 2.75 : 2.25;
    const entries = [];
    const now = new Date();
    const months = 60; // максимум
    let current = new Date(aliyah);

    for (let i = 0; i < months; i++) {
      const y = current.getFullYear();
      const m = String(current.getMonth() + 1).padStart(2, '0');
      const label = `${m}.${y}`;
      let bonus = 0;

      if (i < 12) bonus = 1 / 12;
      else if (i < 30) bonus = 0.25;
      else if (i < 42) bonus = 1 / 6;
      else if (i < 54) bonus = 1 / 12;

      entries.push({
        month: label,
        bonusPoints: bonus,
        totalPoints: basePoints + bonus,
        totalDiscount: (basePoints + bonus) * CREDIT_VALUE,
      });

      current.setMonth(current.getMonth() + 1);
    }

    return entries;
  }, [gender, aliyahDate]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Месяц</th>
            <th>Доп. н.з.</th>
            <th>Всего н.з.</th>
            <th>Льгота (₪)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.month}</td>
              <td>{row.bonusPoints.toFixed(3)}</td>
              <td>{row.totalPoints.toFixed(2)}</td>
              <td>{row.totalDiscount.toFixed(2)} ₪</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
