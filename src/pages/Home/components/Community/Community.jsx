import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";

const Community = ({ className }) => {
  const { cards } = mockData;
  return (
    <section className={`${className} pt-50 `}>
      <div className="wrapper container">
        <h3 className="text-center mb-3 community-title">Comunity Value</h3>
        <div className="row">
          {cards.map((card, index) => {
            return (
              <div className="col-md" key={`${card.title} ${index}`}>
                <Card
                  className="card"
                  // key={`${card.title} ${index}`}
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
