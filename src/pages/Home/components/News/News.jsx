import React from "react";
import mockData from "./../../../../mocks/mocks";
import Button from "../../../../components/Button/Button";
import NewsItems from "./components/NewsItems/NewsItems";

const News = ({ className }) => {
  const { posts } = mockData;
  return (
    <section className={`${className} pt-50`}>
      <div className="wrapper">
        <h1 className={`${className}-title text-center mb-5`}>
          News, Blog and Event
        </h1>
        <NewsItems className={className} posts={posts} />
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
