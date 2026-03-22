// 1. fruits array
const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// 2. print fruits
console.log("Fruits:", fruits);

// 3. length
console.log("Length of Fruits:", fruits.length);

// 4. index 2
console.log("Element at index 2:", fruits[2]);

// 5. last element
console.log("Last element:", fruits[fruits.length - 1]);

// 6. empty vegetables array
const vegetables = [];

// 7. ask user for 3 vegetables
for (let i = 1; i <= 3; i++) {
  const veg = prompt(`Enter vegetable ${i}:`);
  vegetables.push(veg);
}

// 8. print vegetables
console.log("Vegetables:", vegetables);

// 9. length
console.log("Length of Vegetables:", vegetables.length);
