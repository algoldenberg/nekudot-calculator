import { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [gender, setGender] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');

  // автоматически определяем тип репатрианта
  const aliyahType = (() => {
    if (!aliyahDate) return '';
    const year = new Date(aliyahDate).getFullYear();
    return year >= 2022 ? 'after2022' : 'before2022';
  })();

  return (
    <div className="app">
      <h1>Калькулятор скидок на подоходный налог для новых репатриантов <br></br> (Некудот зикуи)</h1>
      <div className="form">
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
      </div>

      {gender && aliyahDate && (
        <Calculator
          gender={gender}
          aliyahDate={aliyahDate}
          aliyahType={aliyahType}
        />
      )}
    </div>
  );
}

export default App;
