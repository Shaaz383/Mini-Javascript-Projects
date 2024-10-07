var prgrs = document.querySelector('#prgrs');
var startBtn = document.querySelector('#startBtn');
var stopBtn = document.querySelector('#stopBtn');
var resetBtn = document.querySelector('#resetBtn');
var h2 = document.querySelector('h2');

var count = 0;
var start; // Define the start variable outside of the event listeners

// Function to start or resume the progress
function startProgress() {
    clearInterval(start); // Clear any existing intervals to avoid multiple timers

    start = setInterval(function() {
        if (count < 100) {
            count++;
            prgrs.style.width = count + '%';
            h2.textContent = count + '%';
        } else {
            clearInterval(start); // Stop when reaching 100%
        }
    }, 100);
}

// Start button event listener
startBtn.addEventListener('click', startProgress);

// Stop button event listener
stopBtn.addEventListener('click', function() {
    clearInterval(start);
});

// Reset button event listener
resetBtn.addEventListener('click', function() {
    clearInterval(start);
    count = 0; // Reset count to 0
    prgrs.style.width = '0%'; // Reset progress bar width
    h2.textContent = '0%'; // Reset percentage display
});
