import '../App.css';
import { useContext, useState } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import MovieContext from '../context.js';

var MovieCard = ({ movie }) => {
  const context = useContext(MovieContext);
  const [isClicked, setIsClicked] = useState(false);
  // console.log('shared movies: ', context.selectedMovies);

  var handleSelection = (movie) => {
    if (!isClicked) {
      context.updateSharedMovies(movie);
      setIsClicked(true);
    }
  };

  var handleRemoveSelection = (currentMovie) => {
    var cp = context.selectedMovies.slice();
    var newList = cp.filter((movie) => {
      if (currentMovie.id !== movie.id) {
        return movie;
      }
    });
    context.setSelectedMovies(newList);
    setIsClicked(false);
  };

  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.title}</h3>
      <h4>Rating: {movie.vote_average}</h4>
      <div className="icons">
        <IndeterminateCheckBoxIcon
          classes={{ root: 'minus-icon' }}
          style={{ fontSize: 40 }}
          onClick={() => {
            handleRemoveSelection(movie);
          }}
        />
        <AddBoxIcon
          classes={{ root: 'plus-icon' }}
          style={{ fontSize: 40 }}
          onClick={() => {
            handleSelection(movie);
          }}
        />
      </div>
    </div>
  );
};

export default MovieCard;
