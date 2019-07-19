import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";

const Community = ({ className }) => {
  const { cards } = mockData;
  return (
    <section className={`${className} pt-50`}>
      <div className="wrapper">
        <h3 className="text-center mb-3 community-title">Comunity Value</h3>
        <div className="d-flex justify-content-center flex-wrap">
          {cards.map((card, index) => {
            return (
              <Card
                key={`${card.title} ${index}`}
                imgSrc={card.imgSrc}
                title={card.title}
                text={card.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;
