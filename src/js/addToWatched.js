Notiflix.Notify.init({
  timeout: 3000,
  clickToClose: true,
  zindex: 99999,
  position: 'center-top',
});

import Notiflix from 'notiflix';

const modal = document.querySelector('.modal-window');

const addToWatched = event => {
  // Sprawdzanie, czy kliknięty element jest przyciskiem 'Add to watched'
  if (event.target.id === 'watched-btn') {
    const movieId = event.target.getAttribute('data-movie-id');

    if (typeof Storage !== 'undefined') {
      const moviesInStorage = localStorage.getItem('watched');
      let watched = moviesInStorage ? JSON.parse(moviesInStorage) : [];

      // Sprawdzanie, czy film jest już na liście, aby uniknąć duplikatów
      const isMovieAlreadyAdded = watched.some(movie => movie.id === movieId);
      if (!isMovieAlreadyAdded) {
        watched.push({ id: movieId });
        localStorage.setItem('watched', JSON.stringify(watched));
        Notiflix.Notify.success('Video has been added to the watched list');
      } else {
        Notiflix.Notify.warning('This video is already in your watched list.');
      }
    } else {
      Notiflix.Notify.failure('Your browser does not support Local Storage.');
    }
  }
};

// Dodanie nasłuchiwacza do całego modalu, ale reagowanie tylko na przycisk 'Add to watched'
modal.addEventListener('click', addToWatched);
