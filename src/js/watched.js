<<<<<<< Updated upstream
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
=======
const addToWatched = event => {
  const movieId = event.target.getAttribute('data-movie-id');

  if (typeof Storage !== 'undefined') {
    const moviesInStorage = localStorage.getItem('movies');
    let movies = [];

    if (moviesInStorage) {
      movies = JSON.parse(moviesInStorage);
    }

    movies.push({ id: movieId });

    localStorage.setItem('movies', JSON.stringify(movies));

    alert('Film został dodany do listy oglądanych!');
  } else {
    alert('Twoja przeglądarka nie obsługuje local storage.');
  }
};

document.addEventListener('click', () => {
  const watchedButton = document.querySelector('#watched-btn');
  watchedButton.addEventListener('click', addToWatched);
});

/*const addToWatched = movieId => {
>>>>>>> Stashed changes
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
