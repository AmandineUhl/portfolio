import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="#">A propos</a>
        <a href="#">Mes compétences</a>
        <a href="#">Mes réalisations</a>
        <a href="#">Contact</a>
        <i class="fa-solid fa-chevron-down"></i>
      </nav>
      <div className="welcome">
        <div className="welcome_content">
          <p>Bienvenue, je suis</p>
          <h1>Amandine Uhl</h1>
          <p>Développeuse Front-End</p>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
        <img src="pc.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
