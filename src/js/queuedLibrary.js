import { fetchMoviesByID } from './fetchMovies';
const moviesListW = document.querySelector('.library-watched');

const showQueued = async () => {
  const moviesInStorageQ = localStorage.getItem('queue');
  const moviesListQ = document.querySelector('.library-queue');
  moviesListW.style.display = 'none';
  moviesListQ.style.display = 'flex';

  if (moviesInStorageQ) {
    const queue = JSON.parse(moviesInStorageQ);

    // Tworzenie markupu dla każdego filmu
    Promise.all(queue.map(movie => fetchMoviesByID(movie.id)))
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

        moviesListQ.innerHTML = moviesMarkup;
      })
      .catch(error => console.error(error));
  } else {
    moviesListQ.innerHTML = '<p>Brak obejrzanych filmów.</p>';
  }
};

const showQueuedButton = document.querySelector('.header-library-button-queue');
showQueuedButton.addEventListener('click', showQueued);
