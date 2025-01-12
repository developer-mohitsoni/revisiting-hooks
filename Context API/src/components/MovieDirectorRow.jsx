const MovieDirectorRow = ({ director }) => {
  const {
    director: name,
    totalMovies,
    totalRuntime,
    averageRuntime,
  } = director;

  return (
    <tr className="hover:bg-gray-700 transition">
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">{totalMovies}</td>
      <td className="px-4 py-2">{totalRuntime}</td>
      <td className="px-4 py-2">{averageRuntime.toFixed(2)}</td>
    </tr>
  );
};

export default MovieDirectorRow;
