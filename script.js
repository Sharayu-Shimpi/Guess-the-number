let secretNumber;
let attempts = 0;

const startButton = document.getElementById('start-button');
const guessButton = document.getElementById('guess-button');
const userGuessInput = document.getElementById('user-guess');
const gameStatus = document.getElementById('game-status');
const guessContainer = document.getElementById('guess-container');

startButton.addEventListener('click', startGame);
guessButton.addEventListener('click', makeGuess);

function startGame() {
 
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  startButton.style.display = 'none';
  guessContainer.style.display = 'block';
  gameStatus.textContent = 'Make a guess!';
}

function makeGuess() {
  const userGuess = parseInt(userGuessInput.value);


  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    gameStatus.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    gameStatus.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    guessContainer.style.display = 'none';  // Hide input after winning
  } else if (userGuess < secretNumber) {
    gameStatus.textContent = 'Too low! Try again.';
  } else {
    gameStatus.textContent = 'Too high! Try again.';
  }
}
