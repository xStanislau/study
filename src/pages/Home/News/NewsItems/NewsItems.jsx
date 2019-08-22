import React from "react";
import Article from "../../../../components/_Article/Arcticle";
import NewsItem from "../NewsItem/NewsItem";
import mockData from "../../../../mocks/mocks";

const NewsItems = ({ className }) => {
  const { posts } = mockData;
  return (
    <>
      {posts.map(post => {
        const { imgSrc, tag, title, creator, text, date } = post;
        return (
          <NewsItem className="news__article" key={`${tag}${title}`}>
            <Article
              imgSrc={imgSrc}
              key={`${tag}${title}`}
              tagText={tag}
              title={title}
              creator={creator}
              date={date}
              text={text}
            />
          </NewsItem>
        );
      })}
    </>
  );
};

export default NewsItems;
