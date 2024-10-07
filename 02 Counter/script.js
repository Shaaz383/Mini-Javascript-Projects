const countDisplay = document.getElementById("countDisplay");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;
}
