import React, { useState, useEffect } from "react";

const KEY = "537218bf";

const useMovies = (query, callBack) => {
  const [isloading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    callBack?.();
    async function fethMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fethcing movie");
        }
        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setError("");
      } catch (error) {
        console.log(error);
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setError("");
      setMovies([]);
      setIsLoading(false);
      return;
    }
    fethMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return {movies, isloading, error}
};

export default useMovies;
