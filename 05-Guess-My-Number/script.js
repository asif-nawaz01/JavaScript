'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


// Computing the Secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Defining the score and high score
let score = 20;
let highScore = 0;

// Initialising the check button
document.querySelector('.check').addEventListener('click'), function () {
  const guess = Number(document.querySelector('.guess').value);
}
  // When there is no Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
