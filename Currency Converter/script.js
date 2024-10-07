const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("result");

const apiKey = 'YOUR_API_KEY'; // Replace with your API key from an exchange rate API
const apiUrl = 'https://openexchangerates.org/api/currencies.json';

async function fetchCurrencies() {
    const response = await fetch(apiUrl);
    const currencies = await response.json();
    
    for (const currency in currencies) {
        const option = document.createElement("option");
        option.value = currency;
        option.textContent = `${currency} - ${currencies[currency]}`;
        fromCurrency.appendChild(option);
        toCurrency.appendChild(option.cloneNode(true));
    }
}

async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    if (amount === '' || from === '' || to === '') {
        alert("Please fill in all fields.");
        return;
    }

    const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${from}`);
    const data = await response.json();
    
    const rate = data.conversion_rates[to];
    const result = (amount * rate).toFixed(2);
    resultDisplay.textContent = `${amount} ${from} = ${result} ${to}`;
}

convertBtn.addEventListener("click", convertCurrency);

// Initialize the currency dropdowns
fetchCurrencies();
