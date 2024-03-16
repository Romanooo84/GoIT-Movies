import { fetchMoviesByID } from './fetchMovies';
const moviesListQ = document.querySelector('.library-queue');

const showWatched = async () => {
  const moviesInStorageW = localStorage.getItem('watched');
  const moviesListW = document.querySelector('.library-watched');
  moviesListQ.style.display = 'none';
  moviesListW.style.display = 'flex';
  if (moviesInStorageW) {
    const watched = JSON.parse(moviesInStorageW);

    // Tworzenie markupu dla każdego filmu
    Promise.all(watched.map(movie => fetchMoviesByID(movie.id)))
      .then(movieDetails => {
        const moviesMarkup = movieDetails
          .map(movie => {
            const genres = movie.genres.map(genre => genre.name).join(', ');
            return `<li class="movie-card">
              <div class="card">
                <a href="${movie.poster_path}" data-movie-id="${movie.id}">
                  <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${
              movie.title
            }"/>
                </a>
                <div class="info">
                  <p class="info-item">
                    <b>${movie.title}</b>
                  </p>
                  <div class="details">
                    <p class="info-item">
                      <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
                    </p>
                  </div>
                </div>
              </div>
            </li>`;
          })
          .join('');

        moviesListW.innerHTML = moviesMarkup;
      })
      .catch(error => console.error(error));
  } else {
    moviesListW.innerHTML = `<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>`;
  }
};

const showWatchedButton = document.querySelector('.header-library-button-watched');
showWatchedButton.addEventListener('click', showWatched);
