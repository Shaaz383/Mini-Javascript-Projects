const questions = [
  {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: 2 // Index of the correct answer
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
  },
  {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: 3
  },
  {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: 0
  }
];

let currentQuestionIndex = 0;
let selectedAnswer = null;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('nextBtn');

// Load the current question
function loadQuestion() {
  selectedAnswer = null;
  feedbackElement.textContent = '';

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  
  // Clear previous options
  optionsElement.innerHTML = '';
  
  // Load options
  currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.textContent = option;
      button.onclick = () => selectOption(index);
      optionsElement.appendChild(button);
  });

  nextButton.disabled = true; // Disable the next button until an option is selected
}

// Handle option selection
function selectOption(index) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === null) {
      selectedAnswer = index; // Set the selected answer
      const options = document.querySelectorAll('.option');

      // Check if the answer is correct or wrong
      if (index === currentQuestion.answer) {
          options[index].classList.add('correct');
          feedbackElement.textContent = 'Correct!';
      } else {
          options[index].classList.add('wrong');
          options[currentQuestion.answer].classList.add('correct');
          feedbackElement.textContent = 'Wrong! The correct answer is: ' + currentQuestion.options[currentQuestion.answer];
      }

      // Enable the next button
      nextButton.disabled = false;
  }
}

// Move to the next question
nextButton.onclick = () => {
  currentQuestionIndex++;
  
  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
      loadQuestion();
  } else {
      questionElement.textContent = 'Quiz Over!';
      optionsElement.innerHTML = '';
      feedbackElement.textContent = 'Thank you for playing!';
      nextButton.classList.add('hidden'); // Hide the next button
  }
};

// Load the first question
loadQuestion();
