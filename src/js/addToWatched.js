Notiflix.Notify.init({
  timeout: 3000,
  clickToClose: true,
  zindex: 99999,
  position: 'center-top',
});

import Notiflix from 'notiflix';

const moviesListW = document.querySelector('.library-watched');
const modal = document.querySelector('.modal-window');

const manageWatched = event => {
  // Sprawdzanie, czy kliknięty element jest przyciskiem 'Add to watched'
  if (event.target.id === 'watched-btn') {
    const movieId = event.target.getAttribute('data-movie-id');

    if (typeof Storage !== 'undefined') {
      const moviesInStorage = localStorage.getItem('watched');
      let watched = moviesInStorage ? JSON.parse(moviesInStorage) : [];

      // Sprawdzanie, czy film jest już na liście, aby uniknąć duplikatów
      const isMovieAlreadyAdded = watched.some(movie => movie.id === movieId);
      if (event.target.classList.contains('add')) {
        if (!isMovieAlreadyAdded) {
          watched.push({ id: movieId });
          localStorage.setItem('watched', JSON.stringify(watched));
          Notiflix.Notify.success('Video has been added to the queued list');
        } else {
          Notiflix.Notify.warning('This video is already in your queue.');
        }
      } else if (event.target.classList.contains('remove')) {
        if (isMovieAlreadyAdded) {
          watched = watched.filter(movie => movie.id !== movieId);
          localStorage.setItem('watched', JSON.stringify(watched));

          Notiflix.Notify.info('Video has been removed from the watched list');
          if (JSON.parse(moviesInStorage).length === 1) {
            // moviesListW.style.display = 'flex';
            moviesListW.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
          }
          // showWatched();
        } else {
          Notiflix.Notify.warning('This video is not in your watched list.');
        }
      }
    } else {
      Notiflix.Notify.failure('Your browser does not support Local Storage.');
    }
  }
};

// Dodanie nasłuchiwacza do całego modalu, ale reagowanie tylko na przycisk 'Add to watched'
modal.addEventListener('click', manageWatched);
