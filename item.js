let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    tie: 0
};

updatescoreElement();

    function playGame(userMove) {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber < 1 / 3) {
                computerMove = 'rock';
         } else if (randomNumber < 2 / 3) {
                computerMove = 'paper';
        } else {
                computerMove = 'scissors';
        }

        let result = '';
        if (userMove === computerMove) {
                result = 'Tie';
        } else if (
                (userMove === 'rock' && computerMove === 'scissors') ||
                (userMove === 'paper' && computerMove === 'rock') ||
                (userMove === 'scissors' && computerMove === 'paper')
        ) {
                result = 'You Win';
        } else {
                result = 'You Lose';
        }

        if(result === 'You Win'){
                score.win += 1;
        }else if(result === 'You Lose'){
                score.loss += 1;
        }else if(result === 'Tie'){
                score.tie += 1;
        }

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML =`You Picked <img src="./images/${userMove}-emoji.png" class="move-img" /><img src="./images/${computerMove}-emoji.png" class="move-img" /> Computer`
        


        localStorage.setItem('score', JSON.stringify(score));

            

        updatescoreElement();
            
        
    }

    function updatescoreElement(){
        document.querySelector('.js-score')
        .innerHTML = `Win: ${score.win}, Loss: ${score.loss}, Tie: ${score.tie}`
    };