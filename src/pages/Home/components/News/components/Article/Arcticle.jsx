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
        <h4 className={`${className}-title`}>{title}</h4>
        <small className={`${className}-subscription`}>
          by <strong className={`${className}-creator`}>{creator}</strong> on{" "}
          <strong className={`${className}-date`}>{date}</strong>
        </small>
        <p className={`${className}-text`}>{text}</p>
      </div>
    </article>
  );
};

export default Article;
