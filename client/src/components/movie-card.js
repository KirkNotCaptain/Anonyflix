import '../App.css';
import { useContext, useState } from 'react';
import MovieContext from '../context.js';
import { Button } from '@material-ui/core';
import { useSpring, animated as a } from 'react-spring';

var MovieCard = ({ movie }) => {
  const context = useContext(MovieContext);
  const [isClicked, setIsClicked] = useState(false);
  const [flipped, setFlipped] = useState(false);
  // console.log('shared movies: ', context.selectedMovies);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  var handleSelection = (movie) => {
    // console.warn(movie);
    if (!isClicked) {
      console.log(context.userId);
      var movieWithUserName = Object.assign({ userId: context.userId }, movie);
      // context.updateSharedMovies(movie);
      context.updateSharedMovies(movieWithUserName);
      setIsClicked(true);
    }
  };

  var handleRemoveSelection = (currentMovie) => {
    // console.log('MOVIE CONTEXT: ', context.selectedMovies);
    currentMovie = Object.assign({ userId: context.userId }, currentMovie);
    var cp = context.selectedMovies.slice();
    for (var i = 0; i < cp.length; i++) {
      if (currentMovie.id === cp[i].id) {
        console.log('match');
        // console.log(currentMovie, cp[i]);
        if (context.userId === cp[i].userId) {
          console.log('id match');
          delete cp[i];
          var deleteMovie = { delete: currentMovie };
          context.updateSharedMovies(deleteMovie);
          setIsClicked(false);
        }
      }
    }
  };

  var displayButton = (isClicked) => {
    if (!isClicked) {
      return (
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            handleSelection(movie);
          }}
        >
          Add
        </Button>
      );
    } else {
      return (
        <Button
          variant="contained"
          color="default"
          onClick={() => {
            handleRemoveSelection(movie);
          }}
        >
          Remove
        </Button>
      );
    }
  };

  return (
    <div
      onClick={() => {
        setFlipped(!flipped);
      }}
    >
      <a.div
        className="movie-card"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
        />
        <h3>{movie.title}</h3>
        <h4>Rating: {movie.vote_average}</h4>
        <div className="icons">{displayButton(isClicked)}</div>
      </a.div>
      <a.div
        className="movie-desc"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        {movie.overview}
      </a.div>
    </div>
  );
};

export default MovieCard;
