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
  match
}) => {
  let article;

  if (match.params) {
    const { posts } = mockData;
    article = posts[match.params.id];
  }

  return (
    <article className="article content pt-4">
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
      </div>
    </article>
    // <article className={className} article>
    //   <img className={`${className}-img`} src={imgSrc} alt={imgAlt} />
    //   <div className={`${className}-description`}>
    //     <div className={`${className}-tag`}>{tagText}</div>
    //     <h4 className={`${className}-title`}>{title}</h4>
    //     <small className={`${className}-subscription`}>
    //       by <strong className={`${className}-creator`}>{creator}</strong> on{" "}
    //       <strong className={`${className}-date`}>{date}</strong>
    //     </small>
    //     <p className={`${className}-text`}>{text}</p>
    //   </div>
    // </article>
  );
};

Article.defaultProps = {
  location: { state: {} },
  match: {},
  tagText: ""
};

export default Article;
