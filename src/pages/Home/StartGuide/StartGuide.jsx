import React from "react";
import Button from "../../../components/Button/Button";

const StartGuide = ({ className }) => {
  return (
    <section className={className}>
      <h3 className={`${className}-title mb-4`}>Quick Started Guide</h3>
      <p className={`${className}-text`}>Area you new to Watson technology?</p>
      <Button className={` btn btn-outline-light rounded-0`}>
        Start Quick Learning
      </Button>
    </section>
  );
};

export default StartGuide;
