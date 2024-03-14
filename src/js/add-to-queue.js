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

    alert('Film został dodany do kolejki!');
  } else {
    alert('Twoja przeglądarka nie obsługuje local storage.');
  }
};

document.addEventListener('click', () => {
  const queueButton = document.querySelector('.add-to-queue');
  queueButton.addEventListener('click', addToQueue);
});

/*const addToQueue = movieId => {
  const queue = JSON.parse(localStorage.getItem('queueMovies')) || [];
  if (!queue.includes(movieId)) {
    queue.push(movieId);
    localStorage.setItem('queueMovies', JSON.stringify(queue));
  }
};

/*document.addEventListener('DOMContentLoaded', () => {
  const addToQueueBtn = document.getElementById('add-to-queue');
  if (addToQueueBtn) {
    addToQueueBtn.addEventListener('click', () => {
      const movieId = addToQueueBtn.getAttribute('data-movie-id');
      addToQueue(movieId);
    });
  }
});*/
