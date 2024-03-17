import Notiflix from 'notiflix';
import { genresId } from './genres';
const searchForm = document.querySelector('.header-home-form');
const moviesContainer = document.querySelector('.movie__list');
let page = 1;
const headerAlert = document.querySelector('.header-home-item');
headerAlert.style.opacity = '0';

const prevPage = document.querySelector('#prevQuery');
const nextPage = document.querySelector('#nextQuery');

const paginatorPopular = document.querySelector('.paginatorPopular');
const paginatorQuery = document.querySelector('.paginatorQuery');
const ulTag = document.querySelector('.paginator-ulq');

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
  prevPage.style.display = 'none';
  nextPage.style.display = 'none';
  paginatorQuery.style.display = 'flex';
  paginatorPopular.style.display = 'none';
  paginator(movies.totalPages, page);

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
                  : 'https://media.wired.com/photos/59326d5344db296121d6aee9/master/w_2240,c_limit/8552.gif'
              }" alt="${original_title}" />
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
    const movies = await fetchKeyMovies(querySearch, page + 1);
    if (movies.totalPages >= page + 1) {
      page++;
      const moviesMarkup = renderKeyMovies(movies);
      moviesContainer.innerHTML = moviesMarkup;
    } else {
      Notiflix.Notify.info('You have reached the end of the search results.');
    }
  } catch (error) {
    console.error('Error fetching popular movies:', error);
  }
});

prevPage.addEventListener('click', async e => {
  try {
    if (page > 1) {
      const movies = await fetchKeyMovies(querySearch, page - 1);
      if (movies.totalPages >= page - 1) {
        page--;
        const moviesMarkup = renderKeyMovies(movies);
        moviesContainer.innerHTML = moviesMarkup;
      }
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
  //   liTag += `<li class="numb" onclick="goToPageQ(1)"><span>1</span></li>`;
  //   if (page > 3) {
  //     liTag += `<li class="dots"><span>...</span></li>`;
  //   }
  // }

  if (page > 3 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    liTag += `<li class="numb" onclick="goToPageQ(1)"><span>1</span></li>`;
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
    liTag += `<li class="numb ${activeLi}" onclick="goToPageQ(${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 2 && !(window.innerWidth >= 320 && window.innerWidth <= 767)) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="goToPageQ(${totalPages})"><span>${totalPages}</span></li>`;
  }

  // if (page < totalPages - 2) {
  //   if (page < totalPages - 2) {
  //     liTag += `<li class="dots"><span>...</span></li>`;
  //   }
  //   liTag += `<li class="numb" onclick="goToPageQ(${totalPages})"><span>${totalPages}</span></li>`;
  // }

  if (page < totalPages) {
    nextPage.style.display = 'block';
  }
  if (totalPages === 1) {
    paginatorQuery.style.display = 'none';
  }
  ulTag.innerHTML = liTag;
}

window.goToPageQ = function (number) {
  page = number;
  fetchKeyMovies(querySearch, number)
    .then(movies => {
      renderKeyMovies(movies);
      moviesContainer.innerHTML = renderKeyMovies(movies);
    })
    .catch(error => {
      console.error('Error fetching popular movies:', error);
    });
};

// nextPage.addEventListener('click', async e => {
//   try {
//     page++;
//     const movies = await fetchKeyMovies(querySearch, page);
//     if (movies.totalPages >= page) {
//       // currPage.textContent = page;
//       const moviesMarkup = renderKeyMovies(movies);
//       moviesContainer.innerHTML = moviesMarkup;
//     } else {
//       page--;
//       Notiflix.Notify.info('You have reached the end of the search results.');
//     }
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//   }
// });

// prevPage.addEventListener('click', async e => {
//   try {
//     if (page > 1) {
//       // currPage.textContent = --page;
//       const movies = await fetchKeyMovies(querySearch, page);
//       const moviesMarkup = renderKeyMovies(movies);
//       moviesContainer.innerHTML = moviesMarkup;
//     }
//   } catch (error) {
//     console.error('Error fetching popular movies:', error);
//   }
// });
