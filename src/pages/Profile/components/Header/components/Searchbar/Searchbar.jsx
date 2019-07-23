import React from "react";
import Icon from "../../../../../../components/Icon/Icon";

const Searchbar = () => {
  return (
    <div className="search-bar">
      {/* <input type="text" className="search-bar__text" /> */}
      <div className="search-bar__profile ">
        <Icon name="search" size="25" />
      </div>
    </div>
  );
};

export default Searchbar;
