import '../App.css';
import { useContext } from 'react';
import MovieContext from '../context.js';

var MovieCard = ({ movie }) => {
  const context = useContext(MovieContext);
  // console.log('shared movies: ', context.selectedMovies);

  var handleSelection = (movie) => {
    // console.log('SELECTED MOVIE: ', movie);
    context.updateSharedMovies(movie);
  };

  return (
    <div
      className="movie-card"
      onClick={() => {
        handleSelection(movie);
      }}
    >
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.title}</h3>
      <h4>Rating: {movie.vote_average}</h4>
    </div>
  );
};

export default MovieCard;
