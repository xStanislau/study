import React from "react";
import Button from "../../../../components/Button/Button";

const StartGuide = ({ className }) => {
  return (
    // edits
    // Good job, but better mb-4 -> mb__4
    // .start-guide-text ?

    <section className={className}>
      <h2 className={`${className}-title mb-4`}>Quick Started Guide</h2>
      <p className={`${className}-text`}>Area you new to Watson technology?</p>
      <Button className={` btn btn-outline-light rounded-0`}>
        Start Quick Learning
      </Button>
    </section>
  );
};

export default StartGuide;
