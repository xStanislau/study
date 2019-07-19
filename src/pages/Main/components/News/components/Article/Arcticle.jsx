import React from "react";

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
    <article className={className}>
      <img className={`${className}-img`} src={imgSrc} alt={imgAlt} />
      <div className={`${className}-description`}>
        <div className={`${className}-tag`}>{tagText}</div>
        <h2 className={`${className}-title`}>{title}</h2>
        <span className={`${className}-subscription`}>
          by <span className={`${className}-creator`}>{creator}</span> on{" "}
          <span className={`${className}-date`}>{date}</span>
        </span>
        <p className={`${className}-text`}>{text}</p>
        <span>Read more...</span>
      </div>
    </article>
  );
};

export default Article;
