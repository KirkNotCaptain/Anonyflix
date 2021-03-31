import { Button } from '@material-ui/core';
import { useContext } from 'react';
import MovieContext from '../context.js';

var MovieSelectionButtons = () => {
  const context = useContext(MovieContext);
  console.log('top rated movies: ', context.topRatedMovies);

  var handleButtonSelection = (selectionType) => {
    if (selectionType === 'nowPlaying') {
      context.setCurrentlyDisplayedMovies(context.nowPlayingMovies);
    }

    if (selectionType === 'popular') {
      context.setCurrentlyDisplayedMovies(context.popularMovies);
    }

    if (selectionType === 'topRated') {
      context.setCurrentlyDisplayedMovies(context.topRatedMovies);
    }
  };

  return (
    <div className="button-list">
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          handleButtonSelection('popular');
        }}
      >
        Popular
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          handleButtonSelection('topRated');
        }}
      >
        Top Rated
      </Button>
      <Button
        variant="contained"
        color="default"
        onClick={() => {
          handleButtonSelection('nowPlaying');
        }}
      >
        Now Playing
      </Button>
    </div>
  );
};

export default MovieSelectionButtons;
