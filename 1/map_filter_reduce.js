const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let num2 = number.map((value) => {
  return value + 6;
});

console.log(num2);

const num3 = number.filter((value) => {
  return value > 6;
});

console.log(num3);
