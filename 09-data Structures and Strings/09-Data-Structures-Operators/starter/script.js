'use strict';

// Data needed for a later exercise

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


const flights =  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
console.log(flights.split('+'));


for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';')
  const output = `
  ${type.startsWith('_Delayed') ?  '🔴' : ''}${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')})`;
  console.log(output);

}


////////////////////////////////////////////////////////////
// const question = new Map([
// ['question', 'What is the best programing language in the world?'],
// [1, 'C'],
// [2, 'Java'],
// [3, 'JavaScript'],
// ['correct', 3],
// [true, 'Correct 🎉'],
// [false, 'Try again!'],
// ]);


const airine = 


// console.log(question);

// console.log(question.get('question'));

// for(const [key, value] of question){
//   if(typeof key === 'number')
//     console.log(`Answer ${key}: ${value}`);
// }2

// // const answer = Number(prompt('Your anwer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// // Convert mapt o array
// console.log(...question);
// console.log([...question]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbone Portugal');
// console.log(rest);

// rest 
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//   console.log(rest.get('name'));
//   console.log(rest.get(true));

//   const time = 8;
//   console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//   console.log(rest.has('categories'));



// // Before chalange #3
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);




// Properties NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// for(const day of Object.keys(restaurant.openingHours)){
//   console.log(day);
// }

// let openStr = `We are open on ${properties.length} days`;
// for(const day of properties){
//   openStr +=` ${day},`;
// }
// console.log(openStr);

// // Properties VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// // key, value
// for(const [key, {open, close}] of entries){
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Loop of an antire array  for off loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const item of menu)           console.log(item);
// for(const item of menu.entries()) console.log(item); // Kazdy element jest fragamentem tabeli 
// for(const item of menu.entries()) {
//   console.log(`${item[0]+1} : ${item[1]}`);       // 
// }
// for(const [i, el] of menu.entries()) {        // to samo co wyzej
//   console.log(`${i+1} : ${el}`);       // 
// }


// if(restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

// // With Optional chaining
// console.log(restaurant.openingHours.mon?.open);
// // Without optinal chaning
// //console.log(restaurant.openingHours.mon.open); // Casing error of typeError

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';    // uzywamy ?? bo w sobote otwarte jest od 0 
//   console.log(`On ${day} we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exists');
// console.log(restaurant.orderRissotto?.(0,1) ?? 'Method does not exists');

// // Arrays
// const users = [{
//   name: 'Jonas',
//   email: 'hello@jonas.io'
// }];
// console.log(users[0]?.name ?? 'User array empty');
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
{}