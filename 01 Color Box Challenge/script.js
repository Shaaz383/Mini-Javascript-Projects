// Select elements
let box = document.querySelector('#box');
let toggleButton = document.querySelector('#toggle');
let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let yellow = document.querySelector('#yellow');
let random = document.querySelector('#random');

// Toggle color between green and grey
toggleButton.addEventListener('click', function() {
  if (box.style.backgroundColor === 'green') {
    box.style.backgroundColor = 'grey'; // Toggle to grey
  } else {
    box.style.backgroundColor = 'green'; // Toggle to green
  }
});

// Change box color based on button clicked
red.addEventListener('click', () => {
  box.style.backgroundColor = 'red';
});

blue.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
});

yellow.addEventListener('click', () => {
  box.style.backgroundColor = 'yellow';
});

// Function to generate a random color
function getRandomColor() {
  let r = Math.floor(Math.random() * 256); // Random value between 0-255
  let g = Math.floor(Math.random() * 256); // Random value between 0-255
  let b = Math.floor(Math.random() * 256); // Random value between 0-255
  return `rgb(${r}, ${g}, ${b})`; // Return the color in rgb format
}

// Change box color to random color
random.addEventListener('click', () => {
  let randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
});
