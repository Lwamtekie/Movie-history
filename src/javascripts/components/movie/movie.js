import util from '../../helpers/util';
import MovieData from '../../helpers/Data/movieData';

const addEvents = () => {
  document.getElementById('add-movie-button').addEventListner('click', () => {
  });
};
const movieStringBuilder = (movies) => {
  console.error(movies);
  let domString = '<div class="row">';
  movies.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div id=${movie.id} class="card" style="width: 25rem;">`;
    domString += '<div class="card-body">';
    domString += `<img src=${movie.imageUrl} alt="movie location" />`;
    domString += `<h4>${movie.title}</h4>`;
    domString += `<h6>${movie.mpaaRating}</h6>`;
    domString += '<a href="#" class="btn btn-dark">Delete</a>';
    domString += '<a href="#" class="btn btn-link watched">Watched</a>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('allMovies', domString);
  addEvents();
};

const initMoviesData = () => {
  MovieData.getMoviesByUid()
    .then((movie) => {
      movieStringBuilder(movie);
    })
    .catch(err => console.error(err));
};

export default { initMoviesData };
