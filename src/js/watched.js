const addToWatched = event => {
  const movieId = event.target.getAttribute('data-movie-id');

  if (typeof Storage !== 'undefined') {
    const moviesInStorage = localStorage.getItem('watched');
    let watched = [];

    if (moviesInStorage) {
      watched = JSON.parse(moviesInStorage);
    }

    watched.push({ id: movieId });

    localStorage.setItem('watched', JSON.stringify(watched));

    alert('Film został dodany do listy oglądanych!');
  } else {
    alert('Twoja przeglądarka nie obsługuje local storage.');
  }
};

document.addEventListener('click', () => {
  const watchedButton = document.querySelector('#watched-btn');
  watchedButton.addEventListener('click', addToWatched);
});

