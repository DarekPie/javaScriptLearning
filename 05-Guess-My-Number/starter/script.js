'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.message').textContent = 'Correct Number!12';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// random od 1 do 20 
const secretNumber = Math.trunc(Math.random()*20 + 1);
let score = 20;
//document.querySelector('.number').textContent = secretNumber;
console.log("This is secret number = " + secretNumber);

document.querySelector('.again').addEventListener('click', function() {
  const secretNumber = Math.trunc(Math.random()*20 + 1);
  let score = 20;

  console.log("This is secret number = " + secretNumber);

  document.querySelector('.again');  
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  });

document.querySelector('.check').addEventListener('click',
  function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(score > 1) {
      if(!guess) {
        document.querySelector('.message').textContent = 'No number!';
        score--;
        document.querySelector('.score').textContent = score;

      }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';  
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

      }else if(guess > secretNumber){
        document.querySelector('.message').textContent = 'Too High!';  
        score--;
        document.querySelector('.score').textContent = score;

      }else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too Low!';  
        score--;
        document.querySelector('.score').textContent = score;

      }
    }else {
      document.querySelector('.message').textContent = 'You Lose!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  });
