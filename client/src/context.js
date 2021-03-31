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
  userName: '',
  userId: 0,
});

export default MovieContext;
