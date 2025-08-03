import './App.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqModal from './components/FaqModal';

function App() {
  const { t } = useTranslation('form');
  const [gender, setGender] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const [submittedGender, setSubmittedGender] = useState('');
  const [submittedDate, setSubmittedDate] = useState('');
  const [submittedType, setSubmittedType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValidDate = (dateStr) => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    const match = dateStr.match(regex);
    if (!match) return false;
    const day = parseInt(match[1]);
    const month = parseInt(match[2]) - 1;
    const year = parseInt(match[3]);
    if (year < 1948 || year > 2100) return false;
    const date = new Date(year, month, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gender || !aliyahDate) {
      setErrorMessage(t('errorFill'));
      setShowError(true);
      return;
    }

    if (!isValidDate(aliyahDate)) {
      setErrorMessage(t('errorDate'));
      setShowError(true);
      return;
    }

    const year = parseInt(aliyahDate.split('.')[2]);
    const type = year >= 2022 ? 'after2022' : 'before2022';

    setSubmittedGender(gender);
    setSubmittedDate(aliyahDate);
    setSubmittedType(type);

    setShowError(false);
    setSubmitted(true);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-container">
        <form onSubmit={handleSubmit} className="form-container">
          <label className={showError && !gender ? 'error-label' : ''}>
            {t('genderLabel')}
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={showError && !gender ? 'error-input' : ''}
            >
              <option value="">{t('genderPlaceholder')}</option>
              <option value="male">{t('male')}</option>
              <option value="female">{t('female')}</option>
            </select>
          </label>

          <label className={showError && !aliyahDate ? 'error-label' : ''}>
            {t('aliyahLabel')}
            <input
              type="text"
              inputMode="numeric"
              value={aliyahDate}
              onChange={(e) => {
                let val = e.target.value.replace(/\D/g, '').slice(0, 8);
                if (val.length >= 5) {
                  val = `${val.slice(0, 2)}.${val.slice(2, 4)}.${val.slice(4, 8)}`;
                } else if (val.length >= 3) {
                  val = `${val.slice(0, 2)}.${val.slice(2, 4)}`;
                }
                setAliyahDate(val);
              }}
              placeholder={t('placeholder')}
              className={showError && !aliyahDate ? 'error-input' : ''}
            />
            <small className="date-hint">{t('dateHint')}</small>
          </label>

          {showError && <div className="error-message">{errorMessage}</div>}

          <button type="submit">{t('submit')}</button>

          <button type="button" className="faq-btn" onClick={() => setIsFaqOpen(true)}>
            {t('faq')}
          </button>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            <p>{t('otherProjects')}</p>
            <ul>
              <li>
                <a href="https://darcon-calculator.netlify.app/" target="_blank" rel="noopener noreferrer">
                  {t('linkDarcon')}
                </a>
              </li>
            </ul>
          </div>
        </form>

        {submitted && submittedGender && submittedDate && submittedType && (
          <Calculator
            gender={submittedGender}
            aliyahDate={submittedDate}
            aliyahType={submittedType}
          />
        )}
      </main>

      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
