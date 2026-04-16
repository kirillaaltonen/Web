// Component: Restaurant Table Row
export const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name || 'Unknown'}</td>
    <td>${company || 'Not specified'}</td>
  `;
  
  return row;
};

// Component: Restaurant Modal Content
export const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses = [] } = menu;
  
  // Generate menu items HTML using map and filter
  const menuHtml = courses.length > 0 
    ? '<ul>' + 
      courses
        .map((menuItem) => {
          const price = menuItem.price ?? '?€';
          const diets = menuItem.diets ?? '';
          return `<li>${menuItem.name}, ${price}. ${diets}</li>`;
        })
        .join('') +
      '</ul>'
    : '<p><em>No menu items available</em></p>';
  
  // Return complete modal HTML with safe defaults
  return `
    <h1>${name || 'Restaurant'}</h1>
    <p><strong>Address:</strong> ${address || 'Not specified'}</p>
    <p><strong>City:</strong> ${postalCode || '?'}, ${city || 'Not specified'}</p>
    <p><strong>Phone:</strong> ${phone || 'Not specified'}</p>
    <p><strong>Company:</strong> ${company || 'Not specified'}</p>
    <h2>Menu</h2>
    ${menuHtml}
  `;
};
