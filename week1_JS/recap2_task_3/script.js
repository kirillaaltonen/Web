const numbers = [];

while (true) {
  const input = prompt("Enter a number (or 'done' to finish):");

  if (input === "done") {
    break;
  }

  numbers.push(Number(input));
}

let evenNumbers = [];

for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById("result").innerHTML =
    "Even Numbers: " + evenNumbers.join(", ");
} else {
  document.getElementById("result").innerHTML = "Even Numbers: None";
}
