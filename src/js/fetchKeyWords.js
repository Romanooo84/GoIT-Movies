import Notiflix from 'notiflix';
const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');
let page = 1;
let genre;

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

// const fetchGenres = async () => {
//   const API_KEY = 'e7c930d9ee21da94f8fc3257d387eced';
//   const searchParamsGenres = new URLSearchParams({
//     api_key: API_KEY,
//   });

//   const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${searchParamsGenres}`);
//   const genresNames = await genres.json();
//   console.log('genresnames', genresNames);
//   return genresNames;
// };
// console.log(fetchGenres());

const renderKeyMovies = movies => {
  console.log('Movies', movies);

  return movies
    .map(({ id, poster_path, original_title, genre_ids, release_date }) => {
      return `<li class="movie-card">
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
        <b>${genre_ids.slice(0, 2)}</b>
      </p>
        <p class="info-item">
          <b>| ${release_date.slice(0, 4)}</b>
        </p>
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
        Notiflix.Notify.failure(
          'Sorry, there are no movies matching your search query. Please try again.',
        );
      } else {
        const moviesMarkup = renderKeyMovies(movies);
        moviesContainer.innerHTML = moviesMarkup;
      }
    })

    .catch(error => console.log(error));
  searchForm.reset();
};
searchForm.addEventListener('submit', searchingInput);
