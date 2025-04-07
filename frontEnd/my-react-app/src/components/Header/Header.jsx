// src/components/Navbar/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../logo/logo.png";
function Header() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Kasa logo" className="logo" />
        <nav>
          <NavLink to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="nav-link">
            A Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
