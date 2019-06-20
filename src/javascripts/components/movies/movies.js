import firebase from 'firebase/app';

import 'firebase/auth';

import util from '../../helpers/util';

import movieData from '../../helpers/Data/moviesData';

const deleteMoviesEvent = (e) => {
  const movieId = e.target.id.split('.')[1];
  movieData.deleteMovie(movieId)
    .then(() => initMoviesData(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
    .catch(err => console.error('no deletion', err));
};


const addEvents = () => {
  const deleteButtons = document.getElementsByClassName('delete-movie');
  console.error(deleteButtons);
  for (let i = 0; i < deleteButtons.length; i += 1) {
    deleteButtons[i].addEventListener('click', deleteMoviesEvent);
  }
};


const movieStringBuilder = (movies) => {
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="card" style="width: 25rem;">`;
    domString += '<div class="card-body">';
    domString += `<image src=${movie.imageUrl} alt="movie location" />`;
    domString += `<div class="movie-title">${movie.title}</div>`;
    domString += `<h6>${movie.mpaaRating}</h6>`;
    domString += `<div class="btn btn-danger delete-movie" id="delete.${movie.id}">delete</div>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('allMovies', domString);
  addEvents();
};

const initMoviesData = () => {
  movieData.getMoviesByUid()
    .then((movie) => {
      movieStringBuilder(movie);
    })
    .catch(err => console.error('no events', err));
};

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
      initMoviesData();
      document.getElementById('new-movie').classList.add('hide');
    });
};

const newMovieButton = () => {
  console.error('createNewmovie');
  document.getElementById('new-movie').classList.remove('hide');
  document.getElementById('saveNewMovie').addEventListener('click', createNewMovie);
};

export default { initMoviesData, newMovieButton };
