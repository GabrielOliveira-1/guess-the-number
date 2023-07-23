'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Is part of the state of the application.
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const changeBodyStyleBackColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const changeNumberStyleWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Happens when 'Check!' button is clicked (resets everything except highscore)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🤔 No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆🥳 Correct Number!');
    displayNumber(secretNumber);
    changeBodyStyleBackColor('#60b347');
    changeNumberStyleWidth('30rem');

    // Sets highscore if score is greater
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Displays messagges if guess is different from secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '⤴ Too high!' : '⤵ Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('❌😥 You lost the game!');
      score--;
      displayScore(0);
    }
  }
});

// Happens when 'Again!' button is clicked (resets everything except highscore)
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  changeBodyStyleBackColor('#222');
  changeNumberStyleWidth('15rem');
});
