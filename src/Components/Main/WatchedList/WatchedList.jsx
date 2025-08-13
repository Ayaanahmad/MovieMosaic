import React from "react";
import WatchedItems from "./WatchedItems";

const WatchedList = ({ watched, onDeleteWatched }) => {
  return (
    <>
      {!watched?.length ? (
        <p className="watchList">Your list is empty😲</p>
      ) : (
        <ul className="list">
          {watched.map((movie) => (
            <WatchedItems
              movie={movie}
              key={movie.imdbId}
              onDeleteWatched={onDeleteWatched}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default WatchedList;
