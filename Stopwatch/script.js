var timeLeft = 0;
var timer;

function startTimer() {
  const inputMinutes = document.getElementById("minutesInput").value;
  if (inputMinutes <= 0) {
    alert("Please enter a positive number of minutes.");
    return;
  }
  
  timeLeft = inputMinutes * 60; // Convert minutes to seconds

  clearInterval(timer); // Clear any existing timer
  timer = setInterval(function () {
    timeLeft--;
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    var secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
    document.getElementById("timer").innerHTML = minutes + ":" + secondsString;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 0; // Reset time
  document.getElementById("timer").innerHTML = "0:00";
  document.getElementById("minutesInput").value = ""; // Clear input field
}
