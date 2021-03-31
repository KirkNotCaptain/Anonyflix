import { Button } from '@material-ui/core';

var MovieSelectionButtons = () => {
  return (
    <div className="button-list">
      <Button variant="contained" color="default">
        Popular
      </Button>
      <Button variant="contained" color="default">
        Top Rated
      </Button>
      <Button variant="contained" color="default">
        Now Playing
      </Button>
    </div>
  );
};

export default MovieSelectionButtons;
