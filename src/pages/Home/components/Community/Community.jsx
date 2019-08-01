import React from "react";
import mockData from "../../../../mocks/mocks";
import Card from "../../../../components/Card/Card";
import "./Community.scss";

const Community = ({ className }) => {
  const { cards } = mockData;
  return (
    <section className={`${className} pt-50 `}>
      <h3 className="text-center  community__title">Comunity Value</h3>
      <div className="community__wrapper">
        <div className="row community__container">
          {cards.map((card, index) => {
            return (
              <div
                className="col-md-9 col-lg community__card"
                key={`${card.title} ${index}`}
              >
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
