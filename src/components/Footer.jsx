import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Sitio Web Desarrollado por Felipe Arredondo [PiPiNos].</p>
        <button className="scroll-to-top-button" onClick={handleScrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;