
const submit=document.querySelector('#subt');

const userInput=document.querySelector('#guessField');
const num = parseInt(Math.random() * 100 + 1);

const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultUpdate');

const p=document.createElement('p');

let previousGuess=[];
let numGuess=1;
let playGame=true;


if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number');
    }else if(guess<1){
        alert('please enter number more than 1');
    }else if(guess>100){
        alert('please enter number less than 100');
    }else {
        previousGuess.push(userInput);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random was ${num}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === num){
        displayMessage('You guess the Correct Number');
        endGame();
    }else if(guess < num){
        displayMessage('Too Low')
    }else if(guess > num){
        displayMessage('Too High')
    }

}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML=`<h3>${message}</h3>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click',function(e){
        num=parseInt(Math.random()*100+1);
        previousGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    });
}
