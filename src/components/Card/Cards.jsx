import React, { useState } from "react";
import './Card.scss';

function Cards(props) {
  const { title, iconClass, description} = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    
    <div
      className={`card ${isFlipped ? "flipped" : ""}`}
      onClick={toggleFlip}
    >
      
      <div className="card_front">
        <div className="card_icon">
          <i className={`fa-brands ${iconClass}`}></i>
        </div>
        <h3>{title}</h3>
      </div>
      <div className="card_back">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Cards;
