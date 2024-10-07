// Function to update the clock every second
function ticking() {
  let dateAndTimeNow = new Date();
  
  // Get hours, minutes, and seconds
  let hours = dateAndTimeNow.getHours();
  let minutes = dateAndTimeNow.getMinutes();
  let seconds = dateAndTimeNow.getSeconds();

  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 to 12

  // Format hours, minutes, and seconds
  hours = String(hours).padStart(2, '0');  // Add leading zero
  minutes = String(minutes).padStart(2, '0'); // Add leading zero
  seconds = String(seconds).padStart(2, '0'); // Add leading zero

  // Update the DOM elements
  document.querySelector('.hour').textContent = hours;
  document.querySelector('.minute').textContent = minutes;
  document.querySelector('.second').textContent = seconds;
  document.querySelector('.period').textContent = period;
}

// Call the ticking function every second
setInterval(ticking, 1000);
ticking(); // Call it once immediately to avoid delay on page load
