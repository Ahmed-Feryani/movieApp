import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import "./style.scss";
import { useHistory } from "react-router-dom";

const MovieList = ({ movies, filterText, filterRating }) => {
  const history = useHistory();

  return (
    <div className="container">
      <ul className="movies">
        {movies
          .filter(
            ({ title, rating }) =>
              title.toLowerCase().includes(filterText) && filterRating <= rating
          )
          .map((movie, index) => {
            return (
              <li
                className="movies__item"
                key={index}
                onClick={() => history.push(`${movie.id}`)}
              >
                <MovieCard movie={movie}></MovieCard>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieList;
