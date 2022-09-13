import getRefs from './refs';
const refs = getRefs();
// створення одного div для знайденої країни
function createCountry(country) {
  const markup = country
    .map(({ name, capital, population, flags, languages }) => {
      let nameOFLanguage = languages.map(elem => elem.name);
      return `
     <div class="country">
  <img src="${flags.svg}" alt="${name}-flag" width="100">
  <p class="country-name">${name}</p>
  </div>
  <ul class="country-list">
    <li class="country-list__item">Capital: <span class="country-list__value">${capital}</span></li>
     <li class="country-list__item">Population: <span class="country-list__value">${population}</span></li>
      <li class="country-list__item">Languages: <span class="country-list__value">${nameOFLanguage}</span></li>
  </ul>`;
    })
    .join('');
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

// створення списку країн, які відповідають пошуку
function createListOfCountry(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
        <div class="countries"><img src="${flags.svg}" alt="${name}" width="50"><p class="countries-name">${name}</p></div>`;
    })
    .join('');
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

// очищення списку

function resetList() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

export { createCountry, createListOfCountry, resetList };
