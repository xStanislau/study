import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";
import "./Community.scss";

const Community = ({ className }) => {
  const { cards } = mockData;
  return (
    <section className={`${className} pt-50 `}>
      <div className="wrapper container">
        <h3 className="text-center  community-title">Comunity Value</h3>
        <div className="row">
          {cards.map((card, index) => {
            return (
              <div className="col-md-9 col-lg" key={`${card.title} ${index}`}>
                <Card
                  className="card"
                  imgSrc={card.imgSrc}
                  title={card.title}
                  text={card.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
