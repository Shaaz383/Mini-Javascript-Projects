// Selecting DOM Elements
const loanAmountInput = document.getElementById('loanAmount');
const interestRateInput = document.getElementById('interestRate');
const loanTenureInput = document.getElementById('loanTenure');
const calculateBtn = document.getElementById('calculateBtn');

const resultSection = document.getElementById('resultSection');
const monthlyEMIElement = document.getElementById('monthlyEMI');
const totalInterestElement = document.getElementById('totalInterest');
const totalPaymentElement = document.getElementById('totalPayment');

const scheduleSection = document.getElementById('scheduleSection');
const scheduleBody = document.getElementById('scheduleBody');

// EMI Calculation Function
function calculateEMI(loanAmount, annualInterestRate, loanTenure) {
    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfMonths = loanTenure * 12;

    const emi = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
               (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    return emi;
}

// Calculate and Display Results
calculateBtn.addEventListener('click', () => {
    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    const loanTenure = parseInt(loanTenureInput.value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert("Please enter valid input");
        return;
    }

    // EMI Calculation
    const monthlyEMI = calculateEMI(loanAmount, interestRate, loanTenure).toFixed(2);
    const totalPayment = (monthlyEMI * loanTenure * 12).toFixed(2);
    const totalInterest = (totalPayment - loanAmount).toFixed(2);

    // Display Results
    resultSection.style.display = 'block';
    monthlyEMIElement.textContent = monthlyEMI;
    totalInterestElement.textContent = totalInterest;
    totalPaymentElement.textContent = totalPayment;

    // Display Amortization Schedule
    displayAmortizationSchedule(loanAmount, interestRate, loanTenure, monthlyEMI);
});

// Display Amortization Schedule
function displayAmortizationSchedule(loanAmount, annualInterestRate, loanTenure, emi) {
    scheduleBody.innerHTML = ''; // Clear previous schedule
    scheduleSection.style.display = 'block';

    let balance = loanAmount;
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    for (let i = 1; i <= loanTenure * 12; i++) {
        const interest = (balance * monthlyInterestRate).toFixed(2);
        const principal = (emi - interest).toFixed(2);
        balance = (balance - principal).toFixed(2);

        const row = `
            <tr>
                <td>${i}</td>
                <td>₹${principal}</td>
                <td>₹${interest}</td>
                <td>₹${emi}</td>
                <td>₹${balance}</td>
            </tr>
        `;
        scheduleBody.innerHTML += row;

        if (balance <= 0) break;
    }
}
