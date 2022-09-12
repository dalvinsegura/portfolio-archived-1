import { NavLink } from "react-router-dom";


import logo from "../../images/logo.png";
import "./navbar.scss";

export default function NavBar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <h5 className="name">Dalvin Segura F.</h5>
      </div>

      <div className="nav-section-container">
        <NavLink className="nav-link" activeClassName="active" to="/">
          <i class="fa-solid fa-house navIcon"></i>
          <span>HOME</span>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/about">
          <i class="fa-solid fa-user navIcon"></i>
          <span>ABOUT</span>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/skills">
          <i class="fa-solid fa-screwdriver-wrench navIcon"></i>
          <span>SKILLS</span>
        </NavLink>
        <NavLink className="nav-link" activeClassName="active" to="/portfolio">
          <i class="fa-solid fa-briefcase navIcon"></i>
            <span>PORTFOLIO</span>
        </NavLink>
      </div>

      <div className="external-link">
        <a href="https://www.linkedin.com/in/dalvin-segura-fern%C3%A1ndez-5030711b2/" alt="Linkedin Link">
          <i class="fa-brands fa-linkedin linkedin-icon"></i>
        </a>
        <a href="http://github.com/dalvinsegura">
          <i class="fa-brands fa-square-github github-icon" alt="Github Link"></i>
        </a>
        <a href="email:dalvinsegura18@hotmail.com" alt="Email Link">
          <i class="fa-solid fa-envelope email-icon"></i>
        </a>
      </div>
    </nav>
  );
}
