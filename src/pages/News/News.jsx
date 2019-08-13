import React from "react";
import mockData from "../../mocks/mocks";
import Card from "../../components/Card/Card";
import "./News.scss";

const News = () => {
  const { posts } = mockData;

  return (
    <section className="dashboard-news">
      <h3 className="text-center dashboard-news__title h3">News</h3>
      <div className="row">
        {posts.map((post, index) => {
          return (
            <div
              className="col col-lg-4  col-md-6 dashboard-news__card"
              key={`${post.title} ${index}`}
            >
              <Card
                className="card"
                imgSrc={post.imgSrc}
                title={post.title}
                text={post.text}
                linkText={`news/${index}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
