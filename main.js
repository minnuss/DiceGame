const mainDiv = document.querySelector('.mainDiv');
const winMsg = document.querySelector('.winMsg');
const mainBox = document.querySelector('.mainBox');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const boxs = document.querySelectorAll('.box');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // calling roll function within array
    let randomArr = [roll(6), roll(6)];
    // winning logic
    let temp = randomArr[0] === randomArr[1] ? "It's a draw!" : randomArr[0] > randomArr[1] ? "Player 1 Wins !" : "Player 2 Wins !"
    // console.log(randomArr)

    // displaying the results
    winMsg.textContent = temp;
    // it needs to be innerHTML to display unicode decimal code for dice icons
    player1.innerHTML = randomArr[0];
    player2.innerHTML = randomArr[1];
})

// RANDOM ROLL FROM 1-6
function roll(num) {
    let random = Math.ceil(Math.random() * num);
    let diceNum = 9855 + random;
    let dice = '&#' + diceNum + ';';
    // console.log(dice)
    return dice;
}