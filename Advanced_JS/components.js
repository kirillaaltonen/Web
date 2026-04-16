// Component: Restaurant Table Row
export const restaurantRow = (restaurant) => {
  const { name, company } = restaurant;
  
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
  `;
  
  return row;
};

// Component: Restaurant Modal Content
export const restaurantModal = (restaurant, menu) => {
  const { name, address, postalCode, city, phone, company } = restaurant;
  const { courses } = menu;
  
  // Generate menu items HTML
  let menuHtml = '<ul>';
  courses.forEach((menuItem) => {
    const price = menuItem.price ?? '?€';
    const diets = menuItem.diets ?? '';
    menuHtml += `<li>${menuItem.name}, ${price}. ${diets}</li>`;
  });
  menuHtml += '</ul>';
  
  // Return complete modal HTML
  return `
    <h1>${name}</h1>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>City:</strong> ${postalCode}, ${city}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <h2>Menu</h2>
    ${menuHtml}
  `;
};
