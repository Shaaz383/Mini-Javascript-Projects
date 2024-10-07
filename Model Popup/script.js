const modal = document.getElementById("modal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    modal.style.opacity = "1"; // Make modal visible
    modal.querySelector('.modal-content').style.transform = 'translateY(0)'; // Slide in animation
}

// Function to close the modal
function closeModal() {
    modal.style.opacity = "0"; // Fade out
    modal.querySelector('.modal-content').style.transform = 'translateY(-50px)'; // Slide up animation
    setTimeout(() => {
        modal.style.display = "none"; // Hide modal after animation
    }, 300); // Match the duration with CSS transition duration
}

// Event listeners for opening and closing the modal
openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

// Close the modal when clicking anywhere outside of it
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        closeModal();
    }
});
