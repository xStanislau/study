import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";

const Community = ({ className }) => {
  const { cards } = mockData;
  return (
    <section className={className}>
      <div className="wrapper">
        <h2 className="text-center mb-3 community-title">Comunity Value</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {cards.map((card) => {
            return <Card imgSrc={card.imgSrc} title={card.title} text={card.text} />
          }) }
        </div>
      </div>
    </section>
  );
};

export default Community;
