import React from "react";
import NewsItems from "./NewsItems/NewsItems";
import Button from "../../../components/Button/Button";

const News = ({ className }) => {
  return (
    <section className={`${className} pt-50`}>
      <div className="wrapper">
        <h1 className={`${className}-title h2 text-center mb-5`}>
          News, Blog and Event
        </h1>
        <NewsItems className={className} />
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
