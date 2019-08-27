import React from "react";
import mockData from "../../mocks/mocks";
import "./Article.scss";
import LinkBack from "../LinkBack/LinkBack";
import ArticleTag from "./ArticleTag/ArticleTag";

const Article = props => {
  const {
    location: { state },
    match,
    readMore
  } = props;

  let article;
  if (match.params) {
    const { posts } = mockData;
    article = posts[match.params.id];
  }

  const { title, imgSrc, imgAlt, tagText, creator, date, text } =
    article || props;

  return (
    <article className="article content pt-4">
      <div className="article__img-wrapper">
        <img className="article__img" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="article__description">
        <ArticleTag tagText={tagText} />
        <h2 className="article__title h3">{title}</h2>
        <small className="article__subscription">
          by <strong className="article__creator">{creator}</strong> on{" "}
          <strong className="article__date">{date}</strong>
        </small>
        <p className="article__text">{text}</p>
        <LinkBack {...state} />
        {readMore && (
          <a href="#" className="article__link">
            Read more...
          </a>
        )}
      </div>
    </article>
  );
};

Article.defaultProps = {
  location: { state: {} },
  match: {},
  tagText: "",
  readMore: false
};

export default Article;
