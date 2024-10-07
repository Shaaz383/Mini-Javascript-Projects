// Get input elements and display fields
const bookTitleInput = document.getElementById('bookTitle');
const authorNameInput = document.getElementById('authorName');
const publisherInput = document.getElementById('publisher');
const yearInput = document.getElementById('year');

const bookTitleDisplay = document.getElementById('bookTitleDisplay');
const authorNameDisplay = document.getElementById('authorNameDisplay');
const publisherDisplay = document.getElementById('publisherDisplay');
const yearDisplay = document.getElementById('yearDisplay');

// Update the book title in real time
bookTitleInput.addEventListener('input', function () {
    bookTitleDisplay.textContent = bookTitleInput.value || 'Book Title';
});

// Update the author name in real time
authorNameInput.addEventListener('input', function () {
    authorNameDisplay.textContent = authorNameInput.value || 'Author Name';
});

// Update the publisher name in real time
publisherInput.addEventListener('input', function () {
    publisherDisplay.textContent = publisherInput.value || 'Publisher';
});

// Update the year of publication in real time
yearInput.addEventListener('input', function () {
    yearDisplay.textContent = yearInput.value || 'Year';
});
