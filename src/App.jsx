import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [gender, setGender] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');
  const [aliyahType, setAliyahType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const year = new Date(aliyahDate).getFullYear();
    setAliyahType(year >= 2022 ? 'after2022' : 'before2022');
  };

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-container">
        <form onSubmit={handleSubmit} className="form-container">
          <label>
            Пол:
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Выбери...</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </label>

          <label>
            Дата репатриации:
            <input
              type="date"
              value={aliyahDate}
              onChange={(e) => setAliyahDate(e.target.value)}
            />
          </label>

          <button type="submit">Рассчитать</button>
        </form>

        {gender && aliyahDate && aliyahType && (
          <Calculator
            gender={gender}
            aliyahDate={aliyahDate}
            aliyahType={aliyahType}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
