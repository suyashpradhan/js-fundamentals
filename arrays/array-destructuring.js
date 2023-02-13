/** @format */
// Creating an array
const arr = [1, 2, 3];
console.log(arr);

// Destructuring an array
const [one, two, three] = arr;
console.log(two);

// Destructuring while skipping a value
const cars = ['Audi', 'BMW', 'Porsche'];
const [, second, third] = cars;
console.log(second);
