const addToWatched = movieId => {
  const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const addToWatchedBtn = document.getElementById('add-to-watched');
  if (addToWatchedBtn) {
    addToWatchedBtn.addEventListener('click', () => {
      const movieId = addToWatchedBtn.getAttribute('data-movie-id');
      addToWatched(movieId);
    });
  }
});
