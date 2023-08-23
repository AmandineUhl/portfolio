import React from "react";
import './Header.scss'
import NavBar from "../../components/NavBar/NavBar";
import { useLottie } from "lottie-react";
import animationData from '../../../public/animation_lottie.json'; // Import du fichier JSON de l'animation

function Header() {
  const options = {
    animationData: animationData,
    loop: true
  };
  const { View } = useLottie(options);
  return (
    <header>
      <NavBar />
      <div className="welcome">
        <div className="welcome_content">
          <h1>Amandine UHL</h1>
          <p>Développeuse Front-End</p>
          <img src="moi.webp" alt="" />
          
        </div>
        <div className="lottie-container"style={{ width: '200px', height: '200px' }}>
        <>{View}</>
        </div>
      </div>
    </header>
  );
}

export default Header;
