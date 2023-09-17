const number = [1, 2, 3, 4];

let num2 = number.map((value) => {
  return value + 6;
});

console.log(num2);

const num3 = number.filter((value) => {
  return value > 6;
});

console.log(num3);

const num4 = number.reduce((val1, val2) => {
  return val1 * val2;
});

console.log(num4);
