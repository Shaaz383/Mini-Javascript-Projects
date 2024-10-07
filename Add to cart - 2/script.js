const cart = [];
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const closeCartBtn = document.getElementById('close-cart');

// Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = button.parentElement;
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        // Check if product already in cart
        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        updateCart();
    });
});

// Update Cart
function updateCart() {
    // Update cart count
    cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Update cart items in modal
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('fade-in'); // Add animation on item addition
        li.innerHTML = `
            ${item.name} - $${item.price} x 
            <button class="qty-btn" data-name="${item.name}" data-action="decrement">-</button>
            ${item.quantity}
            <button class="qty-btn" data-name="${item.name}" data-action="increment">+</button>
            <button class="remove-item-btn" data-name="${item.name}">Remove</button>
        `;
        cartItemsList.appendChild(li);
    });

    // Calculate and display total
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const index = cart.findIndex(item => item.name === name);
            cart.splice(index, 1);
            updateCart();
        });
    });

    // Add event listeners to quantity buttons
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const action = this.getAttribute('data-action');
            const item = cart.find(item => item.name === name);

            if (action === 'increment') {
                item.quantity += 1;
            } else if (action === 'decrement' && item.quantity > 1) {
                item.quantity -= 1;
            }
            updateCart();
        });
    });
}

// Open Cart Modal
cartIcon.addEventListener('click', function () {
    cartModal.style.display = 'block';
});

// Close Cart Modal
closeCartBtn.addEventListener('click', function () {
    cartModal.style.display = 'none';
});

// Checkout (for now just clear cart)
checkoutBtn.addEventListener('click', function () {
    alert('Thank you for your purchase!');
    cart.length = 0;
    updateCart();
    cartModal.style.display = 'none';
});
