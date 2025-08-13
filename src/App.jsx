import { useEffect, useState } from "react";
import Navbar from "./Components/Header/Navbar";
import Logo from "./Components/Header/Logo";
import SearchBar from "./Components/Header/SearchBar";
import Result from "./Components/Header/Result";
import Main from "./Components/Main/Main";
import MoviesList from "./Components/Main/MoviesList/MoviesList";
import WatchedList from "./Components/Main/WatchedList/WatchedList";
import MainBox from "./Components/Main/MainBox/MainBox";
import Loader from "./Components/constants/Loader";
import Errors from "./Components/constants/Errors";
import MovieDetails from "./Components/Main/MoviesList/MovieDetails";
import useMovies from "./Components/Hooks/useMovies";
import useLocalStorage from "./Components/Hooks/useLocalStorage";
import { WatchedSummary } from "./Components/Main/WatchedList/WatchedSummary";

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watch) => [...watch, movie]);
  }

  function handleDelete(id) {
    setWatched((watch) => watch.filter((movie) => movie.imdbId !== id));
  }

  const { movies, isloading, error } = useMovies(query, handleCloseMovie);
  const [watched, setWatched] = useLocalStorage([], "watched");

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <Result movies={movies} />
      </Navbar>
      <Main>
        <MainBox>
          {!isloading && !movies?.length && (
            <p className="searchParagraph">
              Looking for your favorite Movie🎞️? Just search 🔎 it......{" "}
            </p>
          )}
          {isloading && <Loader />}
          {!isloading && !error && (
            <MoviesList movies={movies} handleSelectMovie={handleSelectMovie} />
          )}
          {error && <Errors message={error} />}
        </MainBox>
        <MainBox>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleClose={handleCloseMovie}
              watched={watched}
              onAddWatchedMovie={handleAddWatchedMovie}
            />
          ) : (
            <>
              {" "}
              <WatchedSummary
                watched={watched}
                average={average}
                avgImdbRating={avgImdbRating}
                avgUserRating={avgUserRating}
                avgRuntime={avgRuntime}
              />
              <WatchedList watched={watched} onDeleteWatched={handleDelete} />
            </>
          )}
        </MainBox>
      </Main>
    </>
  );
}
