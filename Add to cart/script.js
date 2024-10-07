// Cart logic
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

// Function to remove item from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}

// Function to render cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalItems = document.getElementById('total-items');

    cartItems.innerHTML = ''; // Clear cart display

    cart.forEach(item => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - $${item.price} (x${item.quantity})</p>
                <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        `;
    });

    totalItems.textContent = cart.reduce((total, item) => total + item.quantity, 0); // Total items
}

// Event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});
