import React from "react";

const MoviesItems = ({ movie, onSelectMovie }) => {
  return (
    <>
      {!movie ? (
        <p>Start searchingg</p>
      ) : (
        <li onClick={() => onSelectMovie(movie.imdbID)}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>🗓</span>
              <span>{movie.Year}</span>
            </p>
          </div>
        </li>
      )}
    </>
  );
};

export default MoviesItems;
