import '../App.css';
import { useContext } from 'react';
import MovieContext from '../context.js';
import MovieCard from './movie-card.js';

var MoviesList = () => {
  const context = useContext(MovieContext);
  return (
    <div className="movies-list">
      {context.popularMovies.map((movie) => {
        return <MovieCard movie={movie} key={movie.title} />;
      })}
    </div>
  );
};

export default MoviesList;
