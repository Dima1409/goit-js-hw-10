import getRefs from './refs';
const refs = getRefs();
// створення одного div для знайденої країни
function createCountry(country) {
  const markup = country
    .map(({ name, capital, population, flags, languages }) => {
      return `
     <div>
  <a href="#"><img src="${flags.svg}" alt="${name}" width="200"></a>
  <p>${name}</p>
  <ul>
    <li>Capital: ${capital}</li>
     <li>Population: ${population}</li>
      <li>Languages: ${languages}</li>
  </ul>
</div>`;
    })
    .join('');
  console.log(markup);
  refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

// створення списку країн, які відповідають пошуку
function createListOfCountry(countries) {
  const markup = countries
    .map(({ flags, name }) => {
      return `
        <div><img src="${flags.svg}" alt="${name}" width="60"><p>${name}</p></div>`;
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
