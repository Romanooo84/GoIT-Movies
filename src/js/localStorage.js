// const watchedBtn = document.querySelectorAll('#watched-btn');
// const queuedBtn = document.querySelectorAll('#queue-button');

// Funkcja do event listenera:
const addToWatched = event => {
  // Pobieranie id filmu:
  const movieId = event.target.getAttribute('data-movie-id');

  // Sprawdza czy przegladarka obsluguje local storage (to wymyslil chat gpt :D)
  if (typeof Storage !== 'undefined') {
    const moviesInStorage = localStorage.getItem('movies');
    let movies = [];

    // Jeśli już istnieją filmy w local storage to je pobiera
    if (moviesInStorage) {
      movies = JSON.parse(moviesInStorage);
    }

    // Dodaje nowy film do tej listy co juz jest
    movies.push({ id: movieId });

    // Zapisuje liste filmow w local
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

// // Funkcja do event listenera:
// const addToWatched = event => {
//   // Pobieranie id filmu:
//   const movieId = event.target.getAttribute('data-movie-id');

//   // Sprawdza czy przeglądarka obsluguje local storage
//   if (typeof Storage !== 'undefined') {
//     const moviesInStorage = localStorage.getItem('movies');
//     let movies = [];

//     // Jeśli już istnieją filmy w local storage to je pobiera
//     if (moviesInStorage) {
//       movies = JSON.parse(moviesInStorage);
//     }

//     // Dodaje nowy film do tej listy co już jest
//     movies.push({ id: movieId });

//     // Zapisuje listę filmów w local storage
//     localStorage.setItem('movies', JSON.stringify(movies));

//     alert('Film został dodany do listy oglądanych!');
//   } else {
//     alert('Twoja przeglądarka nie obsługuje local storage.');
//   }
// };

// document.addEventListener('click', () => {
//   const watchedButton = document.querySelector('#watched-btn');
//   watchedButton.addEventListener('click', () => {
//     const moviesInStorage = localStorage.getItem('movies');
//     const moviesList = document.getElementById('movies-list');

//     // Jeśli istnieją filmy w local storage
//     if (moviesInStorage) {
//       const movies = JSON.parse(moviesInStorage);

//       // Tworzenie markupu karty filmu za pomocą metody .map
//       const moviesMarkup = movies
//         .map(movie => {
//           return `<div class="movie-card" data-movie-id="${movie.id}">Movie ID: ${movie.id}</div>`;
//         })
//         .join('');

//       // Dodawanie markupu na stronę
//       moviesList.innerHTML = moviesMarkup;
//     } else {
//       moviesList.innerHTML = '<p>No watched movies yet.</p>';
//     }
//   });
// });
