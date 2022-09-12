import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './js/refs';
import {
  createCountry,
  createListOfCountry,
  resetList,
} from './js/randerCoutries';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

refs.inputSearch.addEventListener(
  'input',
  debounce(searchName, DEBOUNCE_DELAY)
);

function searchName(event) {
  const value = event.target.value;
  if (!value) {
    return;
  }
  fetchCountries(value).then(searchSuccess).catch(searchError);
}

function searchSuccess(result) {
  if (result.length > 10) {
    return manyMatchesFound();
  } else if (result.length >= 2 && result.length < 10) {
    return createListOfCountry(result);
  }
}

function searchError() {
  Notify.failure('Oops, there is no country with that name');
}
function manyMatchesFound() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
