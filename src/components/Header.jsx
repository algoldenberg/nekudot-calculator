import './Header.css';
import emblem from '../assets/emblem.png';

function Header() {
  return (
    <header className="site-header">
      <div className="logo-block">
      <a href="/">
          <img src={emblem} alt="Герб Израиля" className="emblem" />
        </a>
        <div className="text">
          <h1 className="main-title">
            Калькулятор налоговых льгот
          </h1>
          <p className="tagline">
            Для новых репатриантов — просто&nbsp;и&nbsp;понятно
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
