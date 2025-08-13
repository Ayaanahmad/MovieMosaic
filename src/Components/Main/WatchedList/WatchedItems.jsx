import React from "react";

const WatchedItems = ({ movie, onDeleteWatched }) => {
  return (
    <li key={movie.imdbId}>
      <img src={movie.poster} alt={`${movie.Title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button onClick={() => onDeleteWatched(movie.imdbId)} className="btn-delete">
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedItems;
