import React from 'react';
import './Footer.css';

const Footer = ({ darkMode }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`footer ${darkMode ? 'dark-footer' : ''}`}>
      <div className="footer-content">
        <p className="letrafooter">© 2024 Sitio Web Desarrollado por Felipe Arredondo [PiPiNos].</p>
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;