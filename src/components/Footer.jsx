import './Footer.css';
import { useTranslation } from 'react-i18next';


function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="site-footer">
      <p>
        <a
          href="https://github.com/algoldenberg/nekudot-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('github')}
        </a>{' '}
        · {t('license')} · © {new Date().getFullYear()} Alex Goldenberg
      </p>
    </footer>
  );
}

export default Footer;
