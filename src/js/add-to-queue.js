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
  const queueButton = document.querySelector('#queue-button');
  queueButton.addEventListener('click', addToQueue);
});
