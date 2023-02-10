'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if(passTest){
//   hasDriverLicence = true;
// }


// if(hasDriversLicence){
//   console.log('I can drive');
// }


// Arrow Function

// const calcAge2 = function(birthYear){
//   return 2037 - birthYear;
// }

// Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// // const age3 = calcAge2(1991);
// // console.log(age3);
// console.log(calcAge3(1991));

// const yearsUntilRetirment = (birthYear, firstName) => {
//   const age =  2037 - birthYear;
//   const retirment = 65 - age;
//   // return retirment;
//   // return '${firstName} retires in ${retirment}';
//   return `${firstName} retires in ${retirment} years`;
// }

// console.log(yearsUntilRetirment(1991, 'Jan'));


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends.length);
console.log(friends[3-1]);

// const friends2 = ['Michael', 'Steven', 'Peter'],['BOB', 'BLAA', 'Cecylia'];
// console.log(friends2[1][1]);
const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);



// Objects!!!

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi;
  }
};

const john = {
  fullName: 'Jhon Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function(){
    this.bmi = this.mass / this.height **2;
    return this.bmi;
  }
};


console.log('Mark BMI is: %s', mark.calcBMI() );
console.log('John BMI is: %s', john.calcBMI() );