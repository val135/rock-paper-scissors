//Variables

    //score user vs pc
let userScore =0;
let pcScore =0;
let userScoreResult = document.getElementById('user-score');
let pcScoreResult = document.getElementById('pc-score');
let scoreBoard = document.getElementById('score');

    //elements
let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');

    //result of the game
let result = document.querySelector('.result');



//Listeners
function elements() { //The 3 principal listeners are grouped here. Each one has an argument with its corresponding element: rock, paper, scissors

    rockBtn.addEventListener('click', function() {
        game('rock');
    })
    paperBtn.addEventListener('click', function() {
        game('paper');
    })
    scissorsBtn.addEventListener('click', function() {
        game('scissors');
    })
}

    
//Functions

    //pc selects a random element with the math.random function
function pcSelectElement(){
    const elementsPc = ['rock', 'paper', 'scissors'];
    randomNumber = Math.floor(Math.random()*3);
    return elementsPc[randomNumber];
}


    // this is the main function, where the game takes action
function game(userChoice) {
    let pcChoice = pcSelectElement();

    if(
        (userChoice === 'scissors' && pcChoice === 'paper') ||
        (userChoice === 'rock' && pcChoice === 'scissors') ||
        (userChoice === 'paper' && pcChoice === 'rock')
          ) { 
          result.innerHTML = `Computer picked ${pcChoice}, you Won!`;
          userScore++;
          userScoreResult.innerText = userScore;

        } else if (
          (userChoice === 'scissors' && pcChoice === 'rock') ||
          (userChoice ===  'rock' && pcChoice === 'paper') ||
          (userChoice === 'paper' && pcChoice === 'scissors')
        ) {
            result.innerHTML = `Computer picked ${pcChoice}, you Lost!`;
            pcScore++;
            pcScoreResult.innerText = userScore;
      } else {
        result.innerHTML = `Computer picked ${pcChoice} too, It is a tie!`;
      }
}



/*
function wins() {
    userScore++;
    userScoreResult.innerText = userScore;
}

function lose() {
    pcScore++;
    pcScoreResult.innerText = pcScore;
}
*/

elements();
pcSelectElement();