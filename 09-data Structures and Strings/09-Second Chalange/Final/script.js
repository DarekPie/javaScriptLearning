'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neure',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmch',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnerby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Shultz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1, players2] = game.players;
console.log(players1, players2);


const [gk1, ...fieldplayers1] = players1;
const [gk2, ...fieldplayers2] = players2;
console.log(gk1, gk2);
console.log(fieldplayers1, fieldplayers2);

const allplayers = [...players1, ...players2];
console.log(allplayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscis'];
console.log(players1Final);

const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team1 is more likely to win');