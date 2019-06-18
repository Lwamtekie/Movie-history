import firebase from 'firebase/app';

import 'firebase/auth';

import movieData from './moviesData';

import movies from '../../components/movies/movies';


const authDiv = document.getElementById('auth');
const movieDiv = document.getElementById('movie');
const allMoviesDiv = document.getElementById('allMovies');
const movieNavbar = document.getElementById('navbar-button-movie');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');


const createNewMovie = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const imgUrl = document.getElementById('imageUrl').value;
  console.error(name, rating, imgUrl);
  const newMovie = {
    title: document.getElementById('name').value,
    mpaaRating: document.getElementById('rating').value,
    imageUrl: document.getElementById('imageUrl').value,
  };
  movieData.addNewMovie(newMovie)
    .then(() => {
      movies.initMoviesData();
      document.getElementById('new-movie').classList.add('hide');
    });
};
  //     document.getElementById('name').value = '';
  //     document.getElementById('email').value = '';
  //     document.getElementById('birfday').classList.remove('hide');
  //     document.getElementById('new-movie').classList.add('hide');
  //     getMovies(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
  //   })
  //   .catch(err => console.error('no new friend for you', err));
// };

const newMovieButton = () => {
  console.error('createNewmovie');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

const addEvents = () => {
  document.getElementById('add-movie-button').addEventListener('click', newMovieButton);
};

// this is shows and removes things from the navbar
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
      addEvents();
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

const getMovies = (uid) => {
  movieData.getMoviesByUid(uid);
  console.error(uid);
};


export default { checkLoginStatus, getMovies };
