import React from "react";
import Button from "../../../../components/Button/Button";

const Promo = ({ className }) => {
  return (
    <section className={className}>
      <section className={`${className}-content`}>
        <div className="container">
          <h1 className={`${className}-title text-center`}>
            We can <strong>do</strong> something
            <strong> bigger</strong>,<strong> together</strong>
          </h1>
          <h2 className={`${className}-sub-title text-center`}>
            Solve problems collaboratively using IBM Watson
          </h2>
        </div>
        <div>
          <p className={`${className}-text text-center text-white`}>
            Be part of the innovation!
          </p>
          <Button className="btn btn-dark btn-outline-light rounded-0">
            Get Started
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Promo;
