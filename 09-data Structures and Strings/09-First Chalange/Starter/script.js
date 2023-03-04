'use strict';

// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)

// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
// Then, call the function again with players from game.scored


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


// 1. Create one player array for each team (variables 'players1' and 
// 'players2')
const [player1, player2] = game.players;
console.log("#1Task");
console.log(player1, player2);

// 2. The first player in any player array is the goalkeeper and the others are field 
// players. For Bayern Munich (team 1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
// field players
const [gk1, ...fieldplayers1] = player1;
const [gk2, ...fieldplayers2] = player2;
console.log("#2Task");
console.log(gk1, gk2);
console.log(fieldplayers1, fieldplayers2);

// 3. Create an array 'allPlayers' containing all players of both teams (22 
// players)
const allPlayers = [...player1, ...player2];
console.log("#3Task");
console.log(allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final') containing all the original team1 players plus 
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic']
console.log('#4Task');
console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 
// 'team1', 'draw' and 'team2')
const {odds: {team1, x : draw, team2}} = game;
console.log('#5Task');
console.log(team1, draw, team2);


// 6. Write a function ('printGoals') that receives an arbitrary number of player 
// names (not an array) and prints each of them to the console, along with the 
// number of goals that were scored in total (number of player names passed in)
console.log('#6Task');

const printGoals = function(...players){
  console.log(players);
  console.log(`${players.length} goals were scored`);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win, without using an if/else statement or the ternary 
// operator.
console.log('#7Task');
team1 > team2 && console.log('Team1 one is more likly to win');
team1 < team2 && console.log('Team2 one is more likly to win');
