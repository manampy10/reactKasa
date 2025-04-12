// src/components/Footer/Footer.jsx
import "./Footer.css";
import logo from "../logo/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src={logo} alt="Kasa logo" className="footer-logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
