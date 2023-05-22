const paragraph1 = document.querySelector('.para2');
const paragraph2 = document.querySelector('.para3');
const paragraph3 = document.querySelector('.para4');

const score = JSON.parse(localStorage.getItem('score'))||
{win:0, lose:0, draw:0};

function computerPlay (){
    let computerPick;
    const number = Math.floor(Math.random()*3 + 1);
    if(number===1){
        computerPick = 'ROCK';
    }else if(number===2){
        computerPick = 'PAPER';
    }else{
        computerPick = 'SCISSORS';
    }
    return computerPick;
}

function gameClick(playerChoice){
    computerPick = computerPlay(); 
    let result;
    if(playerChoice==='ROCK'){
        if(computerPick==='PAPER'){
            result = 'Win';
        }else if(computerPick==='SCISSORS'){
            result = 'Lose';
        }else{
            result = 'Draw';
        }
    }else if(playerChoice==='PAPER'){
        if(computerPick==='SCISSORS'){
            result = 'Win';
        }else if(computerPick==='PAPER'){
            result = 'Draw';
        }else{
            result = 'Lose';
        }
    }else{
        if(computerPick==='SCISSORS'){
            result = 'Draw';
        }else if(computerPick==='PAPER'){
            result = 'Lose';
        }else{
            result = 'Win';
        }
    }

    if(result==='Win'){
        score.win += 1;
    }else if(result==='Lose'){
        score.lose += 1;
    }else{
        score.draw += 1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    paragraph1.textContent = "You: "
    +playerChoice+"  Com: "+computerPick;
    paragraph2.textContent = "You "+result+"!";
    paragraph3.textContent = "Win:"+score.win+" Lose:"+score.lose +" Draw:"+score.draw;
}

function reset(){
    score.win = 0;
    score.draw = 0;
    score.lose = 0;
    localStorage.removeItem('score');
    paragraph3.textContent = "Score reset"
    paragraph2.textContent = "Let's Play!"
    paragraph1.textContent = "Press any button to begin!";
}
