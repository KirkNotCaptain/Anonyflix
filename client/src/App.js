import './App.css';
import {
  getPopular,
  getNowPlaying,
  getTopRated,
} from './fetch-requests/fetch.js';
import { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import ChoicesContainer from './components/choices-container.js';
import MoviesContainer from './components/movies-container.js';
import MovieContext from './context.js';
import SignIn from './components/sign-in.js';
import AnimatedHeader from './components/animated-header.js';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function App() {
  const [currentlyDisplayedMovies, setCurrentlyDisplayedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUsername] = useState('anonymous');
  const [userId] = useState(Math.floor(Math.random() * 10000));

  var updateSharedMovies = (movie) => {
    console.log('updating movie', movie);
    // var movieWithUserName = Object.assign({ userId: userId }, movie);
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

    client.onmessage = (selectedMovies) => {
      console.warn('INCOMING MOVIE LIST: ', JSON.parse(selectedMovies.data));
      // setSelectedMovies([...selectedMovies, JSON.parse(movie.data)]);
      setSelectedMovies(JSON.parse(selectedMovies.data));
    };
  }, [selectedMovies]);

  var handleUsername = (e) => {
    setUsername(e.currentTarget.id);
  };

  var handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  if (!isLoggedIn) {
    return <SignIn handleLogin={handleLogin} handleUsername={handleUsername} />;
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
          userName,
          userId,
        }}
      >
        <div className="App">
          <header className="App-header">
            <img
              id="main-page-logo"
              alt="main-page-logo"
              src="https://i.imgur.com/pnjMfEN.png"
            />
            <AnimatedHeader />
          </header>
          <ChoicesContainer />
          <MoviesContainer />
        </div>
      </MovieContext.Provider>
    );
  }
}

export default App;
