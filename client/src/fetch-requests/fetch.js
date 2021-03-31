import 'axios';
import axios from 'axios';
import API_KEY from '../config.js';

var getPopular = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
        resolve(data);
      });
  });
};

var getNowPlaying = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
      .then((data) => {
        resolve(data);
      });
  });
};

var getTopRated = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((data) => {
        resolve(data);
      });
  });
};

export { getPopular, getNowPlaying, getTopRated };
