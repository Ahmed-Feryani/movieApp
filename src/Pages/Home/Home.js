import React, { useState } from "react";
import AddModal from "../../components/AddModal/AddModal";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";
import Navigation from "../../components/Navigation/Navigation";


const Home = ({movies , setMovies}) => {
  
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [filterRating, setFilterRating] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values, resetForm) => {
    const list = [...movies];
    list.push({
      id: Date.now(),
      ...values,
      rating,
    });
    setMovies(list);
    resetForm();
    handleClose();
    setRating(0);
    setFilterText("");
    setFilterRating(0);
  };
  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);
  };
  return (
    <div>
      <Navigation handleOpen={handleOpen} />
      <AddModal
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        open={open}
        rating={rating}
        setRating={setRating}
      />
      <Header
        handleChange={handleChange}
        filterText={filterText}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <MovieList
        movies={movies}
        filterText={filterText}
        filterRating={filterRating}
      />
    </div>
  );
};

export default Home;
