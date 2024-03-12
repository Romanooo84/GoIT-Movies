const addToWatched = movieId => {
  const watched = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  if (!watched.includes(movieId)) {
    watched.push(movieId);
    localStorage.setItem('watchedMovies', JSON.stringify(watched));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const addToWatchedBtn = document.getElementById('watched-btn');
    if (addToWatchedBtn) {
      addToWatchedBtn.addEventListener('click', () => {
        const movieId = addToWatchedBtn.getAttribute('data-movie-id');
        addToWatched(movieId);
      });
    }
  }, 0);
});
