import firebase from 'firebase/app';

import 'firebase/auth';

import movies from '../../components/movies/movies';

// import movieData from './moviesData';

const movieDiv = document.getElementById('movie');
const allMoviesDiv = document.getElementById('allMovies');
const movieNavbar = document.getElementById('navbar-button-movie');
const authDiv = document.getElementById('auth');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const addMovieEvents = () => {
  document.getElementById('add-movie-button').addEventListener('click', movies.newMovieButton);
};


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error('test');
      allMoviesDiv.classList.remove('hide');
      authDiv.classList.add('hide');
      movieDiv.classList.remove('hide');
      movieNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      addMovieEvents();
    } else {
      allMoviesDiv.classList.add('hide');
      authDiv.classList.remove('hide');
      movieDiv.classList.add('hide');
      movieNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
