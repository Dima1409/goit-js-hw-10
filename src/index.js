import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const debounce = require('lodash.debounce');
const refs = {
  inputSearch: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

console.log(fetchCountries('Ukraine'));
