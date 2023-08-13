'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};


const getJSON = function(url, errorMsg ='Something went wrong') {
  return fetch(url).then((response) => { 
    console.log(response);
    if(!response.ok){
      throw new Error(`${errorMsg} Country not found(${response.status})`);
    }
    return response.json(); 
  });
}

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

// const renderCountry = function(data, className ='') {

//   // Zmienne do wyłuskania nazwy obiektu
//   let shortLang = Object.keys(data.languages)[0].toLocaleLowerCase();
//   let currObjName = Object.keys(data.currencies)[0];

//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.translations.pol.official}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population /1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[shortLang]}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[currObjName].name}</p>
//     </div>
//   </article>
//   `;
  
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1 ;
// }
/*
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
      // console.log(date2[0]);
      renderCountry(date2[0], 'neighbour');
    });
  });
}
*/

// getCountryAndNeighbour('poland');
// getCountryAndNeighbour('USA');

// setTimeout(() => {
//   console.log('1 second passed');
// }, 1000)






// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/poland`);
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(function(response){
//       console.log(response);
//       return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//       })
// }
// skorzystalismy z promisa uzywajac funkcji fetch ktora wlasnie zwracam promise. 
//Aby wluskac ten promise uzylismy metody then
//ale aby odczytac 'response' uzyc musielismy metody json ktora tez zwraca promise.
//wiec uzylismy drugi raz funkcji then i dostalimy dopiero wtedy odpowiedz taka jak poprzednio.

//////
// Prostrza medotda
////
/*
const getJSON = function(url, errorMsg ='Something went wrong') {
  return fetch(url).then((response) => { 
    console.log(response);
    if(!response.ok){
      throw new Error(`${errorMsg} Country not found(${response.status})`);
    }
    return response.json(); 
  });

};
*/
// const getCountryData = (country) => {
//   //Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => { 
//       console.log(response);
//       if(!response.ok){
//         throw new Error(`Country not found(${response.status})`);
//       }
//       return response.json(); 
//     })
//       .then((data) => { 
//         renderCountry(data[0]);
//         // .catch(err => alert(err));

//         const neighbour = data[0].borders?.[0];
//         if(!neighbour) return;
//         // Country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       })
//       .then(response => { 
//         console.log(response);

//         if(!response.ok){
//           throw new Error(`Country not found(${response.status})`);
//         }

//         return response.json()})

//         .then(data=>renderCountry(data[0], 'neighbour'))
//           .catch(err => {
//               console.log(`${err} `);
//               renderError(`Smoethin went wrong! ${err}. Try again!`)
//           })
//             .finally(()=> {
//               countriesContainer.style.opacity = 1;
//             });
// };


/*
const getCountryData = (country) => {
  //Country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
      .then((data) => { 
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        if(!neighbour) throw new Error('No neighbour found!');
        // Country 2
        // getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
      })
      .then(data=>renderCountry(data[0], 'neighbour'))
        .catch(err => {
          console.log(`${err} `);
          renderError(`Something went wrong! ${err}. Try again!`)
        })
          .finally(()=> {
            countriesContainer.style.opacity = 1;
          });
};


btn.addEventListener('click', function() {
  // getCountryData('poland');
});

// getCountryData('asdadasd');
getCountryData('Australia');
*/

// Coding Challenge #1
// In this challenge you will build a function 'whereAmI' which renders a country 
// only based on GPS coordinates. For that, you will use a second API to geocode 
// coordinates. So in this challenge, you’ll use an API on your own for the first time �
// Your tasks:
// PART 1

// 1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') 
// and a longitude value ('lng') (these are GPS coordinates, examples are in test 
// data below).

// 2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means 
// to convert coordinates to a meaningful location, like a city and country name. 
// Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call 
// will be done to a URL with this format: 
// https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and 
// promises to get the data. Do not use the 'getJSON' function we created, that 
// is cheating �

// 3. Once you have the data, take a look at it in the console to see all the attributes 
// that you received about the provided location. Then, using this data, log a 
// message like this to the console: “You are in Berlin, Germany”

// 4. Chain a .catch method to the end of the promise chain and log errors to the 
// console

// 5. This API allows you to make only 3 requests per second. If you reload fast, you 
// will get this error with code 403. This is an error with the request. Remember, 
// fetch() does not reject the promise in this case. So create an error to reject 
// the promise yourself, with a meaningful error message


// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant 
// attribute from the geocoding API result, and plug it into the countries API that 
// we have been using.

// 7. Render the country and catch any errors, just like we have done in the last 
// lecture (you can even copy this code, no need to type the same code


// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474
/*
const whereAmI = function(lat, lng){
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(res => { if(!res.ok) throw new Error(`Problem with geocodin ${res.status}`);
      return res.json()
    })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
      })
        .then(response=>{
          if(!response.ok)
            throw new Error(`Country not found (${response.status})`);
          return response.json();
        })
          .then(data => renderCountry(data, 'neighbour'))
            .catch(err => console.error(`${err.message} boom`));
        
}

whereAmI(52.508, 13.381)
whereAmI(19.037, 72.873)
whereAmI(-33.933, 18.474)
*/

/////////////////////////////
//Problem with even  loop and building simpl;e promiess
/*
console.log('Test start');                            //#1 
setTimeout(()=>console.log('0 sec timer'), 0);        //#4 !!!!!!!
Promise.resolve('Resolved promise 1').then(res => console.log(res));  // #3 !!!

//solving problem
Promise.resolve('Resolve promise 2').then(res => {
  for(let i = 0; i < 2000000000; i++ ){

  }
  console.log(res);
})

console.log('Test End');                              //#2 !!!

*/

//////////////////////////
//Simple promies
/*
const lotteryPromiese = new Promise(function(resolve, reject){
  
  console.log('Lotery Draw is happening');
  setTimeout(function(){
    if(Math.random() >= 0.5) {
      resolve('You WIN!');
    }else {
      reject(new Error('You lose!'));
    }
  } , 2000)

});

// lotteryPromiese.then(res => console.log(res)).catch(err=>console.log(err));


// Promissifying setTimout  - rozwiazanie problemu call back f
const wait = function(seconds) {
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1).then(() => { 
  console.log('1 Second passed wait');
  return wait(1);
}).then(() => {
  console.log('2 Second passed wait');
  return wait(1);
}).then(() => {
  console.log('3 Second passed wait');
  return wait(1);
}).then(() => {
  console.log('4 Second passed wait');
  return wait(1);
})

// Refencja - tzn co to rozwiazauje: 

// setTimeout(() => {
//   console.log('1 Second passed setTimeout');
//   setTimeout(() => {
//     console.log('2 Second passed setTimeout');
//     setTimeout(() => {
//       console.log('3 Second passed setTimeout');
//       setTimeout(() => {
//         console.log('4 Second passed setTimeout');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(x=>console.log(x));
Promise.reject(new Error('Problem!')).catch(x=>console.error(x));
*/
/*
// navigator.geolocation.getCurrentPosition(
//   position=>console.log(position),
//   err => console.log(err)
// );


// console.log('Getting posittion');
const getPosition = function() {
  return new Promise(function(resolve, reject){
    // navigator.geolocation.getCurrentPosition(
    //   position=>console.log(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);  // to samo co wyzej!
  });
};
getPosition().then(pos => console.log(pos));

//from Chalange #1
const whereAmI = function(lat, lng){

  getPosition().then(pos=>{
    console.log(pos.coords);
  })

  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then(res => { if(!res.ok) throw new Error(`Problem with geocodin ${res.status}`);
      return res.json()
    })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
        
        return fetch(`https:restcountries.com/v3.1/name/${data.country}`);
      })
        .then(res=>{
          if(!res.ok)
            throw new Error(`Country not found (${res.status})`);
          
          return res.json();
        })
          .then(data => renderCountry(data, 'neighbour'))
            .catch(err => console.error(`${err.message} boom`));
};

btn.addEventListener('click', whereAmI);
*/
/*
/////////////////////////////////////////////////////////////////////////
////////////
Coding Challenge #2
/////////////////////
For this challenge you will actually have to watch the video! Then, build the image 
loading functionality that I just showed you on the screen.
Your tasks:

Tasks are not super-descriptive this time, so that you can figure out some stuff by 
yourself. Pretend you're working on your own �


PART 1
1. Create a function 'createImage' which receives 'imgPath' as an input. 
This function returns a promise which creates a new image (use 
document.createElement('img')) and sets the .src attribute to the 
provided image path

2. When the image is done loading, append it to the DOM element with the 
'images' class, and resolve the promise. The fulfilled value should be the 
image element itself. In case there is an error loading the image (listen for 
the'error' event), reject the promise

3. If this part is too tricky for you, just watch the first part of the solution


PART 2
4. Consume the promise using .then and also add an error handler

5. After the image has loaded, pause execution for 2 seconds using the 'wait'
function we created earlier

6. After the 2 seconds have passed, hide the current image (set display CSS 
property to 'none'), and load a second image (Hint: Use the image element 
returned by the 'createImage' promise to hide the current image. You will 
need a global variable for that �)

7. After the second image has loaded, pause execution for 2 seconds again

8. After the 2 seconds have passed, hide the current image


Test data:n Images i the img folder. Test the error handler by passing a wrong 
image path. Set the network speed to “Fast 3G” in the dev tools Network tab, 
otherwise images load too fas

*/
/*
let currenctImg;
const imgCointeiner = document.querySelector('.images');

const wait = function(seconds){
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function(imgPath) {
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function(){
      imgCointeiner.append(img);
      resolve(img);
    });

    img.addEventListener('error', function(){
      reject(new Error('Image not found'));
    });
  });
};

createImage('img/img-1.jpg')
.then(img => {
  currenctImg = img;
  console.log('Image 1 loaded');
  return wait(2);
})
.then(() => {
  currenctImg.style.display = 'none';   // #3 done!
  return createImage('img/img-2.jpg');
})
.then(img=>{
  currenctImg = img;
  console.log('Image 2 loaded');
  return wait(2);
})
.then(()=>{
  currenctImg.style.display = 'none';   // #5 and #6 done!
})
.catch(err => console.log(err))
*/



///////////////////////////////////////////////////////////////////////
///// ASYNC EASY WAY!!!!!!!!!!!
///////////////////////
/*
const getPosition = function() {
  return new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);  // to samo co wyzej!
  });
};


const whereAmI = async function(country){
  try{
//Geolocation
    const pos =  await getPosition();
    const {latitude: lat, longitude: lng} = pos.coords;

//Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
    if(!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

//Country Data
    //What i've learned about async:
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then(res1 => console.log(res1));

//But this is doing exacly what what is above but in more elegant way
    const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    if(!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0])

    return `You are in ${dataGeo.city}, ${dataGeo.country}`; // to przechodzi 2 ci: $
  }catch(error){
    console.error(`${error}`)
    renderError(`${error.message}`);
    throw error;          //to przechodzi do 2err: $
  }
}
// whereAmI('poland');
// console.log('FIRST');

// try{
//   let y  = 1;
//   const x = 2; 
//   // x =3;
//   y=3;
// }catch(error){
//   alert(error.message);
// }

console.log('1.Will get location');;
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city =>console.log(`2 ci: ${city}`))
//   .catch(err => console.log(`2err: ${err.message}`))    //Prawdilowy sposob zwrocenia wartosci;
//   .finally(() => console.log('3. '))          // Wyswietla sie po "2" 
  

// full async mode!!!!!!!!!
  ( async function(){
    try{
      const city = await whereAmI();
      console.log(`2 ci: ${city}`)
    }catch(err) {
      console.log(`2err: ${err.message}`)
    }
    console.log('3. ')

  }) ();
*/

/////////////////////////////////////////////////////////////////////////////
// MULTIPULE ASYNC 
/////////////////////////////////////////////////////////////////////////////
/*
const get3Country = async function(c1, c2, c3){
  try{
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`), 
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`)
    ]);

    // console.log(data1.capital, data2.capital, data3.capital);
    console.log(data.map(d => d[0].capital));
    
  }catch(err) {
    console.log(`2err: ${err.message}`)
  }
}

Promise.all();

get3Country('poland', 'germany', 'france');
*/

/////////////////////////////////////////////////////////////////////////////
//Promise race
/*
Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/poland`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
/*
  PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀

*/

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

