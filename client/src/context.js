import { createContext } from 'react';

const MovieContext = createContext({
  popularMovies: [],
  selectedMovies: [],
  setSelectedMovies: () => {},
  updateSharedMovies: () => {},
});

export default MovieContext;
