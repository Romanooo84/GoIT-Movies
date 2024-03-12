import { fetchMoviesByID, fetchPopularMovies } from './fetchMovies';

const videoSection = document.querySelector('.movie__list');
const prevPage = document.querySelector('#prev');
const nextPage = document.querySelector('#next');
const currPage = document.querySelector('#current');

const modalWindow = document.querySelector('.modal-window');
const modalOverlay = document.querySelector('.modal-overlay');

let pageNumber = 1;

fetchPopularMovies(pageNumber)
  .then(movies => renderMovies(movies))
  .catch(err => console.error(err));

const renderMovies = movies => {
  const promises = movies.results.map(movie => fetchMoviesByID(movie.id));

  Promise.all(promises)
    .then(movieDetails => {
      movies.results.forEach((movie, index) => {
        const movieDetail = movieDetails[index];
        const genres = movieDetail.genres.map(genre => genre.name).join(', ');

        const html = `<li class="movie-card">
            <a href="${movie.poster_path}" data-movie-id="${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
            </a>
            <div class="info">
              <p class="info-item">
                <b> ${movie.title}</b>
              </p>
                <div class="details">
              <p class="info-item">
                <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
              </p>
              </div>
            </div>
          </li>`;

        videoSection.insertAdjacentHTML('afterbegin', html);
      });
    })
    .catch(error => console.error('Error fetching movie details:', error));
};

videoSection.addEventListener('click', async e => {
  e.preventDefault();
  const target = e.target.closest('a');
  const movieId = target.dataset.movieId;
  console.log('Clicked on movie with ID:', movieId);

  try {
    const movieDetails = await fetchMoviesByID(movieId);
    console.log(movieDetails);
    const modalContent = `
        <div>
          <div>
            <button class="modal-window__close" id="close-modal">

              <svg width="30" height="30">
                <use href="../images/icons.svg#icon-close"></use>
              </svg>
            </button>
            <div>
              <img class="modal-window__image" src="https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}" alt="${
      movieDetails.title
    }" />
            </div>
            <div class="modal-window__description">
              <h1>${movieDetails.title}</h1>
              <div class="modal-window__rates">
                <div class="modal-window__rates--titles">
                  <p>Vote/Votes</p>
                  <p>Popularity</p>
                  <p>Original Title</p>
                  <p>Genre</p>
                </div>
                <div class="modal-window__rates--results">
                  <p>${movieDetails.vote_average} / ${movieDetails.vote_count}</p>
                  <p>${movieDetails.popularity}</p>
                  <p>${movieDetails.original_title}</p>
                  <p>${movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                </div>
              </div>
              <div>
              <dt>ABOUT</dt>
              <dd>${movieDetails.overview}</dd>
              </div>
              <div class="modal-buttons">
              <button data-movie-id="${movieId}" type="button" class="add-to-watched" id="watched-btn">add to watched</button>
              <button data-movie-id="${movieId}" type="button" class="add-to-queue" id="queue-button">add to queue</button>
              </div>
            </div>
          </div>
        </div>
      `;
    modalWindow.innerHTML = modalContent;
    modalWindow.classList.remove('hidden');

    const closeModal = document.querySelector('#close-modal');
    closeModal.addEventListener('click', () => {
      modalWindow.classList.add('hidden');
      modalOverlay.classList.remove('active');
    });
    modalOverlay.classList.add('active');
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
});

modalOverlay.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

nextPage.addEventListener('click', async () => {
  try {
    pageNumber++;
    const movies = await fetchPopularMovies(pageNumber);
    videoSection.innerHTML = '';
    renderMovies(movies);
    currPage.innerHTML = pageNumber;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

prevPage.addEventListener('click', async () => {
  try {
    if (pageNumber > 1) {
      pageNumber--;
      const movies = await fetchPopularMovies(pageNumber);
      videoSection.innerHTML = '';
      renderMovies(movies);

      currPage.innerHTML = pageNumber;
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

// const renderMovies = movies => {
//   console.log(movies);

//   movies.results.forEach(async movie => {
//     try {
//       const movieDetails = await fetchMoviesByID(movie.id);
//       const genres = movieDetails.genres.map(genre => genre.name).join(', ');

//       const html = `<li class="movie-card">
//         <a href="${movie.poster_path}" data-movie-id="${movie.id}">
//           <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
//         </a>
//         <div class="info">
//           <p class="info-item">
//             <b> ${movie.title}</b>
//           </p>
//             <div class="details">
//           <p class="info-item">
//             <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
//           </p>
//           </div>
//         </div>
//       </li>`;

//       videoSection.insertAdjacentHTML('afterbegin', html);
//     } catch (error) {
//       console.error('Error fetching movie details:', error);
//     }
//   });
//   loader.style.display = 'block';
// };

// nextPage.addEventListener('click', async () => {
//   try {
//     pageNumber++;
//     const movies = await fetchPopularMovies(pageNumber);
//     renderMovies(movies);

//     currPage.innerHTML = `${pageNumber > 3 ? pageNumber - 3 : ''} ${
//       pageNumber > 2 ? pageNumber - 2 : ''
//     } ${pageNumber > 1 ? pageNumber - 1 : ''} ${pageNumber} ${pageNumber + 1} ${pageNumber + 2} ${
//       pageNumber + 3
//     }`;
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//   }
// });

// fetchMoviesByID(27)
//   .then(movie => {
//     console.log(movie.genres);
//     movie.genres.map(val => console.log(val.id + ' ' + val.name));
//   })
//   .catch(err => console.error(err));

// const renderMovies = movies => {
//   // console.log(movies);
//   movies.results.map(val => {
//     console.log(val.genre_ids);
//     const genre_id = val.genre_ids;

//     const html = `<li class="movie-card">
//     <a href="${val.poster_path}">
//     <img src="https://image.tmdb.org/t/p/w500/${val.poster_path}" alt="${val.title}"/></a>
//     <div class="info">
//       <p class="info-item">
//        <b> ${val.title}</b>
//       </p>
//       <p class="info-item">
//        <b> ${val.release_date.slice(0, 4)}</b>
//       </p>
//       <p class="info-item">
//        <b> gatunki</b>
//       </p>
//     </div>
//   </li>
//   `;
//     videoSection.insertAdjacentHTML('afterbegin', html);
//   });
// };
