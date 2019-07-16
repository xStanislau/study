import React from "react";
import Article from "./components/Article/Arcticle";

const News = props => {
  return (
    <section className="news">
      <h1 className="text-center mb-4">News, Blog and Event</h1>
      <section>
        <Article />
      </section>
    </section>
  );
};

export default News;
