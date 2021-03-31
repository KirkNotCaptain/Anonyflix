import { Button } from '@material-ui/core';

var MovieSelectionButtons = () => {
  return (
    <div className="button-list">
      <Button variant="contained" color="primary">
        Popular
      </Button>
      <Button variant="contained" color="primary">
        Top Rated
      </Button>
      <Button variant="contained" color="primary">
        Now Playing
      </Button>
    </div>
  );
};

export default MovieSelectionButtons;
