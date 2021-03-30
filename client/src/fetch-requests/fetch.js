import 'axios';
import axios from 'axios';
import API_KEY from '../config.js';

var getLatest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((data) => {
        resolve(data);
      });
  });
};

export { getLatest };
