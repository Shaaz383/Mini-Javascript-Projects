// Sample data
const items = [
  "Item 1", "Item 2", "Item 3", "Item 4", "Item 5",
  "Item 6", "Item 7", "Item 8", "Item 9", "Item 10",
  "Item 11", "Item 12", "Item 13", "Item 14", "Item 15",
  "Item 16", "Item 17", "Item 18", "Item 19", "Item 20"
];

const itemsPerPage = 5; // Number of items to display per page
let currentPage = 1; // Current page number

// Function to render items for the current page
function renderItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // Clear existing items

  // Calculate start and end indices for slicing the array
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  
  // Slice the items array and render each item
  const currentItems = items.slice(start, end);
  currentItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'item';
      div.textContent = item;
      itemList.appendChild(div);
  });

  // Update pagination info
  document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${Math.ceil(items.length / itemsPerPage)}`;
  
  // Update button states
  document.getElementById('prevBtn').disabled = currentPage === 1;
  document.getElementById('nextBtn').disabled = currentPage === Math.ceil(items.length / itemsPerPage);
}

// Function to handle pagination button clicks
function handlePagination(direction) {
  if (direction === 'next' && currentPage < Math.ceil(items.length / itemsPerPage)) {
      currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
      currentPage--;
  }
  renderItems(); // Re-render items
}

// Event listeners for buttons
document.getElementById('nextBtn').addEventListener('click', () => handlePagination('next'));
document.getElementById('prevBtn').addEventListener('click', () => handlePagination('prev'));

// Initial render
renderItems();
