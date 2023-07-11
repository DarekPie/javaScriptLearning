'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////
//Pagin

//Button scroling
btnScrollTo.addEventListener('click', function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);
  console.log(e.target.getBoundingClientRect());

  // Gdzie jest widok okna w pikselach
  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' }); 
});
///////////////////////////
// Page navigation
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
*/

// 1. Add event listner to comon parent Element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matchin strategy
  if (e.target.classList.contains('nav__link')) {
    // console.log('LINK');
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});


// Tabbed component 
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(t=>t.addEventListener('click', ()=> console.log('TAB')));
tabsContainer.addEventListener('click', function(e){
  // const clicked = e.target;
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if(!clicked) return;

  // Remove active classes
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c=>c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // Active content area - text under the tab
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Menu fade animation
nav.addEventListener('mouseover', function(e) {
  if(e.target.classList.contains('.nav__link')){
    const link = e.target;
    const siblings = link.closet('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity= 0.5;
  }
});

nav.addEventListener('mousout', function(e) {
  if(e.target.classList.contains('.nav__link')){
    const link = e.target;
    const siblings = link.closet('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = 1;
    });
    logo.style.opacity= 1;
  }
});

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// 1. Creating and deleteing elements
/*
//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('#section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('coockie-message');
//message.textContent =   'We Use coockies for improved funcionalitys and analytic.';
message.innerHTML =
  'We Use coockies for improved funcionalitys and analytic. <button class="btn btn--close-cookie"><Got it!</button>';

header.append(message);
// header.after(message);
// header.append(message.cloneNode(true));

//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

///////////////////////////////////
// 2. Styles atributes and classes

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); // Wzgledna sciezka

logo.alt = 'Beutifil minimalist logo';

//Non-standard
// nie uzywamy niestadardowych atrybutow - tylko standardowe umieszczone w liscie atrybudow!
console.log(logo.designer); // nie działa
console.log(logo.getAttribute('designer')); // działa!
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src')); //Bezwgledna sciezka

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data Atributes - they are started with data!!!!!!!!!! myślnik na camelCase
// console.log(logo.CDATA_SECTION_NODE.versionNumber);
console.log(logo.dataset.versionNumber);

// Clases
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');   //Not invludes

//DON'T USE IT it ovveride all existing classes what is inside
// logo.className = 'jonas';
*/

//Scroling!!!

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coord = section1.getBoundingClientRect();   //
//   console.log(s1coord);
//   console.log(e.target.getBoundingClientRect());

//   // Gdzie jest widok okna w pikselach
//   console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//******OLD SCOOL */
//Scrolint
// window.scrollTo(s1coord.left, s1coord.top);  // nie dziala jesli widok jest na innej pozycji niz na samej górze
// window.scrollTo(
//   s1coord.left + window.pageXOffset,
//   s1coord.top + window.pageYOffset
// ); // Teraz dziala jak nalezy

// window.scrollTo({
//   left: s1coord.left + window.pageXOffset,
//   top: s1coord.top + window.pageYOffset,
//   behavior: 'smooth',
// });

//**************NEW school!!!!! ****//  modern browsers!
// section1.scrollIntoView({ behavior: 'smooth' });

///////////////////////////////////
// 3. Types and EVENTS event handler
/*
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});

h1.onmouseenter = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};
*/
///////////////////////////////////
//4. Event propagation
/*
//rgb
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // stop propagation
  // e.stopPropagation;
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
*/

/*
const h1 = document.querySelector('h1');

// Going downward: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background ='var(--gradient-secondary)';
h1.closest('h1').style.background ='var(--gradient-primary)';


// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el){
  if(el != h1)
    el.style.transform='scale(0.5)';
})
*/
