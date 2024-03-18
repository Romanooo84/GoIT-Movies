import { fetchMoviesByID } from './fetchMovies';

const modalWindow = document.querySelector('.modal-window');
const innerModalContent = document.querySelector('.inner-modal-content');
const modalOverlay = document.querySelector('.modal-overlay');

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

const openModal = async movieId => {
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
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${movieId}" type="button" class="add-to-watched"  id="watched-btn">ADD TO WATCHED</button>
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${movieId}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>
    `;
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

export { openModal };
