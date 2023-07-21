'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋');
//   console.log(this);
// };
// Person.hey();

///////////////////////////////////////
// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //null

console.log(Person.prototype.constructor);

const arr = [3,6,4,6,9,3]; // new Array === []
console.log(arr.__proto__===Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');


// Chalange #1 
/*
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car ('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
*/

// Clas Expresion
// const PersonClass = class{}

// Class Declaration

class PersonCl{
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(2037 - this.birthYear);
  }

  greet(){
    console.log(`Hej ${this.firstName}`);
  }

  get agre(){
    return 2037 - this.birthYear;
  }
};

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();


// PersonCl.prototype.greet=function(){
//   console.log(`Hej ${this.firstName}`);
// }
// jessica.greet();



const account = {
  owner: 'Jonas',
  movements : [200, 530, 120, 300],

  get latest(){
    return this.movements.slice(-1).pop();
  },
  set latest(mov){
     this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest=50;
console.log(account.movements);