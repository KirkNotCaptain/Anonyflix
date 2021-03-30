import '../App.css';
import { useContext, useEffect } from 'react';
import MovieContext from '../context.js';
import MovieCard from './movie-card';

var ChoicesList = () => {
  const context = useContext(MovieContext);

  useEffect(() => {}, [context.selectedMovies]);

  const displayUserSelection = () => {
    if (context.selectedMovies.length) {
      return (
        <div className="choices-list">
          {context.selectedMovies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      );
    } else {
      return <></>;
    }
  };

  return displayUserSelection();
};

export default ChoicesList;
