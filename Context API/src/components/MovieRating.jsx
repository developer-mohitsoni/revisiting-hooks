const MovieRating = ({ rating }) => {
  return (
    <p className="text-yellow-400 font-semibold">
      ⭐ Rating: <span className="text-white">{rating}</span>
    </p>
  );
};

export default MovieRating;
