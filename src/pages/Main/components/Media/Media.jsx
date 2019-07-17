import React from "react";
import Button from "../../../../components/Button/Button";

const Media = ({ className }) => {
  return (
    <section className={`${className}-section d-flex justify-content-around`}>
      <div className={`${className}-text text-right `}>
        <h2>About Cognetive Catalyst</h2>
        <p>
          Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
          tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
          vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
          ultricies metus, at condimentum nulla. Donec quis ornare lacus. Etiam
          gravida mollis tortor quis porttitor.
        </p>
        <div className="text-right">
          <Button className="btn-outline-light rounded-0">Get Started</Button>
        </div>
      </div>
      <div className={`${className}-video `}>
        <video className=" video" controls>
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
        </video>
      </div>
    </section>
  );
};

export default Media;
