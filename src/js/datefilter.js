import { renderBeers } from './beers';

const selectorMonth = document.querySelector('#month-select');
const btnFilter = document.querySelector('.btn-filter');

btnFilter.addEventListener('click', () => {
  const monthSelected = selectorMonth.value;
  renderBeers(null, monthSelected);
});