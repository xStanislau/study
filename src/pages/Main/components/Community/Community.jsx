import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";

const Statistics = ({ className }) => {
  const { card } = mockData;
  return (
    <section className={className}>
      <h2 className="text-center mb-3 community-title">Comunity Value</h2>
      <div className="d-flex justify-content-around flex-wrap">
        <Card title={card.titles.contribute} text={card.texts[0]} />
        <Card title={card.titles.collaborate} text={card.texts[1]} />
        <Card title={card.titles.extend} text={card.texts[2]} />
      </div>
    </section>
  );
};

export default Statistics;
