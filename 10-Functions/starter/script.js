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
/*
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

const book = lufthansa.book;

// lufthansa.book(23, 'Sarah Wilaims');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Bartek Przybylski');
console.log(lufthansa);


const swiss = {
  arline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');
console.log(swiss);

// Aapply Method
const flightData = [583, 'Goerge Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Tak samo działa jak book.apply(swiss, flightData);
book.call(swiss, ...flightData);
console.log(swiss);


// Bind functions!!!!!!!!!!!!!!!!
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// bookEw(23, 'Steven Wiliams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmidtmann');
bookEW23('Marth Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++;
  console.log(this.plane);
};
// lufthansa.buyPlane();
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/
//******************************************************************************* */
// Partial application
/*
const addTax =(rate,value) => value + value * rate;
console.log(addTax(10,200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 23;

console.log(addVAT(100));

// Method calls other methods
const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
*/
//******************************************************************************* */
// CODING CHALANGE #1
//******************************************************************************* */
/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an 
array with the number of replies for each option. This data is stored in the starter 
'poll' object below.
Your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
method does 2 things:
  1.1. Display a prompt window for the user to input the number of the 
  selected option. The prompt should look like this:
    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)
  1.2. Based on the input number, update the 'answers' array property. For 
  example, if the option is 3, increase the value at position 3 of the array by 
  1. Make sure to check if the input is a number and if the number makes 
  sense (e.g. answer 52 wouldn't make sense, right?)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The 
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using 
console.log(). This should be the default option. If type is 'string', display a 
string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 
'registerNewAnswer' method call.

5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResoults();
    this.displayResoults('string');
  },

  displayResoults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 12, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer('.poll').addEventListiner();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResoults.call({ answers: [5, 2, 3] }, 'strgin');
poll.displayResoults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'strgin');
poll.displayResoults.call({ answers: [1, 5, 3, 9, 6, 1] });
// Test data for bonus:
//  [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

//******************************************************************************* */
// IMMEDIETELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//******************************************************************************* */
/*
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

// IMMEDIETELY INVOKED FUNCTION EXPRESSIONS (IIFE)
const first = 10;
const something = 'lala';
(function (first, something) {
  console.log('This will never run again');
  console.log(first);
  console.log(something);
})();

// IMMEDIETELY INVOKED FUNCTION EXPRESSIONS (IIFE) with arrow function
(() => console.log('This will never run again'))();

*/

//******************************************************************************* */
// Closures
//******************************************************************************* */

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//******************************************************************************* */
// Closures examples
//******************************************************************************* */
/*
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();

console.dir(f);

// Example 2
const boardPassangers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, earch with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassangers(180, 3);
*/

//******************************************************************************* */
// CODING CHALANGE #2
//******************************************************************************* */
/*
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again!

2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example

*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
