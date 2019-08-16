import React from "react";
import Menu from "../../../components/Menu/Menu";

const Footer = ({ className }) => {
  return (
    <footer className={`${className} d-flex justify-content-between`}>
      <div className="wrapper d-flex justify-content-between">
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
      </div>
    </footer>
  );
};

export default Footer;
