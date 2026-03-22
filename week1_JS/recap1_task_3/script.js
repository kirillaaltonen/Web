const side1 = Number(prompt("Enter side 1:"));
const side2 = Number(prompt("Enter side 2:"));
const side3 = Number(prompt("Enter side 3:"));

let triangleType = "";

if (side1 === side2 && side2 === side3) {
  triangleType = "equilateral";
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  triangleType = "isosceles";
} else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
  triangleType = "scalene";
}

document.getElementById("result").innerHTML = `
  <p>Sides: ${side1}, ${side2}, ${side3}</p>
  <p>Triangle type: ${triangleType}</p>
`;
