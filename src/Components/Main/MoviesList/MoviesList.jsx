import React from "react";
import MoviesItems from "./MoviesItems";

const MoviesList = ({ movies, handleSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MoviesItems
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={handleSelectMovie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
