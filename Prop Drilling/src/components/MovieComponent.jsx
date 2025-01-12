import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const MovieComponent = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("https://json-faker.onrender.com/movies");
        const data = await response.json();
        setMovieData(data.movies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie Gallery</h1>
      <div className="max-w-6xl mx-auto">
        <MovieList movies={movieData} />
      </div>
    </div>
  );
};

export default MovieComponent;
