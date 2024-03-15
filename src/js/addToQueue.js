import Notiflix from 'notiflix';

const modal = document.querySelector('.modal-window');

const addToQueue = event => {
  // Sprawdzanie, czy kliknięty element jest przyciskiem 'Add to queue'
  if (event.target.id === 'queue-button') {
    const movieId = event.target.getAttribute('data-movie-id');

    if (typeof Storage !== 'undefined') {
      const moviesInQueue = localStorage.getItem('queue');
      let queue = moviesInQueue ? JSON.parse(moviesInQueue) : [];

      // Sprawdzanie, czy film jest już na liście, aby uniknąć duplikatów
      const isMovieAlreadyAdded = queue.some(movie => movie.id === movieId);
      if (!isMovieAlreadyAdded) {
        queue.push({ id: movieId });
        localStorage.setItem('queue', JSON.stringify(queue));
        Notiflix.Notify.success('Video has been added to the queued list');
      } else {
        Notiflix.Notify.warning('This video is already in your queue.');
      }
    } else {
      Notiflix.Notify.failure('Your browser does not support Local Storage.');
    }
  }
};

// Dodanie nasłuchiwacza do całego modalu, ale reagowanie tylko na przycisk 'Add to queue'
modal.addEventListener('click', addToQueue);

