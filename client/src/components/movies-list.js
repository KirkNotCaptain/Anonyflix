import '../App.css';
import { useContext, useState } from 'react';
import MovieContext from '../context.js';
import MovieCard from './movie-card.js';

var MoviesList = () => {
  const context = useContext(MovieContext);
  const [maxSelections, setMaxSelections] = useState(5);

  return (
    <div className="movies-list">
      {context.popularMovies.map((movie) => {
        return (
          <MovieCard
            movie={movie}
            key={movie.id}
            maxSelections={maxSelections}
            setMaxSelections={setMaxSelections}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
