import React from 'react';
import './comStyle.css'; 

const Footer = () => {
  // hello
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home" className="footer-link">Home</a>
        <a href="#sale" className="footer-link">Sale</a>
        <a href="#frauen" className="footer-link">Frauen</a>
        <a href="#maenner" className="footer-link">Männer</a>
        <a href="#kinder" className="footer-link">Kinder</a>
      </div>
      <div className="footer-info">
        <p>© 2024 SnowGear. Alle Rechte vorbehalten.</p>
      </div>
      // Hallo
    </footer>
  );
}

export default Footer;
