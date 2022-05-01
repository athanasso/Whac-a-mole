const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole');
    })
  
    let randomSquare = squares[Math.floor(Math.random() * squares.length)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }else{
          result--;
          score.textContent = result;
          loseFromScore();
      }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimeId);
        clearInterval(timerId);
        alert('Game over!');
        alert('Final score: ' + result);
    }
}

function loseFromScore() {
    if (result < 0) {
        clearInterval(countDownTimeId);
        clearInterval(timerId);
        alert('Game over!');
        alert('You lost');
    }
}

let countDownTimeId = setInterval(countDown, 1000);