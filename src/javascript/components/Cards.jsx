import React from "react";

function Cards(props) {
  const { title, iconClass, description } = props;

  return (
    <div className="card">
      <div className="card_title">
        <h3>{title}</h3>
        <i className={`fa-brands ${iconClass}`}></i>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default Cards;