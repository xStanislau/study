import React from "react";
import mockData from "../../../mocks/mocks";
import { Link } from "react-router-dom";
import "./Article.scss";

const Article = ({
  match,
  location: {
    state: { prevPath }
  }
}) => {
  const { posts } = mockData;
  let article = posts[match.params.id];
  const { title, imgSrc, creator, date, text } = article;
  return (
    <article className="article content pt-4">
      <div className="article__img-wrapper">
        <img className="article__img" src={imgSrc} alt="Card cap" />
      </div>
      <div className="article__description">
        <h2 className="article__title h3">{title}</h2>
        <small className="article__subscription">
          by <strong className="article__creator">{creator}</strong> on{" "}
          <strong className="article__date">{date}</strong>
        </small>
        <p className="article__text">{text}</p>
      </div>
      <Link to={prevPath} className="btn-link">
        {"<< Back"}
      </Link>
    </article>
  );
};

export default Article;
