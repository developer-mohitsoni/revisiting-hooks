const MovieList = ({ movies }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] sm:w-[80%] lg:w-[60%] mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        🎥 Movie List - With HOC
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="h-64 w-full">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-fill"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 truncate">
                {movie.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Release Year: {movie.year || "N/A"}
              </p>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
