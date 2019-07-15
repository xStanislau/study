import React from "react";

const Statistics = props => {
  const { developers, software, topics } = props;
  return (
    <section className="statistics">
      <ul>
        <li>
          <div>{developers}</div>
          <div>Developers have joined</div>
        </li>
        <li>
          <div>{software}</div>
          <div>Software has been developed</div>
        </li>
        <li>
          <div>{topics}</div>
          <div>Topics has been discussed</div>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
