import React from "react";
import "./HeroCard.css";

export default function HeroCard(props) {
  
  const handleClick = () => {
    props.handleClick(props.id)
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className="portrait-container rounded-circle">
        <img className="portrait" src={props.image} />
      </div>
      <div className="text-container">
        <h4>
          <b>{props.name}</b>
        </h4>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
