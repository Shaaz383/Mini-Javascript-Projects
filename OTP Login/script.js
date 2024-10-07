const otpInputs = document.querySelectorAll('.otp-box');
const verifyButton = document.getElementById('verifyButton');
const message = document.getElementById('message');

// Focus on the next input box automatically when a digit is entered
otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
        if (input.value.length === 0 && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

// Verify OTP when the button is clicked
verifyButton.addEventListener('click', () => {
    const otp = Array.from(otpInputs).map(input => input.value).join('');
    
    // Dummy verification logic
    if (otp.length === 4) {
        message.textContent = `OTP ${otp} verified successfully!`;
        message.style.display = 'block';
        message.style.color = '#28a745'; // Green for success
    } else {
        message.textContent = 'Please enter a valid 4-digit OTP.';
        message.style.display = 'block';
        message.style.color = '#dc3545'; // Red for error
    }
});
