const arr = [1, 2, 4];

function avg(a, b, c) {
  return a + b + c / 3;
}

let a = avg(...arr);
console.log(a);

let b = [...arr];
console.log(b);

const obj1 = {
  name: "John",
  age: 25,
  city: "New York",
};

const obj2 = { ...obj1, city: "Dhaka" };

console.log(obj2);

let { name, age, city } = obj1;
console.log(obj1);
