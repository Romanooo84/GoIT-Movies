import { genresId } from './genres';
import Notiflix from 'notiflix';

const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');

const prevPage = document.querySelector('#prevQuery');
const nextPage = document.querySelector('#nextQuery');
let currPage = document.querySelector('#currentQuery');
const paginationPopular = document.querySelector('.pagination');
const paginationQuery = document.querySelector('.pagination_for_query');

let page = 1;
//<<<<<<< karol
let genre;
let querySearch;
//=======
const headerAlert = document.querySelector('.header-home-item');
headerAlert.style.opacity = '0';
//>>>>>>> main

const fetchKeyMovies = async (querySearch, page) => {
  const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';

  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: querySearch,
    page: page,
  });

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`);
  const responseKeyMovies = await response.json();
  return responseKeyMovies.results;
};

const renderKeyMovies = movies => {
  // console.log('Movies', movies);
  paginationPopular.style.display = 'none';
  paginationQuery.style.display = 'flex';
  return movies
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      let filmGenreId = '';
      if (genre_ids && genre_ids.length > 0) {
        filmGenreId = genresId
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .join(', ');
      } else {
        filmGenreId = 'Genre is not available';
      }
      return `<li class="movie-card">
//<<<<<<< karol
      <a href="${poster_path}" data-movie-id="${id}">
        <img src="${
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : 'https://cdn.vectorstock.com/i/1000x1000/82/99/no-image-available-like-missing-picture-vector-43938299.webp'
        }" alt="${original_title}"/>
      </a>
      <div class="info">
        <p class="info-item">
          <b> ${original_title}</b>
        </p>
        <div class="details">
        <p class="info-item">
        <b>${genre_ids ? genre_ids.slice(0, 2) : ''}</b>
      </p>
        <p class="info-item">
        <b>| ${release_date ? release_date.slice(0, 4) : ''}</b>

        </p>
        </div>
      </div>
    </li>`;
//=======
      <div class="card">
            <a href="${poster_path}" data-movie-id="${id}">
              <img src="${
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg'
              }" alt="${original_title}"/>
            </a>
            <div class="info">
              <p class="info-item">
                <b> ${original_title}</b>
              </p>
              <div class="details">
              <p class="info-item">
              <b>${filmGenreId} | ${release_date.slice(0, 4)}</b>
              </p>
              </div>
            </div>
            </div>
          </li>`;
//>>>>>>> main
    })
    .join('');
};
//<b>| ${release_date.slice(0, 4)}</b>
//<b>${genre_ids.slice(0, 2)}</b>
const searchingInput = async event => {
  event.preventDefault();
  querySearch = event.target.elements.searchQuery.value.trim();
  // console.log(querySearch);
  page = 1;
  currPage.textContent = page;
  await fetchKeyMovies(querySearch, page)
    // .then(movies => console.log(movies))
    .then(movies => {
      if (querySearch === '' || movies.length <= 0) {
        // Notiflix.Notify.failure(
        //   'Sorry, there are no movies matching your search query. Please try again.',
        // );
        headerAlert.style.opacity = '1';
      } else {
        const moviesMarkup = renderKeyMovies(movies);
        moviesContainer.innerHTML = moviesMarkup;
      }
    })

    .catch(error => console.log(error));

  searchForm.reset();
};

searchForm.addEventListener('submit', searchingInput);

nextPage.addEventListener('click', async e => {
  try {
    currPage.textContent = ++page;
    const movies = await fetchKeyMovies(querySearch, page);
    const moviesMarkup = renderKeyMovies(movies);
    moviesContainer.innerHTML = moviesMarkup;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

prevPage.addEventListener('click', async e => {
  try {
    if (page > 1) {
      currPage.textContent = --page;
      const movies = await fetchKeyMovies(querySearch, page);
      const moviesMarkup = renderKeyMovies(movies);
      moviesContainer.innerHTML = moviesMarkup;
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});
