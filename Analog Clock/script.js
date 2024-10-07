function updateClock() {
  const now = new Date();
  
  // Get the current hour, minute, and second
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate the degrees for each hand
  const hourDeg = ((hours % 12) + minutes / 60) * 30; // 360 / 12 = 30 degrees per hour
  const minuteDeg = (minutes + seconds / 60) * 6; // 360 / 60 = 6 degrees per minute
  const secondDeg = seconds * 6; // 360 / 60 = 6 degrees per second

  // Apply the rotation to each hand
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
