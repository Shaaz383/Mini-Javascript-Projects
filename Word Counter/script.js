const textInput = document.getElementById("textInput");
const letterCountDisplay = document.getElementById("letterCount");
const wordCountDisplay = document.getElementById("wordCount");

textInput.addEventListener("input", () => {
    const text = textInput.value;

    // Count letters
    const letters = text.replace(/\s+/g, '').length;
    letterCountDisplay.textContent = letters;

    // Count words
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    wordCountDisplay.textContent = words;
});
