/**  
Orientation - JS assignment 1
Solution by: [Xin Wang]
*/


let clickCounter = 0;
let resultParagraph;
let userChoice;
let tossingCoin;
let amountOfHead = 0;
let amountOfReverse = 0;
let amountOfWins = 0;
let flipResult = [];
let choiceResult = [];
let resultHistory;
const throwButton = document.querySelector('#throw-button');
const myButtonClicked = () => {
  clickCounter++;
  console.log('my button clicked ' + clickCounter + ' times');
}
throwButton.addEventListener('click', () => {
  myButtonClicked();
  checkUserChoice();
  tossingTheCoin();
  showResult();
});

function checkUserChoice() {
  userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice: ', userChoice);
  choiceResult.push(userChoice);
  console.log('History of users choice: ', choiceResult);
}

function tossingTheCoin() {
  const coinImage = document.querySelector('#coin-image');
  const a = Math.floor((Math.random() * 99));
  if (a < 50) {
    coinImage.src = 'head.png';
    tossingCoin = 'head';
    amountOfHead++;
    flipResult.push('head');
    document.getElementById('head-count').innerText = amountOfHead;
    console.log('coin toss: ', tossingCoin);
    console.log('Amounts of head: ', amountOfHead);

  } else {
    coinImage.src = 'reverse.png';
    tossingCoin = 'reverse';
    amountOfReverse++;
    flipResult.push('reverse');
    document.getElementById('reverse-count').innerText = amountOfReverse;
    console.log('coin toss: ', tossingCoin);
    console.log('Amounts of reverse:', amountOfReverse);
  }
  console.log('Histoty of coin flipped: ', flipResult);

  document.getElementById('win-count').innerText = amountOfWins + '/' + clickCounter;
  resultHistory = 'User choice: ' + choiceResult + '\nCoin toss: ' + flipResult;
  document.getElementById('result-history').innerText = resultHistory;
}


function showResult() {
  resultParagraph = document.querySelector('#result');
  if (userChoice === tossingCoin) {
    resultParagraph.textContent = 'You won!';
    amountOfWins++;
    console.log('result: ', resultParagraph);
  } else {
    resultParagraph.textContent = 'You loose!';
    console.log('result: ', resultParagraph);
  }
  console.log('amounts of win:', amountOfWins);
}










