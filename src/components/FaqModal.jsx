import './FaqModal.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function FaqModal({ isOpen, onClose }) {
  const { t } = useTranslation('faq');

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
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
        <button className="faq-close-btn" onClick={onClose}>✕</button>

        <h2>{t('title')}</h2>
        <p>{t('intro')}</p>
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://www.notion.so/23d5f35ac7db808cb612c9f1f2426961?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="guide-button"
          >
            {t('guide')}
          </a>
          <br />
          <small className="guide-note">{t('guideNote')}</small>
        </div>

        <hr />

        <h3>{t('before2022.title')}</h3>
        <ul>
          <li>{t('before2022.line1')}</li>
          <li>
            {t('before2022.line2.start')} <strong>{t('before2022.line2.bold')}</strong> {t('before2022.line2.end')}
          </li>
          <li>
            {t('before2022.line3.start')} <strong>{t('before2022.line3.bold')}</strong> {t('before2022.line3.end')}
          </li>
          <li>
            {t('before2022.line4.start')} <strong>{t('before2022.line4.bold')}</strong> {t('before2022.line4.end')}
          </li>
        </ul>

        <h3>{t('after2022.title')}</h3>
        <ul>
          <li>{t('after2022.line1')}</li>
          <li>
            {t('after2022.line2.start')} <strong>{t('after2022.line2.bold')}</strong> {t('after2022.line2.end')}
          </li>
          <li>
            {t('after2022.line3.start')} <strong>{t('after2022.line3.bold')}</strong> {t('after2022.line3.end')}
          </li>
          <li>
            {t('after2022.line4.start')} <strong>{t('after2022.line4.bold')}</strong> {t('after2022.line4.end')}
          </li>
          <li>
            {t('after2022.line5.start')} <strong>{t('after2022.line5.bold')}</strong> {t('after2022.line5.end')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FaqModal;
