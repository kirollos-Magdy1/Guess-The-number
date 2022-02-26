'use strict';
let body = document.querySelector('body'),
    msg = document.querySelector('.message'),
    score = document.querySelector('.score'),
    highscore = document.querySelector('.highscore'),
    number = document.querySelector('.number'),
    guess = document.querySelector('.guess'),
    check = document.querySelector('.check'),
    again = document.querySelector('.again')
    ; 

let scoreVal = 20,
    highscoreVal = 0,
    secretNumber = Math.trunc(Math.random() * 20) + 1,
    win = false
    ;

function checkHighscore(){    
    highscoreVal =  (scoreVal > highscoreVal) ? scoreVal : highscoreVal ;
    highscore.textContent = highscoreVal;
}

//console.log(`secretNumber = ${secretNumber}`);

function checkAnswer(){
    const guessVal = Number(guess.value);
    // console.log(`scoreval = ${scoreVal} of type ${typeof scoreVal}`);
   
    if(win) return;

    if(scoreVal < 1){
        msg.textContent = 'You lost the game!';
        return;
    }

    if(!guess.value){
        msg.textContent = 'No number';
    }
    else{
        if(guessVal < 1 || guessVal > 20)    {msg.textContent = 'Out of range'; scoreVal--;}
        else if(guessVal > secretNumber)     {msg.textContent = 'Too high'; scoreVal--;}
        else if(guessVal < secretNumber)     {msg.textContent = 'Too low'; scoreVal--;}
        else {      //correct guess
            msg.textContent = 'Corret number';
            number.textContent = guessVal;
            body.style.backgroundColor = '#006400';
            win = true;
            checkHighscore();
        }
    }
    score.textContent = scoreVal; 
}

function gameReset (){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // console.log(`secretNumber = ${secretNumber}`);
    scoreVal = 20;
    win = false;
    score.textContent = scoreVal; 
    msg.textContent ='Start guessing...';
    number.textContent = '?';
    guess.value = '';
    body.style.backgroundColor = '#222';
}

check.addEventListener('click',checkAnswer);
again.addEventListener('click',gameReset);
