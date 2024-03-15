import Notiflix from 'notiflix';
const modal = document.querySelector('.modal-window');

const addToQueue = event => {
  const movieId = event.target.getAttribute('data-movie-id');

  if (typeof Storage !== 'undefined') {
    const moviesInQueue = localStorage.getItem('queue');
    let queue = [];

    if (moviesInQueue) {
      queue = JSON.parse(moviesInQueue);
    }

    queue.push({ id: movieId });

    localStorage.setItem('queue', JSON.stringify(queue));

    Notiflix.Notify.success('Video has been added to the queued list');
  } else {
    Notiflix.Notify.failure('Your browser does not support this button.');
  }
};

modal.addEventListener('click', () => {
  const queueButton = document.querySelector('#queue-button');
  queueButton.addEventListener('click', addToQueue);
});
