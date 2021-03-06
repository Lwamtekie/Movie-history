import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesByUid = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResults = results.data;
      const movies = [];
      Object.keys(movieResults).forEach((movieId) => {
        movieResults[movieId].id = movieId;
        movies.push(movieResults[movieId]);
      });
      resolve(movies);
    })
    .catch(err => reject(err));
});
const addNewMovie = movieObject => axios.post(`${firebaseUrl}/movies.json`, movieObject);
const deleteMovie = movieId => axios.delete(`${firebaseUrl}/movies/${movieId}.json`);

export default { addNewMovie, getMoviesByUid, deleteMovie };
