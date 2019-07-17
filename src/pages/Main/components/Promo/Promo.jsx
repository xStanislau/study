import React from "react";
import Button from "../../../../components/Button/Button";

const Promo = ({ className }) => {
  return (
    <section className={className}>
      <section className={`${className}-content`}>
        <div>
          <h1 className={`${className}-title text-center`}>
            We can <span className="font-weight-bold">do</span> something
            <span className="font-weight-bold"> bigger</span>,
            <span className="font-weight-bold"> together</span>
          </h1>
          <h2 className={`${className}-sub-title text-center`}>
            Solve problems collaboratively using IBM Watson
          </h2>
        </div>
        <div>
          <p className="text-center text-white">Be part of the innovation!</p>
          <Button className="btn btn-dark btn-outline-light rounded-0">
            Get Started
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Promo;
