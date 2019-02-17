import { renderBeers } from './beers';

const formHeader = document.querySelector('#beer-search__form');
const inputSearch = document.querySelector('.beer-search__input');

formHeader.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputSearch.value != '') renderBeers(inputSearch.value);
});
