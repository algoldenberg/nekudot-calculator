import './Header.css';
import emblem from '../assets/emblem.png';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-block">
        <img src={emblem} alt="Герб Израиля" className="emblem" />
        <div className="text">
          <h1>Калькулятор налоговых льгот</h1>
          <p className="tagline">Для новых репатриантов — просто и понятно</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
