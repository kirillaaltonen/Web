// Import modules
import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

// Get DOM elements
const restaurantSelect = document.getElementById('restaurantSelect');
const restaurantTable = document.getElementById('restaurantTable');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Load restaurants on page load
const loadRestaurants = async () => {
  const url = `${baseUrl}/search.php?s=`;
  const data = await fetchData(url);
  
  if (data && data.meals) {
    const restaurants = data.meals;
    
    restaurants.forEach((restaurant) => {
      const option = document.createElement('option');
      option.value = restaurant.idMeal;
      option.textContent = restaurant.strMeal;
      restaurantSelect.appendChild(option);
    });
    
    restaurantSelect.addEventListener('change', async (event) => {
      const selectedId = event.target.value;
      
      if (selectedId) {
        await displayRestaurant(selectedId, restaurants);
      }
    });
  }
};

const displayRestaurant = async (restaurantId, restaurants) => {
  const restaurant = restaurants.find((r) => r.idMeal === restaurantId);
  
  if (!restaurant) return;
  
  // Fetch menu data
  const menuUrl = `${baseUrl}/lookup.php?i=${restaurantId}`;
  const menuData = await fetchData(menuUrl);
  
  if (!menuData) return;
  
  restaurantTable.innerHTML = '';
  
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>Name</th>
    <th>Company</th>
  `;
  restaurantTable.appendChild(headerRow);
  
  // Add restaurant row using component
  const row = restaurantRow(restaurant);
  row.style.cursor = 'pointer';
  
  row.addEventListener('click', () => {
    modal.innerHTML = restaurantModal(restaurant, menuData);
    modal.style.display = 'block';
  });
  
  restaurantTable.appendChild(row);
};

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

loadRestaurants();
