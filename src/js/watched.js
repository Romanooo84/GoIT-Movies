import Notiflix from 'notiflix';
const modal = document.querySelector('.modal-window');
const addToWatched = event => {
  const movieId = event.target.getAttribute('data-movie-id');

  if (typeof Storage !== 'undefined') {
    const moviesInStorage = localStorage.getItem('watched');
    let watched = [];

    if (moviesInStorage) {
      watched = JSON.parse(moviesInStorage);
    }

    watched.push({ id: movieId });

    localStorage.setItem('watched', JSON.stringify(watched));

    Notiflix.Notify.success('Video has been added to the watched list');
  } else {
    Notiflix.Notify.failure('Your browser does not support this button.');
  }
};

modal.addEventListener('click', () => {
  const watchedButton = document.querySelector('#watched-btn');
  watchedButton.addEventListener('click', addToWatched);
});
