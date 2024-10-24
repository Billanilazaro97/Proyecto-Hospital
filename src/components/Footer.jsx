// import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="contact-info">
        <p><i className="fas fa-envelope"></i>Contacto: <a href="mailto:salud@lamadrid.gob.ar">salud@lamadrid.gob.ar</a></p>
        <p><i className="fas fa-phone"></i>Tel: <a href="02286420054">02286 420054</a></p>
        <p><i className="fas fa-map-marker-alt"></i>Dirección: San Martin 565, General La Madrid, Buenos Aires, Argentina</p>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Hospital General La Madrid.</p>
    </footer>
  );
}

export default Footer;
