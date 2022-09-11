const BASE_URL = 'https://restcountries.com/v2/name';
const settingsSearch = '?fields=name,capital,population,flags,languages';

function fetchCountries(name) {
  return fetch(`${BASE_URL}/${name}${settingsSearch}`)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export { fetchCountries };
