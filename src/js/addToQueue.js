import Notiflix from 'notiflix';

const moviesListQ = document.querySelector('.library-queue');
const modal = document.querySelector('.modal-window');

const manageQueue = event => {
  // Sprawdzanie, czy kliknięty element jest przyciskiem 'Add to queue' lub 'Remove from queue'
  if (event.target.id === 'queue-button') {
    const movieId = event.target.getAttribute('data-movie-id');

    if (typeof Storage !== 'undefined') {
      const moviesInQueue = localStorage.getItem('queue');
      let queue = moviesInQueue ? JSON.parse(moviesInQueue) : [];

      // Sprawdzanie, czy film jest już na liście, aby uniknąć duplikatów lub usuwanie z listy
      const isMovieAlreadyAdded = queue.some(movie => movie.id === movieId);
      if (event.target.classList.contains('add')) {
        if (!isMovieAlreadyAdded) {
          queue.push({ id: movieId });
          localStorage.setItem('queue', JSON.stringify(queue));
          Notiflix.Notify.success('Video has been added to the queued list');
        } else {
          Notiflix.Notify.warning('This video is already in your queue.');
        }
      } else if (event.target.classList.contains('remove')) {
        if (isMovieAlreadyAdded) {
          queue = queue.filter(movie => movie.id !== movieId);
          localStorage.setItem('queue', JSON.stringify(queue));

          Notiflix.Notify.info('Video has been removed from the queued list');
        } else {
          Notiflix.Notify.warning('This video is not in your queue.');
        }
      }
    } else {
      Notiflix.Notify.failure('Your browser does not support Local Storage.');
    }
  }
};

// Dodanie nasłuchiwacza do całego modalu, ale reagowanie tylko na przyciski 'Add to queue' i 'Remove from queue'
modal.addEventListener('click', manageQueue);
