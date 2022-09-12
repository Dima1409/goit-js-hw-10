import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import getRefs from './js/refs';
const refs = getRefs();
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
  resetList();
  if (!value) {
    return;
  }
  fetchCountries(value).then(searchSuccess).catch(searchError);
}

function searchSuccess(result) {
  if (result.length === 1) {
    return createCountry(result);
  } else if (result.length < 10) {
    return createListOfCountry(result);
  } else if (result.length > 10) {
    return manyMatchesFound();
  }
}

function searchError() {
  Notify.failure('Oops, there is no country with that name');
}
function manyMatchesFound() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
