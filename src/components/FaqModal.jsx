import './FaqModal.css';
import { useEffect } from 'react';

function FaqModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll
      document.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = ''; // Enable scroll
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="faq-modal-overlay" onClick={onClose}>
      <div className="faq-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="faq-close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>Что такое налоговые очки?</h2>
        <p>
          В Израиле каждый резидент имеет право на налоговые очки (נקודות זיכוי), которые уменьшают подоходный налог.
        </p>
        <p>
          Новые репатрианты получают дополнительные очки на ограниченный срок — это позволяет платить меньше налогов.
        </p>
        <p>
          Наш калькулятор показывает количество очков по месяцам и сумму льготы в шекелях.
        </p>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://www.notion.so/23d5f35ac7db808cb612c9f1f2426961?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="guide-button"
          >
             Подробный гайд по налоговым льготам и вовзрату налога
          </a>
        </div>

        <hr />
        <h3>Правила для репатриантов до 2022 года</h3>
        <ul>
          <li>Период льготы — 42 месяца с момента репатриации.</li>
          <li>Первые 18 месяцев — <b>3 некуды</b> (726 шек. в месяц).</li>
          <li>Следующие 12 месяцев — <b>2 некуды</b> (484 шек. в месяц).</li>
          <li>Оставшиеся 12 месяцев — <b>1 некуда</b> (242 шек. в месяц).</li>
        </ul>
        <h3>Правила для репатриантов с 2022 года и позже</h3>
        <ul>
          <li>Период льготы — 54 месяца с момента репатриации.</li>
          <li>Первые 12 месяцев — <b>1 некуда</b> (242 шек. в месяц).</li>
          <li>Следующие 18 месяцев — <b>3 некуды</b> (726 шек. в месяц).</li>
          <li>Следующие 12 месяцев — <b>2 некуды</b> (484 шек. в месяц).</li>
          <li>Оставшиеся 12 месяцев — <b>1 некуда</b> (242 шек. в месяц).</li>
        </ul>


      </div>
    </div>
  );
}

export default FaqModal;
