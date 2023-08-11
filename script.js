'use strict';

let score = 20;
let secretValue = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setValue(number) {
  document.querySelector('.number').textContent = number;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('📛 No Number');
  } else if (secretValue === guess) {
    displayMessage('✨ Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    setValue(secretValue);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretValue) {
    if (score > 1) {
      score--;
      setScore(score);
      displayMessage(guess > secretValue ? '📉 Too High ' : '📈 Too Low');
    } else {
      displayMessage('❌ Game Over');
      score = 20;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretValue = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');
  setScore(score);
  setValue('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
