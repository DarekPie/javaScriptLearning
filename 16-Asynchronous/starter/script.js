'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getCountryData = function(country) {



  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

  // Zmienne do wyłuskania nazwy obiektu
    let shortLang = Object.keys(data.languages)[0].toLocaleLowerCase();
    let currObjName = Object.keys(data.currencies)[0];
    
    const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.translations.pol.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population /1000000).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[shortLang]}</p>
        <p class="country__row"><span>💰</span>${data.currencies[currObjName].name}</p>
      </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1 ;


  })
};

// getCountryData('poland');
// getCountryData('USA');
// getCountryData('france');
*/

const renderCountry = function(data, className ='') {

  // Zmienne do wyłuskania nazwy obiektu
  let shortLang = Object.keys(data.languages)[0].toLocaleLowerCase();
  let currObjName = Object.keys(data.currencies)[0];

  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.translations.pol.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population /1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[shortLang]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[currObjName].name}</p>
    </div>
  </article>
  `;
  
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1 ;
}

const getCountryAndNeighbour = function(country) {  
  // AJAX cll cantry 1
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if(!neighbour) return;

      // AJAX cll cantry 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function(){
      const date2 = JSON.parse(this.responseText);
// Tworzy sie obiekt! Nalezy ogarnac pierwszy element!      
      console.log(date2[0]);
      renderCountry(date2[0], 'neighbour');
    });
  });
}

// getCountryAndNeighbour('poland');
getCountryAndNeighbour('USA');

setTimeout(() => {
  console.log('1 second passed');
}, 1000)