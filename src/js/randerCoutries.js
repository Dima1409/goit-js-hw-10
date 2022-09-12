import { refs } from './refs';

// створення одного div для знайденої країни
function createCountry(country) {
  const markup = country
    .map(({ name, capital, population, flags, languages }) => {
      return `
      <div class='country-item'><a class='country-item__link href='#'><img src='${flags.svg}' alt='${name}'></a><p>${name}</p></div>

      <ul class='country-list'>
      <li class='country-item__info'>Capital: ${capital}</li>
      <li class='country-item__info'>Population: ${population}</li>
      <li class='country-item__info'>Languages: ${languages}</li>
      </ul>`;
    })
    .join('');

  refs.countryInfo.innerHTML(markup);
}

// створення списку країн, які відповідають пошуку
function createListOfCountry(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
        <div><img src="${flags.svg} alt="${name}"><p>${name}</p></div>`;
    })
    .join('');
  refs.countryList.innerHTML(markup);
}

// очищення списку

function resetList() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}

export { createCountry, createListOfCountry, resetList };
