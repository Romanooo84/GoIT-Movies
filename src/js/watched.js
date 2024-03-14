document.addEventListener('DOMContentLoaded', () => {
  const watchedBtn = document.getElementById('watched-btn');
  if (watchedBtn) {
    watchedBtn.addEventListener('click', () => {
      const movieId = watchedBtn.getAttribute('data-movie-id');
      addToWatched(movieId);
    });
  }
});

function addToWatched(movieId) {
  const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }
}

/*const addToWatched = movieId => {
  const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }
};*/

/*document.addEventListener('DOMContentLoaded', () => {
  const addToWatchedBtn = document.getElementById('add-to-watched');
  if (addToWatchedBtn) {
    addToWatchedBtn.addEventListener('click', () => {
      const movieId = addToWatchedBtn.getAttribute('data-movie-id');
      addToWatched(movieId);
    });
  }
}); */
