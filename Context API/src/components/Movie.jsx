import MovieRating from "./MovieRating";

const Movie = ({ movie }) => {
  const { poster, title, director, year, rating } = movie;

  return (
    <li className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      <img
        src={poster}
        alt={title}
        className="w-full h-60 object-fill rounded-md mb-4"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">
        Directed by <span className="text-white">{director}</span>
      </p>
      <p className="text-gray-400 text-sm mb-4">
        Released: <span className="text-white">{year}</span>
      </p>
      <MovieRating rating={rating} />
    </li>
  );
};

export default Movie;
