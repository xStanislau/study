import React from "react";
const Card = props => {
  const { text, title } = props;
  return (
    <div className="card">
      {/* edits */}
      {/* true images */}
      <img
        className="card-img-top"
        src="https://place-hold.it/200x150"
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
