'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],


  openingHours: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
  [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0, 
    time = '20:00', 
    address}) {
    console.log(`Order Recived! ${this.mainMenu[mainIndex]} 
    will be deliverd to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with 
    ${ing1}, ${ing2}, ${ing3} `);
  }
};

// Loop of an antire array  for off loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu)           console.log(item);
for(const item of menu.entries()) console.log(item); // Kazdy element jest fragamentem tabeli 
for(const item of menu.entries()) {
  console.log(`${item[0]+1} : ${item[1]}`);       // 
}
for(const [i, el] of menu.entries()) {        // to samo co wyzej
  console.log(`${i+1} : ${el}`);       // 
}


if(restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

// With Optional chaining
console.log(restaurant.openingHours.mon?.open);
// Without optinal chaning
//console.log(restaurant.openingHours.mon.open); // Casing error of typeError

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';    // uzywamy ?? bo w sobote otwarte jest od 0 
  console.log(`On ${day} we open at ${open}`);
}



// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via dell somth 21',
//   mainIndex: 2,
//   starterIndex: 2
// });

// restaurant.orderDelivery({
//   address: 'Via dell somth 22',
//   mainIndex: 2,
//   starterIndex: 1
// });

// // const ingredients = [ prompt('Lets make pasta! Ingredient1'),
// //                       prompt('Lets make pasta! Ingredient2'),
// //                       prompt('Lets make pasta! Ingredient3')];

// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Rozszerzenie:
// const mainMenuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mainMenuCopy);




// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, 
//   openingHours: hours, 
//   categories: tags} = restaurant;
//   console.log(restaurantName, hours, tags);


//   // Nested objects
//   const {
//     fri: {open: o, close: c},
//   } = openingHours;
//   console.log(o, c);
