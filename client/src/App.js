import './App.css';
import {
  getPopular,
  getNowPlaying,
  getTopRated,
} from './fetch-requests/fetch.js';
import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { Button, Input } from '@material-ui/core';
import ChoicesContainer from './components/choices-container.js';
import MoviesContainer from './components/movies-container.js';
import MovieContext from './context.js';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
  const [currentlyDisplayedMovies, setCurrentlyDisplayedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState('anonymous');

  var updateSharedMovies = (movie) => {
    console.log('updating movie');
    client.send(JSON.stringify(movie));
  };

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    getPopular().then((data) => {
      setPopularMovies(data.data.results);
      //this makes sure that upon re-render the currently displayed movies don't always change back to popular
      if (!currentlyDisplayedMovies.length) {
        setCurrentlyDisplayedMovies(data.data.results);
      }
    });

    getNowPlaying().then((data) => {
      setNowPlayingMovies(data.data.results);
    });

    getTopRated().then((data) => {
      setTopRatedMovies(data.data.results);
    });

    client.onmessage = (movie) => {
      // console.log('message from websocket: ', JSON.parse(movie.data));
      setSelectedMovies([...selectedMovies, JSON.parse(movie.data)]);
    };
  }, [selectedMovies]);

  var handleUsername = (e) => {
    setUsername(e.currentTarget.id);
  };

  var handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <form className="login-form">
          <Input
            labelText="Username"
            id="username"
            formControlProps={{ fullWidth: true }}
            onChange={handleUsername}
            type="text"
          />
          <Button
            type="button"
            color="primary"
            className="login-button"
            onClick={handleLogin}
          >
            Log in
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <MovieContext.Provider
        value={{
          currentlyDisplayedMovies,
          setCurrentlyDisplayedMovies,
          popularMovies,
          nowPlayingMovies,
          topRatedMovies,
          selectedMovies,
          setSelectedMovies,
          updateSharedMovies,
        }}
      >
        <div className="App">
          <header className="App-header">
            <h1>DemocraFlix</h1>
          </header>
          <ChoicesContainer />
          <MoviesContainer />
        </div>
      </MovieContext.Provider>
    );
  }
}

export default App;
