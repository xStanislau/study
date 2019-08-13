import React from "react";
import mockData from "../../../mocks/mocks";
import "./Article.scss";

const Article = ({ match }) => {
  const { posts } = mockData;
  let article = posts[match.params.id];
  const { title, imgSrc, creator, date, text } = article;
  return (
    <article className="article col-12">
      <div className="article article__img-wrapper">
        <img className="article__img" src={imgSrc} alt="Card cap" />
      </div>
      <div className="article__description">
        <h4 className="article__title">{title}</h4>
        <small className="article__subscription">
          by <strong className="article__creator">{creator}</strong> on{" "}
          <strong className="article__date">{date}</strong>
        </small>
        <p className="article__text">{text}</p>
      </div>
    </article>
  );
};

export default Article;
