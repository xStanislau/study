import React from "react";
import mockData from "../../../../mocks/mocks";

const Statistics = ({ className }) => {
  const {
    statistics: { developers, software, topics }
  } = mockData;
  return (
    <section
      className={`${className} d-flex justify-content-center align-items-center `}
    >
      <ul
        className={`${className}-list d-flex justify-content-center align-content-center flex-wrap wrapper`}
      >
        <li className={`${className}-list-item`}>
          <div className="number">{developers}</div>
          <div className="description">Developers have joined</div>
        </li>
        <li className={`${className}-list-item`}>
          <div className="number">{software}</div>
          <div className="description">Software has been developed</div>
        </li>
        <li className={`${className}-list-item`}>
          <div className="number">{topics}</div>
          <div className="description">Topics has been discussed</div>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
