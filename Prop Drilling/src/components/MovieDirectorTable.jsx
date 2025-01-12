import MovieDirectorRow from "./MovieDirectorRow";

const MovieDirectorTable = ({ directors }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-left text-sm text-gray-300">
        <thead className="bg-gray-700 text-gray-200">
          <tr>
            <th className="px-4 py-2">Director</th>
            <th className="px-4 py-2">Total Movies</th>
            <th className="px-4 py-2">Total Runtime (mins)</th>
            <th className="px-4 py-2">Average Runtime (mins)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {directors.map((director) => (
            <MovieDirectorRow key={director.director} director={director} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieDirectorTable;
