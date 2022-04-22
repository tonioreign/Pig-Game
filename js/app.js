'use strict';

//Selecting elements
const btnRoll = document.querySelector('.btn--roll');
const holdEl = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');
const score1El = document.querySelector('#score--1');
const score2El = document.querySelector('#score--2');
const current1El = document.querySelector('#current--1');
const current2El = document.querySelector('#current--2');
const player1El = document.querySelector('.player--1');
const player2El = document.querySelector('.player--2');
const playerActive = document.querySelector('.player--active');




//Adding Elements
diceEl.classList.add('hidden');



//Identifying variables
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;


//Rolling dice functionality
btnRoll.addEventListener('click', e => {
    let dice = Math.floor(Math.random()*6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
    }
    else if (dice === 1){
        player2El.classList.add('player--active');
        player1El.classList.remove('player--active');
    }
    else {

    }
})