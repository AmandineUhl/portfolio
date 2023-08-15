import React from "react";
import './Header.scss'

function Header() {
  return (
    <header>
      <nav>
        <a href="#">Qui suis-je ?</a>
        <a href="#">Mes compétences</a>
        <a href="#">Mes réalisations</a>
        <a href="#">Contact</a>
      </nav>
      <div className="welcome">
        <div className="welcome_content">
          <p>Bienvenue, je suis</p>
          <h1>Amandine Uhl</h1>
          <p>Développeuse Front-End</p>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <img src="moi.jpg" alt="" />
      </div>
    </header>
  );
}

export default Header;
