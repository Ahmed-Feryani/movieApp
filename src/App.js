import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { list } from "./moviesList";
import Home from "./Pages/Home/Home";
import MovieDescription from "./Pages/MovieDescription/MovieDescription";

function App() {
  const [movies, setMovies] = useState(list);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home movies={movies} setMovies={setMovies}></Home>
        </Route>
        <Route path="/:id" exact>
          <MovieDescription MovieList={movies}></MovieDescription>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
