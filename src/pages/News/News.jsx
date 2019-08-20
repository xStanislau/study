import React from "react";
import mockData from "../../mocks/mocks";
import Card from "../../components/Card/Card";
import cutPreviewText from "../../utils/cutPreviewText";
import "./News.scss";

const News = ({ location }) => {
  const { posts } = mockData;
  return (
    <section className="dashboard-news">
      <h1 className="text-center dashboard-news__title h3">News</h1>
      <div className="row">
        {posts.map((post, index) => {
          const { imgSrc, title, text } = post;
          const shortText = cutPreviewText(text, 0, 130);

          return (
            <div
              className=" col-6 col-lg-4 col-md-6 dashboard-news__card"
              key={`${post.title} ${index}`}
            >
              <Card
                className="card"
                imgSrc={imgSrc}
                title={title}
                text={shortText}
                linkText={`news/${index}`}
                location={location}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
