import { createContext } from 'react';

const MovieContext = createContext({
  currentlyDisplayedMovies: [],
  setCurrentlyDisplayedMovies: () => {},
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  selectedMovies: [],
  setSelectedMovies: () => {},
  updateSharedMovies: () => {},
});

export default MovieContext;
