import '../App.css';
import { useContext } from 'react';
import MovieContext from '../context.js';
import ChoicesCard from './choices-card';

var ChoicesList = () => {
  const context = useContext(MovieContext);

  const displayUserSelection = () => {
    if (context.selectedMovies.length) {
      return (
        <div className="choices-list">
          {context.selectedMovies.map((movie) => {
            return <ChoicesCard movie={movie} key={movie.id} />;
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
