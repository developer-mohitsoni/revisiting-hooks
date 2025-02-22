import { useState, useEffect } from "react";

const withFetch = (WrappedComponent) => {
  return (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovieData = async () => {
        try {
          const response = await fetch(
            "https://json-faker.onrender.com/movies"
          );
          const data = await response.json();
          setMovies(data.movies);
        } catch (error) {
          console.error("Failed to fetch movies:", error);
        }
      };

      fetchMovieData();
    }, []);

    return (
      <>
        {movies.length > 0 ? (
          <WrappedComponent movies={movies} {...props} />
        ) : (
          <div className="text-white text-lg">Loading movies...</div>
        )}
      </>
    );
  };
};

export default withFetch;
