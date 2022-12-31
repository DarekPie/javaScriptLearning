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
const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge2(1991);
// console.log(age3);
console.log(calcAge3(1991));

const yearsUntilRetirment = (birthYear, firstName) => {
  const age =  2037 - birthYear;
  const retirment = 65 - age;
  // return retirment;
  // return '${firstName} retires in ${retirment}';
  return `${firstName} retires in ${retirment} years`;
}

console.log(yearsUntilRetirment(1991, 'Jan'));
