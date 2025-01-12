import MovieDirectorTable from "./MovieDirectorTable";

const MovieAnalytics = ({ data }) => {
  const groupedMovies = groupBy(data, "director");
  const allDirectors = Reflect.ownKeys(groupedMovies);

  function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  }

  const directors = allDirectors.map((director) => {
    const movies = groupedMovies[director];
    const totalMovies = movies.length;
    const totalRuntime = movies.reduce(
      (total, movie) => total + movie.runtime,
      0
    );
    const averageRuntime = totalRuntime / totalMovies;
    return {
      director,
      totalMovies,
      totalRuntime,
      averageRuntime,
    };
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Movie Analytics</h2>
      <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <MovieDirectorTable directors={directors} />
      </div>
    </div>
  );
};

export default MovieAnalytics;
