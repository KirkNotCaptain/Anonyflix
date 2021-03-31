import '../App.css';

var ChoicesCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3>{movie.title}</h3>
      <h4>Rating: {movie.vote_average}</h4>
    </div>
  );
};

export default ChoicesCard;
