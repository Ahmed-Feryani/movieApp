import React from "react";
import Carousel from "react-material-ui-carousel";

import Rating from "@material-ui/lab/Rating";
import "./style.scss";
import Filter from "../Filter/Filter";

const Header = ({
  handleChange,
  filterText,
  filterRating,
  setFilterRating,
}) => {
  var items = [
    {
      src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
    },
  ];
  return (
    <div className="header">
      <div className="header__slider-box container">
        <Carousel className="header__slider">
          {items.map((item, i) => (
            <div className="header__slider-item" key={i}>
              <div className="header__slider-item__overlay"></div>
              <img src={item.src} alt="" />
            </div>
          ))}
        </Carousel>
        <div className="header__search">
          <Filter handleChange={handleChange} filterText={filterText}></Filter>
          <Rating
            name="simple-controlled2"
            value={filterRating}
            onChange={(event, newValue) => {
              setFilterRating(newValue);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
