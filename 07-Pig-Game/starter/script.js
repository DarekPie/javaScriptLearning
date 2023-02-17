'use strict';

//Dwa sposoby pobierania danych
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');   // score--0 to id
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;

// const score2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');     // dice klasa!
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


const init = function(){
  console.log('init');
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;   // 0 player1 and 1 player2
   playing = true;

  // Ustawianie score na 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;


   diceEl.classList.add('hidden');
   player0El.classList.remove('player--winner');
   player0El.classList.add('player--active');
   player1El.classList.remove('player--winner');
   player1El.classList.remove('player--active');
  //  document.getElementById(`score--${activePlayer}`).textContent = scores[0,0];
};

init();


const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}



//Roling dice functionality
btnRoll.addEventListener('click', function(){
  if(playing){
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;   // 
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;      // Wyswietla odpowiedni png w zaleznosci od obrazka

    // 3. Check for rolled 1: 
    if(dice !== 1 ){
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      // currentScore0El.textContent = currentScore;

    }else {
      // Swich to next player
      switchPlayer();
    }
  }

});


btnHold.addEventListener('click', function(){
  if(playing){
      // 1. Add currenct score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    // Finish the game
    if(scores[activePlayer] >= 21) {
      diceEl.classList.add('hidden');
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      // Switch to the next player
    switchPlayer();
    }
  }

});

btnNew.addEventListener('click', init);

