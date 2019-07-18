import React from "react";
// edits
// imgSrc - add true images
// tagText - Badge react-bootstrap
// h2 ? -> h4
// news-article-img -> news-article__img
// news-article-description -> news-article__description
// use <article> <small> http://htmlbook.ru/html/article
// .news-article-creator, .news-article-date -> strong
// <span>Read more...</span> -> <Link to="">

const Article = ({
  className,
  imgSrc,
  imgAlt,
  tagText,
  title,
  creator,
  date,
  text
}) => {
  return (
    <div className={className}>
      <img className={`${className}-img`} src={imgSrc} alt={imgAlt} />
      <section className={`${className}-description`}>
        <div className={`${className}-tag`}>{tagText}</div>
        <h2 className={`${className}-title`}>{title}</h2>
        <span className={`${className}-subscription`}>
          by <span className={`${className}-creator`}>{creator}</span> on{" "}
          <span className={`${className}-date`}>{date}</span>
        </span>
        <p className={`${className}-text`}>{text}</p>
        <span>Read more...</span>
      </section>
    </div>
  );
};

export default Article;
