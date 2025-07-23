import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import FaqModal from './components/FaqModal';

function App() {
  const [gender, setGender] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');
  const [aliyahType, setAliyahType] = useState('');
  const [showError, setShowError] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender || !aliyahDate) {
      setShowError(true);
      return;
    }
    const year = new Date(aliyahDate).getFullYear();
    setAliyahType(year >= 2022 ? 'after2022' : 'before2022');
    setShowError(false);
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-container">
        <form onSubmit={handleSubmit} className="form-container">
          <label className={showError && !gender ? 'error-label' : ''}>
            Пол:
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={showError && !gender ? 'error-input' : ''}
            >
              <option value="">Выбери...</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </label>

          <label className={showError && !aliyahDate ? 'error-label' : ''}>
            Дата репатриации:
            <input
              type="date"
              value={aliyahDate}
              onChange={(e) => setAliyahDate(e.target.value)}
              className={showError && !aliyahDate ? 'error-input' : ''}
            />
          </label>

          {showError && (
            <div className="error-message">
              Пожалуйста, заполните все поля перед расчётом.
            </div>
          )}

<button type="submit">Рассчитать</button>

<button
  type="button"
  className="faq-btn"
  onClick={() => setIsFaqOpen(true)}
>
  Что такое  <br />налоговые льготы?
</button>
</form>


        {gender && aliyahDate && aliyahType && (
          <Calculator
            gender={gender}
            aliyahDate={aliyahDate}
            aliyahType={aliyahType}
          />
        )}
      </main>

      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <Footer />
    </div>
  );
}

export default App;
