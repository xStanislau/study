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
    <div className={className}>
      <img src={imgSrc} alt={imgAlt} />
      <section>
        <div className="badge">{tagText}</div>
        <h2>{title}</h2>
        <span>{creator}</span>
        <span>{date}</span>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default Article;
