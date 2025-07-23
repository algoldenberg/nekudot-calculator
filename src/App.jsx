import { useState } from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [gender, setGender] = useState('');
  const [aliyahDate, setAliyahDate] = useState('');

  return (
    <div className="app">
      <h1>Калькулятор некудот зикуи</h1>
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
        <Calculator gender={gender} aliyahDate={aliyahDate} />
      )}
    </div>
  );
}

export default App;
