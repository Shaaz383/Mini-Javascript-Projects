const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    
    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number!";
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    } else if (userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
    } else {
        message.textContent = `Yes! You guessed it right! The number was ${randomNumber}.`;
        attemptsDisplay.textContent = `You made ${attempts} attempts.`;
        resetGame();
    }

    guessInput.value = '';
});

function resetGame() {
    guessInput.disabled = true; // Disable input after winning
    guessBtn.disabled = true; // Disable button after winning
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new number
        attempts = 0; // Reset attempts
        guessInput.disabled = false; // Enable input for the next round
        guessBtn.disabled = false; // Enable button for the next round
        message.textContent = ""; // Clear the message
        attemptsDisplay.textContent = ""; // Clear attempts display
    }, 3000); // Reset after 3 seconds
}
