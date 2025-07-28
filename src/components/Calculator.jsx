import './Calculator.css';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const CREDIT_VALUE = 242;

function Calculator({ gender, aliyahDate, aliyahType }) {
  const { t, i18n } = useTranslation('calculator');
  const tableRef = useRef(null);
  const basePoints = gender === 'female' ? 2.75 : 2.25;

  const [day, month, year] = aliyahDate.split('.');
  const start = new Date(`${year}-${month}-${day}`);

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
      const monthLabel = current.toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'en-US', {
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

  const lastBenefitMonth = current.toLocaleDateString(i18n.language === 'ru' ? 'ru-RU' : 'en-US', {
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
      <div className="benefit-ended">
        ⚠️ {t('message.text')}
        <br />
        <br />
        <a
          className="simulator-link"
          href="https://secapp.taxes.gov.il/srsimulatorNZ/#/simulator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('message.link')}
        </a>
      </div>
    ),
  });

  const copyTableToClipboard = () => {
    if (!tableRef.current) return;

    const rows = Array.from(tableRef.current.querySelectorAll('tbody tr'))
      .filter(row => !row.classList.contains('message-row'))
      .map(row => {
        const cells = Array.from(row.querySelectorAll('td')).map(cell =>
          cell.innerText.replace(' ₪', '')
        );
        return cells.join('\t');
      });

    const header = [
      t('table.month'),
      t('table.extra'),
      t('table.base'),
      t('table.total'),
      t('table.discount'),
    ].join('\t');

    const text = [header, ...rows].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      alert(t('copied'));
    });
  };

  const exportToCSV = () => {
    const header = [
      t('table.month'),
      t('table.extra'),
      t('table.base'),
      t('table.total'),
      t('table.discount'),
    ];
    const rows = months
      .filter(row => !row.message)
      .map(row => [
        row.month,
        row.extraPoints,
        row.basePoints,
        row.totalPoints,
        `${row.totalDiscount.toFixed(2)} ₪`,
      ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [header, ...rows].map(e => e.join(',')).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'tax-benefits.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="table-container">
      <div className="table-actions">
        <button className="copy-btn" onClick={copyTableToClipboard}>
          📋 {t('copy')}
        </button>
        <button className="export-btn" onClick={exportToCSV}>
          📁 {t('export')}
        </button>
      </div>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th>{t('table.month')}</th>
            <th>{t('table.extra')}</th>
            <th>{t('table.base')}</th>
            <th>{t('table.total')}</th>
            <th>{t('table.discount')}</th>
          </tr>
        </thead>
        <tbody>
          {months.map((row, index) =>
            row.message ? (
              <tr key={index}>
                <td colSpan="5" className="message-row">
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
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
