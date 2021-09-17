import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./style.scss";

const MovieCard = ({ movie: { title, rating, description, cover } }) => {
  return (
    <div className="movie-card">
      <div className="movie-card__poster">
        <div className="movie-card__poster__overlay"></div>
        <div className="movie-card__desc">
          <p>{description}</p>
        </div>
        <img src={cover} alt="" />
      </div>
      <div className="movie-card__details">
        <h1 className="movie-card__title">{title}</h1>
        <div>
          <Rating readOnly value={rating} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
