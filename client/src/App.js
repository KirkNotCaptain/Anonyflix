import './App.css';
import { getLatest } from './fetch-requests/fetch.js';
import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
// import CustomInput from './components/CustomInput';
// import Button from './components/Button';
import { Button, Input } from '@material-ui/core';
import ChoicesContainer from './components/choices-container.js';
import MoviesContainer from './components/movies-container.js';
import MovieContext from './context.js';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState('anonymous');

  var updateSharedMovies = (movie) => {
    client.send(JSON.stringify(movie));
  };

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    getLatest().then((data) => {
      setPopularMovies(data.data.results);
    });

    client.onmessage = (movie) => {
      console.log('message from websocket: ', JSON.parse(movie.data));
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
          popularMovies,
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
