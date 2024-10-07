let box = document.querySelector(".box");
let bottom = document.querySelector(".bottom");
let main = document.querySelector(".main");
let gameOverScreen = document.querySelector(".gameOver");

let spanTime = document.querySelector("#time");
let score = document.querySelector("#score");
let click = document.querySelector("#click");

let clicked = '';
let time = 60;
let clickRandom;
let runningScore = 0;
let interval;

// Create 55 bubbles with random numbers
function initialize() {
    let temp = '';
    for (let i = 0; i < 55; i++) {
        temp += `<div class="box">
                    <h1>${Math.floor(Math.random() * 10)}</h1>
                 </div>`;
    }
    bottom.innerHTML = temp;
}

// Countdown Timer Functionality
function timer() {
    interval = setInterval(() => {
        if (time > 0) {
            time--;
        } else {
            gameOverFunc();
        }
        spanTime.textContent = time;
    }, 1000);
}

// Game Over Functionality
function gameOverFunc() {
    clearInterval(interval);  // Stop timer
    document.querySelector("#final-score").textContent = runningScore;
    gameOverScreen.style.display = 'block';  // Show game over screen
    bottom.style.display = 'none';           // Hide bubbles
}

// Generate a random number to be clicked
function clickFunc() {
    clickRandom = Math.floor(Math.random() * 10);
    click.textContent = clickRandom;
}

// Handle bubble click events
bottom.addEventListener("click", (event) => {
    if (time > 0) {
        clicked = Number(event.target.textContent);
        if (clickRandom === clicked) {
            runningScore += 10;
            score.textContent = runningScore;
        }
        clickFunc();
        initialize();
    }
});

// Restart Game Functionality
document.querySelector("#restart").addEventListener("click", () => {
    time = 60;
    runningScore = 0;
    spanTime.textContent = time;
    score.textContent = runningScore;
    gameOverScreen.style.display = 'none';   // Hide game over screen
    bottom.style.display = 'flex';           // Show bubbles again
    initialize();
    timer();
});

// Initialize the game
initialize();
clickFunc();
timer();
