import { fetchMoviesByID, fetchPopularMovies } from './fetchMovies';

const videoSection = document.querySelector('.movie__list');
const prevPage = document.querySelector('#prevPopular');
const nextPage = document.querySelector('#nextPopular');
// const currPage = document.querySelector('#current');
const paginationQuery = document.querySelector('.pagination_for_query');
const paginationPopular = document.querySelector('.pagination');

const paginatorPopular = document.querySelector('.paginatorPopular');
const paginatorQuery = document.querySelector('.paginatorQuery');

const modalWindow = document.querySelector('.modal-window');
const innerModalContent = document.querySelector('.inner-modal-content');
const modalOverlay = document.querySelector('.modal-overlay');

const ulTag = document.querySelector('.paginator-ul');
console.log(ulTag);

let pageNumber = 1;

const closeModal = () => {
  modalWindow.classList.add('hidden');
  modalOverlay.classList.remove('active');
};

fetchPopularMovies(pageNumber)
  .then(movies => renderMovies(movies))
  .catch(err => console.error(err));

const renderMovies = async movies => {
  // console.log(pageNumber);
  prevPage.style.display = 'none';
  nextPage.style.display = 'none';
  paginator(100, pageNumber);
  paginatorQuery.style.display = 'none';
  paginatorPopular.style.display = 'flex';
  try {
    const moviePromises = movies.results.map(async movie => {
      const movieDetails = await fetchMoviesByID(movie.id);

      const genres = movieDetails.genres.map(genre => genre.name).join(', ');

      return `<li class="movie-card">
        <div class="card">
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
        </div>
      </li>`;
    });

    const movieHTMLs = await Promise.all(moviePromises);
    const moviesHTMLString = movieHTMLs.join('');
    videoSection.innerHTML = moviesHTMLString;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};

videoSection.addEventListener('click', async e => {
  e.preventDefault();
  const target = e.target.closest('a');
  if (target) {
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
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

nextPage.addEventListener('click', async () => {
  try {
    pageNumber++;
    const movies = await fetchPopularMovies(pageNumber);
    videoSection.innerHTML = '';
    renderMovies(movies);
    // currPage.innerHTML = pageNumber;
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

      // currPage.innerHTML = pageNumber;
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

function paginator(totalPages, page) {
  let liTag = ``;
  let activeLi;
  let beforePages = page - 2;
  let afterPages = page + 2;

  if (page > 1) {
    prevPage.style.display = 'block';
  }

  // if (page > 3) {
  //   liTag += `<li class="numb" onclick="goToPage(1)"><span>1</span></li>`;
  //   if (page > 3) {
  //     liTag += `<li class="dots"><span>...</span></li>`;
  //   }
  // }

  if (page > 3 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    liTag += `<li class="numb" onclick="goToPage(1)"><span>1</span></li>`;
    liTag += `<li class="dots"><span>...</span></li>`;
  }

  if (beforePages < 1) {
    beforePages = 1;
  }
  if (afterPages > totalPages) {
    afterPages = totalPages;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (page === pageLength) {
      activeLi = 'active';
    } else {
      activeLi = ``;
    }
    // liTag += `<li class="numb ${activeLi}"><span>${pageLength}</span></li>`;

    liTag += `<li class="numb ${activeLi}" onclick="goToPage(${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 2 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="goToPage(${totalPages})"><span>${totalPages}</span></li>`;
  }

  // if (page < totalPages - 2) {
  //   if (page < totalPages - 2) {
  //     liTag += `<li class="dots"><span>...</span></li>`;
  //   }
  //   liTag += `<li class="numb" onclick="goToPage(${totalPages})"><span>${totalPages}</span></li>`;
  // }

  if (page < totalPages) {
    nextPage.style.display = 'block';
  }
  ulTag.innerHTML = liTag;
}

window.goToPage = function (number) {
  pageNumber = number;
  fetchPopularMovies(number)
    .then(movies => {
      renderMovies(movies);
      // currPage.innerHTML = pageNumber;
    })
    .catch(error => {
      console.error('Error fetching popular movies:', error);
    });
};

// const movies = await fetchPopularMovies(pageNumber);
// renderMovies(movies);
// currPage.innerHTML = pageNumber;
// videoSection.innerHTML = '';
// renderMovies(movies);

// const renderMovies = movies => {
//   console.log(movies);

//   movies.results.forEach(async movie => {
//     try {
//       const movieDetails = await fetchMoviesByID(movie.id);
//       const genres = movieDetails.genres.map(genre => genre.name).join(', ');

//       const html = `<li class="movie-card">
//         <div class="card">
//           <a href="${movie.poster_path}" data-movie-id="${movie.id}">
//             <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
//           </a>
//           <div class="info">
//             <p class="info-item">
//               <b> ${movie.title}</b>
//             </p>
//             <div class="details">
//               <p class="info-item">
//                 <b>${genres} | ${movie.release_date.slice(0, 4)}</b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </li>`;

//       videoSection.insertAdjacentHTML('afterbegin', html);
//     } catch (error) {
//       console.error('Error fetching movie details:', error);
//     }
//   });
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
