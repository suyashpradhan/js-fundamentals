/** @format */

// Rest Syntax
function sum(...rest) {
	let result = 0;

	rest.forEach((num) => {
		result += num * 2;
	});

	return result;
}

console.log(sum(2, 3, 4));

//! Invalid rest syntax

//function multiply(...args, ...rest) {}

//! Spread Syntax

// Cloning 2 arrays
const numbers = [1, 2, 3];
const alphabets = ['A', 'B', 'C'];
const alphaNumberic = [...numbers, ...alphabets];
console.log(alphaNumberic);

// Usage with Objects
const user = {
	name: 'Suyash',
	age: '26',
};

const designation = {
	jobLocation: 'Bengaluru',
	job: 'Frontend Developer',
};

const info = { ...user, ...designation };
console.log(info);

//Conflicting Objects Values
const cssStyles = {
	background: 'red',
	borderWidth: '2',
	zIndex: 5,
};

const buttonStyles = {
	...cssStyles,
	zIndex: 10,
};

const globalStyles = { ...buttonStyles };
console.log(globalStyles);
