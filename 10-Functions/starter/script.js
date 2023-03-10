'use strict';

/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199){
  // numPassengers = numPassengers || 1;
  // price = price || 199;


  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LG123');
createBooking('LG123', 2, 800);
*/

/*
const flight = 'LG234';
const jonas = {
  name : 'Jonas Schmedtmann',
  passport : 234567894
}

const checkIn = function(flightNum, passenger){
  flightNum = 'LG999';
  passenger.name = 'Mr. ' + passenger.name;

  if(passenger.passport == 234567894 ){
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person){
  person.passport = Math.trunc(Math.random()*1000000000);
}

newPassport(jonas);
checkIn(flight, jonas);
*/

/*
const oneWord = function(str ){
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function(str, fn){
  console.log(`Original string: ${str}`);
  console.log(`Transform string: ${fn(str)}`);

  console.log(`Transfomerd by ${fn.name}`);
}

// upperFirstWord we only passing function value - transforming function calling this function
transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);
*/


/*
const greet = function (greeting){
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Arrow function what is above
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('HelloArr')('Jonas')

*/

const lufthansa = {
  arline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.arline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }, 
};

lufthansa.book(239, 'Jonas Schmedman');

const eurowings = {
  arline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};