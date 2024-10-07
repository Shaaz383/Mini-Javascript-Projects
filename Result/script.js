document.getElementById("calculateBtn").addEventListener("click", function() {
  const subject1 = parseFloat(document.getElementById("subject1").value) || 0;
  const subject2 = parseFloat(document.getElementById("subject2").value) || 0;
  const subject3 = parseFloat(document.getElementById("subject3").value) || 0;
  const subject4 = parseFloat(document.getElementById("subject4").value) || 0;
  const subject5 = parseFloat(document.getElementById("subject5").value) || 0;

  const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
  const percentage = (totalMarks / 500) * 100;

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block"; // Show the result div

  resultDiv.classList.remove("pass", "fail", "loading"); // Remove previous classes
  resultDiv.innerHTML = "Calculating...";
  resultDiv.classList.add("loading"); // Add loading class

  setTimeout(() => {
      let division;
      if (percentage >= 60) {
          division = "1st Division";
          resultDiv.classList.add("pass");
      } else if (percentage >= 45) {
          division = "2nd Division";
          resultDiv.classList.add("pass");
      } else if (percentage >= 33) {
          division = "3rd Division";
          resultDiv.classList.add("pass");
      } else {
          division = "Failed";
          resultDiv.classList.add("fail");
      }

      resultDiv.innerHTML = `Total Marks: ${totalMarks} <br> Percentage: ${percentage.toFixed(2)}% <br> Division: ${division}`;
  }, 1000); // Simulate a loading time of 1 second
});
