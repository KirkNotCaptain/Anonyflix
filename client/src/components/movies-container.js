import '../App.css';
import './movies-list';
import MoviesList from './movies-list';

var MoviesContainer = () => {
  return (
    <>
      <div className="movies-container">
        <h1 className="title">Today's Most Popular Movies</h1>
        <MoviesList />
      </div>
    </>
  );
};

export default MoviesContainer;
