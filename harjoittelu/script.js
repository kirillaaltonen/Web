function filter(arr) {
  return arr.filter((num) => num.määrä > 1);
}

const ostoskori = [
  { nimi: "Paita", hinta: 25, määrä: 2, alennus: null },
  { nimi: "Housut", hinta: null, määrä: 1, alennus: 10 },
  { nimi: "Sukat", hinta: 5, määrä: 0, alennus: 0 },
  { nimi: "Takki", hinta: 120, määrä: 1, alennus: undefined },
  { nimi: "Pipo", hinta: 15, määrä: 3, alennus: 5 },
];

filter(ostoskori);

function processStrings(arr) {
  return arr.filter((str) => str.length >= 5).map((str) => str.toUpperCase());
}
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
