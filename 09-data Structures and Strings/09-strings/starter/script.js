

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

// Fix Capitalization in name
const passanger= 'jOnAS'; //Jonas
const passangerLower = passanger.toLowerCase();
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1)
console.log(passangerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io  \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email===normalizedEmail);