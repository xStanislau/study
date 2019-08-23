import React from "react";
import LinkBack from "../LinkBack/LinkBack";
import mockData from "../../mocks/mocks";

const Article = ({
  imgSrc,
  imgAlt,
  tagText,
  title,
  creator,
  date,
  text,
  location: { state },
  match,
  content,
  readMore
}) => {
  let article;

  if (match.params) {
    const { posts } = mockData;
    article = posts[match.params.id];
  }

  return (
    <article className={`${content && content} article  pt-4`}>
      <div className="article__img-wrapper">
        <img className="article__img" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="article__description">
        <div className="article__tag">{tagText}</div>
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
  content: ""
};

export default Article;
