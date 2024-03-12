// ** na postawie pull requesta Sebastiana, który dodaje filmy do kolejki i obejrzane w local storage ** //

const libraryBox = document.querySelector('.main-library-home');

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
