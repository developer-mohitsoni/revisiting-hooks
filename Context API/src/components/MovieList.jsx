import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default MovieList;
