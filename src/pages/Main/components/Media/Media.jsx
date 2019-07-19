import React from "react";
import Button from "../../../../components/Button/Button";

const Media = ({ className }) => {
  return (
    <section className={`${className}-section `}>
      <div className="wrapper d-flex justify-content-around">
        <div className={`${className}-text`}>
          <h2 className={`${className}-title`}>About Cognetive Catalyst</h2>
          <p>
            Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec
            tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis
            vitae. Donec sagittis faucibus lacus eget blandit. Mauris vitae
            ultricies metus, at condimentum nulla. Donec quis ornare lacus.
            Etiam gravida mollis tortor quis porttitor.
          </p>

          <Button className="btn-outline-light rounded-0">Get Started</Button>
        </div>
        <div className={`${className}-video `}>
          <iframe
            className="video"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            frameBorder="0"
          />
          {/* <video className="video" controls>
            <source src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" />
            <source src="movie.ogg" type="video/ogg" />
          </video> */}
        </div>
      </div>
    </section>
  );
};

export default Media;
