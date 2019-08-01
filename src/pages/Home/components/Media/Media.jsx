import React from "react";
import Button from "../../../../components/Button/Button";

const Media = ({ className }) => {
  return (
    <section className={`${className}-section`}>
      <div className="wrapper d-flex justify-content-center align-items-center">
        <div className={`${className}-text`}>
          <h3 className={`${className}-title`}>About Cognetive Catalyst</h3>
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
            title="video"
            className="video"
            src="https://www.youtube.com/embed/VqybBv13p2w"
            frameBorder="0"
          />
        </div>
      </div>
    </section>
  );
};

export default Media;
