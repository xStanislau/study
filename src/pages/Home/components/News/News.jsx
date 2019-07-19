import React from "react";
import Article from "./components/Article/Arcticle";
import mockData from "./../../../../mocks/mocks";
import Button from "../../../../components/Button/Button";
const News = ({ className }) => {
  const { posts } = mockData;
  return (
    <section className={`${className} pt-50`}>
      <div className="wrapper">
        <h1 className={`${className}-title text-center mb-5`}>
          News, Blog and Event
        </h1>
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
        <div className="button-group d-flex justify-content-center align-items-center">
          <Button className="btn btn-outline-light rounded-0">
            View All News and Blogs
          </Button>
          <Button className="btn btn-outline-light rounded-0">
            View All Events
          </Button>
          <Button className="btn btn-outline-light rounded-0">
            Create Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
