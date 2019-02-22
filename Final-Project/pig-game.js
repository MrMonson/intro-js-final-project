/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying; // Global Scope so that I can use it in other scopes and other functions

init();

// This is one way of interacting with the addEventListener
//document.querySelector('.btn-roll').addEventListener('click', btn);
// OR
// you can pass in an anonymous function
// anonymous function is a function that doesn't have a name so it can NOT be reused, which is what we want in our case.
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
      // 1. Random number
      var dice = Math.floor(Math.random() * 6) + 1; //Math.random() is a random number generator

      //2. Display the result
      //
      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block';
      diceDom.src ='dice-' + dice + '.png';

      //3. Update the round score IF the rolled number was NOT a 1

      if (dice !== 1) { //if dice is different than 1
        //Add score
        //Same as: roundScore = roundScore + dice
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
        //Next Player
        /*Same as: if(activePlayer === 0) {
          activePlayer = 1;
      } else {
          activePlayer = 0;
      } */
        //Next Player
        nextPlayer();
      }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
      //1. Add CURRENT score to GLOBAL score
      scores[activePlayer] += roundScore;

      //2. Update the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      //3. Check if Player won the game
      if (scores[activePlayer] >= 25) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
      } else {
        //Next Player
        nextPlayer();
      }
    }
});


function nextPlayer() {
  //Next Player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Ternary
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  //took bottom code off because toggle is the way to go
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0]; // created array
    roundScore = 0;
    activePlayer = 0; // keeps track of player that is playing
    gamePlaying = true;
    // Targeting css class, using .style.display
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}




// dice; //set a value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent; // reads value
// console.log(x);
