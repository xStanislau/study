import React from "react";
import Menu from "../../../../components/Menu/Menu";

const Footer = ({ className }) => {
  return (
    <section className={`${className} d-flex justify-content-between`}>
      <Menu
        className={`${className}-info d-flex`}
        items={["Contact", "Privacy", "Terms of use", "Accessibility"]}
        hrefs={["#", "#", "#", "#"]}
      />
      <Menu
        className={`${className}-social d-flex`}
        items={["Youtube", "Twitter", "Facebook"]}
        hrefs={["#", "#", "#", "#"]}
      />
    </section>
  );
};

export default Footer;
