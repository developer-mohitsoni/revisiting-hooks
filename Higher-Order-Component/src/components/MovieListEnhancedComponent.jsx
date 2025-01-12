import MovieList from "./MovieList";
import withFetch from "./WithFetch";

const MovieListEnhancedComponent = () => {
  const EnhancedComponent = withFetch(MovieList);
  return (
    <>
      <EnhancedComponent />
    </>
  );
};

export default MovieListEnhancedComponent;
