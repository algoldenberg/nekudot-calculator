import './Header.css';
import emblem from '../assets/emblem.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation('header');

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-block">
          <a href="/">
            <img src={emblem} alt="Герб Израиля" className="emblem" />
          </a>
          <div className="text">
            <h1 className="main-title">{t('title')}</h1>
            <p className="tagline">{t('subtitle')}</p>
          </div>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
