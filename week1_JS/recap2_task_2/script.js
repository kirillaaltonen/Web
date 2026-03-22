const numbers = [];

// 1–2. get 5 numbers
for (let i = 1; i <= 5; i++) {
  const num = Number(prompt(`Enter number ${i}:`));
  numbers.push(num);
}

// 3. display
console.log("Numbers:", numbers);

// 4. search number
const search = Number(prompt("Enter number to search:"));

// 5. includes
if (numbers.includes(search)) {
  console.log(`Number ${search} is found`);
} else {
  console.log(`Number ${search} is NOT found`);
}

// 6. remove last
numbers.pop();

// 7. display updated
console.log("Updated numbers:", numbers);

// 8. sort ascending
numbers.sort((a, b) => a - b);

// 9. display sorted
console.log("Sorted numbers:", numbers);
