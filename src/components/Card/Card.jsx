import React from "react";
import { NavLink } from "react-router-dom";
import CardTitle from "./CardTitle/CardTitle";
import CardText from "./CardText/CardText";
import CardImg from "./CardImg/CardImg";

const Card = props => {
  const { text, title, imgSrc, className, linkText, location } = props;
  let to;
  if (linkText) {
    to = { pathname: linkText, state: { prevPath: location.pathname } };
  }

  return (
    <div className={className}>
      <div className="card-img-wrapper">
        {linkText ? (
          <NavLink className="card-link" to={to}>
            <CardImg imgSrc={imgSrc} />
          </NavLink>
        ) : (
          <CardImg imgSrc={imgSrc} />
        )}
      </div>
      <div className="card-body">
        <CardTitle>
          {linkText ? (
            <NavLink className="card-link" to={to}>
              {title}
            </NavLink>
          ) : (
            title
          )}
        </CardTitle>
        <CardText>{text}</CardText>
        {linkText && (
          <NavLink className="card-link" to={to}>
            Show
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Card;
