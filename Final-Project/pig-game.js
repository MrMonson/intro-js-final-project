/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0]; // created array
roundScore = 0;
activePlayer = 1; // keeps track of player that is playing

// Targeting css class, using .style.display
document.querySelector('.dice').style.display = 'none';

/*
function btn() {
  // Do something here
}
// This is one way of interacting with the addEventListener
document.querySelector('.btn-roll').addEventListener('click', btn);
*/
//or you can pass in an anonymous function
// anonymous function is a function that doesn't have a name so it can NOT be reused, which is what we want in our case.
document.querySelector('.btn-roll').addEventListener('click', function() {

    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1; //Math.random() is a random number generator

    //2. Display the result
    //
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src ='dice-' + dice + '.png';



    //3. Update the round score IF the rolled number was NOT a 1
});












// document.querySelector('#current-' + activePlayer).textContent = dice; //set a value
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent; // reads value
// console.log(x);
