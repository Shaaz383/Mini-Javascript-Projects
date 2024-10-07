const cardsArray = [
  { name: 'A', img: '🔵' },
  { name: 'B', img: '🟡' },
  { name: 'C', img: '🟣' },
  { name: 'D', img: '🟠' },
  { name: 'E', img: '🟤' },
  { name: 'F', img: '⚫' },
  { name: 'G', img: '⚪' },
  { name: 'H', img: '🔴' },
];

let gameGrid = [...cardsArray, ...cardsArray];
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matchedCards = 0;

// Shuffle the cards
gameGrid.sort(() => 0.5 - Math.random());

const gameContainer = document.getElementById('game-container');
const restartBtn = document.getElementById('restartBtn');

// Create the cards in the game
gameGrid.forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.dataset.name = card.name;
  cardElement.addEventListener('click', flipCard);
  gameContainer.appendChild(cardElement);
});

// Flip card function
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');
  this.textContent = this.dataset.name;

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
  }

  secondCard = this;
  hasFlippedCard = false;
  lockBoard = true;

  checkForMatch();
}

// Check for a match
function checkForMatch() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

// Disable matched cards
function disableCards() {
  matchedCards += 2;

  if (matchedCards === gameGrid.length) {
      alert('Congratulations! You found all matches!');
      restartBtn.classList.remove('hidden');
  }

  resetBoard();
}

// Unflip cards if not a match
function unflipCards() {
  setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      firstCard.textContent = '';
      secondCard.textContent = '';
      resetBoard();
  }, 1500);
}

// Reset the board
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// Restart the game
restartBtn.addEventListener('click', () => {
  matchedCards = 0;
  gameContainer.innerHTML = '';
  gameGrid.sort(() => 0.5 - Math.random());
  gameGrid.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.name = card.name;
      cardElement.addEventListener('click', flipCard);
      gameContainer.appendChild(cardElement);
  });
  restartBtn.classList.add('hidden');
});

// Initialize the game
(function init() {
  gameGrid.sort(() => 0.5 - Math.random());
})();
