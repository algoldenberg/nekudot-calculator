import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        <a
          href="https://github.com/algoldenberg/nekudot-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub проекта
        </a>{' '}
        · MIT License · © {new Date().getFullYear()} Alex Goldenberg
      </p>
    </footer>
  );
}

export default Footer;
