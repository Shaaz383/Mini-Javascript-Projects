const steps = document.querySelectorAll('.step');
const nextButton = document.getElementById('nextButton');
let currentStep = 0;

nextButton.addEventListener('click', () => {
    if (currentStep < steps.length) {
        // Mark the current step as completed
        steps[currentStep].classList.add('completed');
        // Move to the next step
        currentStep++;
    }
    
    // Check if we have completed all steps
    if (currentStep === steps.length) {
        nextButton.style.display = 'none'; // Hide the button if all steps are done
        alert("Your order has been delivered!");
    }
});
