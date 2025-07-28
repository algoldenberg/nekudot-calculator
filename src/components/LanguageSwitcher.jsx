import './LanguageSwitcher.css';
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'ru', label: 'RU', flag: 'ru' },
  { code: 'en', label: 'EN', flag: 'us' },
  { code: 'fr', label: 'FR', flag: 'fr' },
  { code: 'es', label: 'ES', flag: 'es' },
  { code: 'ua', label: 'UA', flag: 'ua' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderFlag = (flag) => (
    <img
      src={`https://flagcdn.com/w40/${flag}.png`}
      srcSet={`https://flagcdn.com/w80/${flag}.png 2x`}
      width="24"
      height="16"
      alt={flag}
      className="lang-flag"
    />
  );

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button className="lang-button" onClick={() => setOpen(!open)}>
        {renderFlag(currentLang.flag)} {currentLang.label} ▾
      </button>
      {open && (
        <ul className="lang-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={lang.code === i18n.language ? 'active' : ''}
            >
              {renderFlag(lang.flag)} {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
