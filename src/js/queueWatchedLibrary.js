// ** na postawie pull requesta Sebastiana, który dodaje filmy do kolejki i obejrzane w local storage ** //

const libraryBoxWatched = document.querySelector('.library-watched');
const libraryBoxQueued = document.querySelector('.library-queue');
const watchedButton = document.querySelector('.header-library-button-watched');
const queueButton = document.querySelector('.header-library-button-queue');

const showWatched = () => {};
const showQueued = () => {};

watchedButton.addEventListener('click', showWatched);
queueButton.addEventListener('click', showQueued);

// *** WERSJA watched z przyciskiem*** //
document.addEventListener('DOMContentLoaded', () => {
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
  const libraryBoxWatched = document.querySelector('.library-watched');

  // Funkcja tworząca HTML dla filmów
  const createMovieElements = () => {
    return watchedMovies
      .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
        return `<li class="movie-card">
          <a href="${poster_path}" data-movie-id="${id}">
            <img src="${
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://cdn.vectorstock.com/i/1000x1000/82/99/no-image-available-like-missing-picture-vector-43938299.webp'
            }" alt="${original_title}"/>
          </a>
          <div class="info">
            <p class="info-item">
              <b>${original_title}</b>
            </p>
            <div class="details">
              <p class="info-item">
                <b>${genre_ids.slice(0, 2)}</b>
              </p>
              <p class="info-item">
                <b>| ${release_date.slice(0, 4)}</b>
              </p>
            </div>
          </div>
        </li>`;
      })
      .join('');
  };

  // Funkcja wyświetlająca filmy w galerii
  const displayWatchedMovies = () => {
    libraryBoxWatched.innerHTML = createMovieElements();
  };

  // Wywołaj funkcję do wyświetlania filmów, gdy strona się załaduje
  displayWatchedMovies();

  const watchedButton = document.querySelector('.header-library-button-watched');
  if (watchedButton) {
    watchedButton.addEventListener('click', () => {
      // const movieId = watchedButton.getAttribute('data-movie-id');
      // addToWatched(movieId); // Dodaj film do obejrzanych
      // watchedMovies.push(movieId); // Dodaj film do listy obejrzanych filmów
      // localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies)); // Zapisz zmienioną listę w local storage
      // Ponownie wyświetl filmy w galerii po dodaniu nowego filmu
      displayWatchedMovies();
    });
  }
});

// *** *** //

libraryBox.addEventListener('DOMContentLoaded', () => {
  const queueMovies = JSON.parse(localStorage.getItem('queueMovies')) || [];

  const moviesList = document.getElementById('movies-list');

  const movieShow = queueMovies.forEach(movieId => {
    // const movieElement = document.createElement('li');
    // movieElement.textContent = `Movie ID: ${movieId}`;
    // moviesList.appendChild(movieElement);
    return movieId
      .map(({ poster_path, original_title, genre_ids, release_date }) => {
        return `<div class="movie__card" data-id="${movieId}">
          <div class="movie__imgbox">
            <img class="movie__img" src="${
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://cdn.vectorstock.com/i/1000x1000/82/99/no-image-available-like-missing-picture-vector-43938299.webp'
            }"
            alt="${original_title}" loading="lazy"/>
          </div>
          <p class="movie__title">
            <b>${original_title}</b>
          </p>
          <div class="movie__info">
            <p class="movie__genres">
              ${genre_ids.slice(0, 2)}
            </p>
            <p class="movie__year">
              | ${release_date.slice(0, 4)}
            </p>
          </div>
        </div>`;
      })
      .join('');
  });
  moviesList.appendChild(movieShow);
});

