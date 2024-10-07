const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');

// Add click event to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        setRating(rating);
    });
});

// Set the rating
function setRating(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '⭐'; // Filled star
        } else {
            star.textContent = '☆'; // Hollow star
        }
    });
    ratingValue.textContent = rating; // Update the displayed rating
}
