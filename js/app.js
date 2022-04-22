'use strict';

//Selecting elements
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const playerActive = document.querySelector('.player--active');

//Adding Elements
diceEl.classList.add('hidden');

//Identifying variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Functions

const switchPlayers = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active'); //adds or removes the class selected
  player0El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', e => {
  if (playing) {
    let dice = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayers();
    }
  }
});

//Hold functionality
btnHold.addEventListener('click', e => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayers();
    }
  }
});

//Reset Game
