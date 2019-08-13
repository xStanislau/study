import React from "react";
import Article from "../Article/Arcticle";
import mockData from "../../../../../../mocks/mocks";
const NewsItems = ({ className }) => {
  const { posts } = mockData;
  return (
    <>
      {posts.map(post => {
        const { imgSrc, tag, title, creator, text, date } = post;
        return (
          <Article
            imgSrc={imgSrc}
            className={`${className}-article`}
            key={`${tag}${title}`}
            tagText={tag}
            title={title}
            creator={creator}
            date={date}
            text={text}
          />
        );
      })}
    </>
  );
};

export default NewsItems;
