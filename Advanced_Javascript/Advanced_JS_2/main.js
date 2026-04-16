// Import modules
import { baseUrl } from './variables.js';
import { fetchData } from './utils.js';
import { restaurantRow, restaurantModal } from './components.js';

// Get DOM elements
const restaurantSelect = document.getElementById('restaurantSelect');
const restaurantTable = document.getElementById('restaurantTable');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const filterButtons = document.querySelectorAll('.filter-btn');
const errorMessage = document.getElementById('errorMessage');

// Store all restaurants data
let allRestaurants = [];

// Load restaurants on page load
const loadRestaurants = async () => {
  try {
    const url = `${baseUrl}/search.php?s=`;
    const data = await fetchData(url);
    
    if (!data || !data.meals) {
      showError('Failed to load restaurants. Please try again later.');
      return;
    }
    
    allRestaurants = data.meals;
    
    // Populate dropdown using map method (modern approach)
    const options = allRestaurants.map((restaurant) => {
      const option = document.createElement('option');
      option.value = restaurant.idMeal;
      option.textContent = restaurant.strMeal;
      return option;
    });
    
    // Add all options to dropdown using forEach
    options.forEach((option) => {
      restaurantSelect.appendChild(option);
    });
    
    // Handle restaurant selection
    restaurantSelect.addEventListener('change', async (event) => {
      const selectedId = event.target.value;
      clearError();
      
      if (selectedId) {
        await displayRestaurant(selectedId, allRestaurants);
      }
    });
    
    // Setup filter buttons
    setupFilterButtons();
    
  } catch (error) {
    console.error('Error loading restaurants:', error);
    showError('An unexpected error occurred. Please refresh the page.');
  }
};

// Setup filter buttons for Sodexo and Compass
const setupFilterButtons = () => {
  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const company = event.target.dataset.company;
      
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      event.target.classList.add('active');
      
      clearError();
      filterAndDisplayRestaurants(company);
    });
  });
};

// Filter restaurants by company using filter method
const filterRestaurantsByCompany = (company) => {
  return allRestaurants.filter((restaurant) => 
    restaurant.company?.toLowerCase() === company.toLowerCase()
  );
};

// Display filtered restaurants
const filterAndDisplayRestaurants = (company) => {
  const filteredRestaurants = filterRestaurantsByCompany(company);
  
  if (filteredRestaurants.length === 0) {
    showError(`No restaurants found for company: ${company}`);
    restaurantTable.innerHTML = `
      <tr>
        <th>Name</th>
        <th>Company</th>
      </tr>
      <tr>
        <td colspan="2" class="empty-message">No restaurants found for this company</td>
      </tr>
    `;
    return;
  }
  
  // Display filtered restaurants in table
  displayRestaurantTable(filteredRestaurants);
};

// Display all restaurants (no filter)
const displayAllRestaurants = () => {
  filterButtons.forEach((btn) => btn.classList.remove('active'));
  clearError();
  displayRestaurantTable(allRestaurants);
};

// Display restaurants in table
const displayRestaurantTable = (restaurants) => {
  restaurantTable.innerHTML = '';
  
  // Create table header
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = `
    <th>Name</th>
    <th>Company</th>
  `;
  restaurantTable.appendChild(headerRow);
  
  // Use map to create rows, then forEach to add them
  const rows = restaurants.map((restaurant) => {
    const row = restaurantRow(restaurant);
    row.style.cursor = 'pointer';
    
    // Click to show modal
    row.addEventListener('click', async () => {
      try {
        await displayRestaurantModal(restaurant);
      } catch (error) {
        showError('Failed to load restaurant details. Please try again.');
      }
    });
    
    return row;
  });
  
  rows.forEach((row) => {
    restaurantTable.appendChild(row);
  });
};

// Display restaurant details in modal
const displayRestaurantModal = async (restaurant) => {
  // Fetch menu data
  const menuUrl = `${baseUrl}/lookup.php?i=${restaurant.idMeal}`;
  const menuData = await fetchData(menuUrl);
  
  if (!menuData) {
    showError('Failed to load restaurant menu.');
    return;
  }
  
  modal.innerHTML = restaurantModal(restaurant, menuData);
  modal.style.display = 'block';
};

// Display restaurant details
const displayRestaurant = async (restaurantId) => {
  const restaurant = allRestaurants.find((r) => r.idMeal === restaurantId);
  
  if (!restaurant) {
    showError('Restaurant not found.');
    return;
  }
  
  await displayRestaurantModal(restaurant);
};

// Error handling functions
const showError = (message) => {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
};

const clearError = () => {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
};

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Initialize app
loadRestaurants();
