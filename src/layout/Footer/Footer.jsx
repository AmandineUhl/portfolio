import React from "react";
import './Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <i className="fa-solid fa-phone-volume"></i>
        <p>06.35.36.66.03</p>
      </div>
      <div>
        <i className="fa-solid fa-envelope"></i>
        <a href="">amandine_uhl@outlook.fr</a>
      </div>
      <div>
        <i className="fa-solid fa-location-dot"></i>
        <p>Le monde !!!</p>
      </div>
    </footer>
  );
}

export default Footer;