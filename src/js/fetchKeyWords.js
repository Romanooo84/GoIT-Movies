import Notiflix from 'notiflix';
import { genresId } from './genres';
const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');
let page = 1;
const headerAlert = document.querySelector('.header-home-item');
headerAlert.style.opacity = '0';

const prevPage = document.querySelector('#prevQuery');
const nextPage = document.querySelector('#nextQuery');
let currPage = document.querySelector('#currentQuery');
const paginationPopular = document.querySelector('.pagination');
const paginationQuery = document.querySelector('.pagination_for_query');

let genre;
let querySearch;

const fetchKeyMovies = async (querySearch, page) => {
  const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';

  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: querySearch,
    page: page,
  });

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`);
  const responseKeyMovies = await response.json();
  // console.log(responseKeyMovies.total_pages);
  // return responseKeyMovies.results;
  return {
    totalPages: responseKeyMovies.total_pages,
    results: responseKeyMovies.results,
  };
};

const renderKeyMovies = movies => {
  console.log('Movies', movies.results);
  paginationPopular.style.display = 'none';
  paginationQuery.style.display = 'flex';

  return movies.results
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
              <b>${genre_ids ? genre_ids.slice(0, 2) : ''} | ${
        release_date ? release_date.slice(0, 4) : ''
      }</b>
              </p>
              </div>
            </div>
            </div>
          </li>`;
    })
    .join('');
};

//<b>${filmGenreId} | ${release_date.slice(0, 4)}</b>

const searchingInput = async event => {
  event.preventDefault();
  querySearch = event.target.elements.searchQuery.value.trim();
  // console.log(querySearch);
  page = 1;
  currPage.textContent = page;

  await fetchKeyMovies(querySearch, page)
    .then(movies => {
      if (querySearch === '' || movies.results.length <= 0) {
        headerAlert.style.opacity = '1';
      } else {
        const moviesMarkup = renderKeyMovies(movies);
        moviesContainer.innerHTML = moviesMarkup;
        headerAlert.style.opacity = '0';
      }
    })

    .catch(error => console.log(error));
  searchForm.reset();
};
searchForm.addEventListener('submit', searchingInput);

nextPage.addEventListener('click', async e => {
  try {
    page++;
    const movies = await fetchKeyMovies(querySearch, page);
    if (movies.totalPages >= page) {
      currPage.textContent = page;
      const moviesMarkup = renderKeyMovies(movies);
      moviesContainer.innerHTML = moviesMarkup;
    } else {
      page--;
      Notiflix.Notify.info('You have reached the end of the search results.');
    }
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

// nextPage.addEventListener('click', async e => {
//   try {
//     const movies = await fetchKeyMovies(querySearch, page);
//     if (movies.length > 0) {
//       currPage.textContent = ++page;
//       const moviesMarkup = renderKeyMovies(movies);
//       moviesContainer.innerHTML = moviesMarkup;
//     }
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//   }
// });
