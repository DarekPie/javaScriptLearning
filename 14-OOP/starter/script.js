'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

// Never to this!
// this.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// };
/*
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
*/
///////////////////////////////////////////
//Chanlange #2
/*
class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const bmw = new CarCL('BMW', 120);
const mercedes = new CarCL('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUS);
*/

////////////////////////////////////////////
//Inheritance Between classes: constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Person(firstName, birthYear);    nope nope
  Person.call(this, firstName, birthYear); //this musi byc
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

// Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////
//Chanlange #3
/*
// const Person = function (firstName, birthYear)
// Person.prototype.calcAge = function ()
// class CarCL {
//   constructor(make, speed) {
const CarCL = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarCL.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

CarCL.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// get speedUS() {
//   return this.speed / 1.6;
// }

const EV = function (make, speed, charge) {
  CarCL.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarCL.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const bmw = new CarCL('BMW', 120);
const mercedes = new CarCL('Mercedes', 95);

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
*/

///////////////////////////////////////////////
// ES6!!!!!!!!!
/*
// Class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course){
    // PersonCl.call() Nie musimy juz tak
    //Always needs to happen first!
    super(fullName, birthYear) // to jest konstruktor rodzica wzywany
    this.course = course;
  }

  introduce () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  };
}

// const martha = new StudentCl('Marth Jones', 2012);
const martha = new StudentCl('Marth Jones', 2012, 'Computer Science');
martha.introduce();
*/

/*
const PersonProto ={
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init=function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Scince')
jay.introduce();

*/
class Account {
  #movements; 
  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.#movements=[];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements(){
    return this.#movements;
  }

  deposit(val){
    this.#movements.push(val);
    return this;
  }

  withdraw(val){
    this.#movements.push(-val);
    return this;
  }

  approveLoan(val){
    return true;
  }
}


const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.movements.push(250);
// acc1.deposit(250);
// console.log(acc1);
// // acc1.movements.push(-140);
// acc1.withdraw(140);
console.log(acc1);
// console.log(acc1.getMovements());

//chaining  -łańcuchowanie metod  - trzeba dodac do metod return this;
acc1.deposit(300).deposit(500).withdraw(35);





///////////////////////////////////
// Chalgne 4#
// const Person = function (firstName, birthYear)
// Person.prototype.calcAge = function ()
// class CarCL {
//   constructor(make, speed) {
  class CarCL{ 
      constructor  (make, speed) {
      this.make = make;
      this.speed = speed;
    };

    accelerate(){
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    };

    brake(){
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    };

  };
  
  
  // get speedUS() {
  //   return this.speed / 1.6;
  // }

  class EVCl extends CarCL{

    constructor (make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    };

    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;
    };

    accelerate() {
      this.speed += 20;
      this.charge--;
      console.log(`${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}` );
      return this;
    };

  };
  
  const bmw = new CarCL('BMW', 120);
  const mercedes = new CarCL('Mercedes', 95);
  
  const tesla = new EVCl('Tesla', 120, 23);
  console.log(tesla);
  tesla.chargeBattery(90);
  console.log(tesla);
  tesla.accelerate();