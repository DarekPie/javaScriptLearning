

const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

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

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcment = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcment.replace('door', 'gate'));
console.log(announcment.replaceAll('door', 'gate'));
console.log(announcment.replace(/door/g, 'gate'));

//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boeig'));

if(plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the New Airbus family');



  // Split