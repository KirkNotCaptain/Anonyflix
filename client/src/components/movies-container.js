import '../App.css';
import './movies-list';
import MoviesList from './movies-list';
import MovieSelectionButtons from './movies-selection-buttons.js';

var MoviesContainer = () => {
  return (
    <>
      <div className="movies-container">
        <h1 className="title">Your Anony-Selections</h1>
        <MovieSelectionButtons />
        <MoviesList />
      </div>
    </>
  );
};

export default MoviesContainer;
