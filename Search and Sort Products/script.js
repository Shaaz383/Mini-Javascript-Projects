const products = [
  { name: 'T-shirt', category: 'Clothing', price: 500, img: 'https://via.placeholder.com/250x300' },
  { name: 'Sneakers', category: 'Footwear', price: 2000, img: 'https://via.placeholder.com/250x300' },
  { name: 'Watch', category: 'Accessories', price: 1500, img: 'https://via.placeholder.com/250x300' },
  { name: 'Jeans', category: 'Clothing', price: 1200, img: 'https://via.placeholder.com/250x300' },
  { name: 'Sandals', category: 'Footwear', price: 800, img: 'https://via.placeholder.com/250x300' },
];

let filteredProducts = [...products];

// Initial display of products
function displayProducts(products) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';

  products.forEach(product => {
      const productCard = `
          <div class="product-card">
              <img src="${product.img}" alt="${product.name}">
              <div class="card-content">
                  <h3>${product.name}</h3>
                  <p>${product.category}</p>
                  <p class="price">₹${product.price}</p>
              </div>
          </div>
      `;
      productGrid.innerHTML += productCard;
  });
}

displayProducts(filteredProducts);

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));
  displayProducts(filteredProducts);
});

// Category filter functionality
const categoryFilters = document.querySelectorAll('.category-filter');
categoryFilters.forEach(filter => {
  filter.addEventListener('change', () => {
      const selectedCategories = Array.from(categoryFilters)
          .filter(input => input.checked)
          .map(input => input.value);
      
      filteredProducts = products.filter(product => 
          selectedCategories.length === 0 || selectedCategories.includes(product.category)
      );
      
      displayProducts(filteredProducts);
  });
});

// Sort functionality
const sortSelect = document.getElementById('sortSelect');
sortSelect.addEventListener('change', () => {
  const sortOption = sortSelect.value;
  
  if (sortOption === 'priceAsc') {
      filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceDesc') {
      filteredProducts.sort((a, b) => b.price - a.price);
  }
  
  displayProducts(filteredProducts);
});
