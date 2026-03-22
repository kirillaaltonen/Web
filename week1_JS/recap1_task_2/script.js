const x1 = Number(prompt("Enter x1:"));
const y1 = Number(prompt("Enter y1:"));
const x2 = Number(prompt("Enter x2:"));
const y2 = Number(prompt("Enter y2:"));

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.getElementById("result").innerHTML = `
  <p>Point 1: (${x1}, ${y1})</p>
  <p>Point 2: (${x2}, ${y2})</p>
  <p>Distance: ${distance.toFixed(2)}</p>
`;
