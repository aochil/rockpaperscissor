let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })   
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = '';

    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'paper' && computerSelection == 'rock') ||
       (playerSelection == 'scissors' && computerSelection == 'paper')) {

        playerScore += 1;
        result = ('You win this round! ' + playerSelection + ' beats ' + computerSelection + '.'
        + '<br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore);

            if(playerScore == 5) {
                result = ('You win the game, you just got lucky! Refresh to play again.' 
                        + '<br> Player Score: ' + playerScore + '<br> Computer Score: ' + computerScore)
                disableButtons()
            }
       } else if(playerSelection == computerSelection) {
               result = (`It's a draw!` + '<br> Player Score: ' + playerScore
               + '<br> Computer Score: ' + computerScore);
           }
             else {
                  computerScore += 1;
                  result = ('Computer wins the round! ' + computerSelection + ' beats ' + playerSelection
                + '<br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)

                 if(computerScore == 5) {
                result = ('Computer wins the game. Sucks to suck! Refresh to get another chance to beat me ;)' 
                        + '<br> Player Score: ' + playerScore + '<br> Computer Score: ' + computerScore)
                disableButtons()
               
           }

       } document.getElementById('result').innerHTML = result
       return
} buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value);
    })
})
