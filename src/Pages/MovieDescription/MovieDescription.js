import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.scss";
const MovieDescription = ({ MovieList }) => {
  const { id } = useParams();
  const history = useHistory();
  const movie = MovieList.find((item) => item.id === +id);
  if (!movie) return <div className="container"> not found </div>;
  return (
    <div className="MovieDescription">
      <div className="container">
        <div className="back" onClick={() => history.push("/")}>
          <ArrowBack /> Back
        </div>

        <h2> Description : </h2>
        <p>{movie.description}</p>
        <iframe
          title={movie.id}
          className="vid"
          src={movie.trailer}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDescription;
