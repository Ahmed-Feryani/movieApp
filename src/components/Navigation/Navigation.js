import React from "react";
import "./style.scss";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { Button } from "@material-ui/core";

const Navigation = ({ handleOpen }) => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation__inner">
          <div className="navigation__logo">
            <MovieFilterIcon></MovieFilterIcon>
          </div>
          <div className="navigation__btn">
            <Button variant="contained" onClick={handleOpen}>
              Add movie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
