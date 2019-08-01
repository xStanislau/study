import React from "react";
const Card = props => {
  const { text, title, imgSrc, className } = props;
  return (
    <div className={className}>
      <div className="card-img-wrapper">
        <img className="card-img-top" src={imgSrc} alt="Card cap" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
