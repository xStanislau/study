import React from "react";
import Button from "../../../../components/Button/Button";

const Promo = ({ className }) => {
  return (
    <section className={className}>
      {/* edits */}
      {/* section in section bad practice */}
      <section className={`${className}-content`}>
        {/* empty div */}
        <div>
          <h1 className={`${className}-title text-center`}>
            {/* className="font-weight-bold" -> <strong> */}
            We can <span className="font-weight-bold">do</span> something
            <span className="font-weight-bold"> bigger</span>,
            <span className="font-weight-bold"> together</span>
          </h1>
          <h2 className={`${className}-sub-title text-center`}>
            Solve problems collaboratively using IBM Watson
          </h2>
        </div>
        {/* empty div */}
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
