import { genresId } from './genres';
import Notiflix from 'notiflix';
const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');
let page = 1;
const headerAlert = document.querySelector('.header-home-item');
headerAlert.style.opacity = '0';

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
  console.log('Movies', movies);

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
    })
    .join('');
};

const searchingInput = async event => {
  event.preventDefault();
  const querySearch = event.target.elements.searchQuery.value.trim();
  console.log(querySearch);

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
