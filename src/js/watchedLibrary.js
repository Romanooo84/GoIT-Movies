import { fetchMoviesByID } from './fetchMovies';
const moviesListQ = document.querySelector('.library-queue');

const modalWindow = document.querySelector('.modal-window');
const innerModalContent = document.querySelector('.inner-modal-content');
const modalOverlay = document.querySelector('.modal-overlay');
const moviesListW = document.querySelector('.library-watched');

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

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
    moviesListW.innerHTML = '<p>Brak obejrzanych filmów.</p>';
  }
};

const showWatchedButton = document.querySelector('.header-library-button-watched');
showWatchedButton.addEventListener('click', showWatched);

const handleWatchedItemClick = async e => {
  e.preventDefault();

  const target = e.target.closest('a');
  const movieId = target.dataset.movieId;

  try {
    const movieDetails = await fetchMoviesByID(movieId);
    const modalContent = `
      <div>
        <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${
          movieDetails.poster_path
        }" alt="${movieDetails.title}" />
      </div>
      <div class="modal-description">
        <h1>${movieDetails.title}</h1>
        <div class="modal-rates">
          <div class="modal-rates__titles">
            <p>Vote/Votes</p>
            <p>Popularity</p>
            <p>Original Title</p>
            <p>Genre</p>
          </div>
          <div class="modal-rates__results">
            <p><span class="modal-rates__vote">${
              movieDetails.vote_average
            }</span> / <span class="modal-rates__allvotes">${movieDetails.vote_count}</span></p>
            <p>${movieDetails.popularity}</p>
            <p>${movieDetails.original_title}</p>
            <p>${movieDetails.genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <div class="modal-about">
          <dt>ABOUT</dt>
          <dd>${movieDetails.overview}</dd>
        </div>
        <div class="modal-button-window">
          <button class="button-standard modal-button" data-movie-id="${movieId}" type="button" class="add-to-watched" id="watched-btn">REMOVE FROM WATCHED</button>
          <button class="button-standard modal-button modal-button__queue" data-movie-id="${movieId}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>`;

    innerModalContent.innerHTML = modalContent;
    modalWindow.classList.remove('hidden');
    modalOverlay.classList.add('active');
    modalOverlay.addEventListener('click', () => {
      closeModal();
    });

    const closeModalButton = document.querySelector('#close-modal');
    closeModalButton.addEventListener('click', () => {
      closeModal();
    });
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};

moviesListW.addEventListener('click', handleWatchedItemClick);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
