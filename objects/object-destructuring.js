/** @format */

const carsObject = {
	name: 'Civic',
	manufacturer: 'Honda',
	year: '2012',
	price: '75K USD',
	gears: 6,
};

const { manufacturer, name } = carsObject;
console.log(manufacturer, name);

const { status } = carsObject;
console.log(status);

// Function Object destructing
function getValues(obj) {
	const { name, manufacturer } = obj;
	if (name === 'Civic') return `My favorite car is ${name}`;
	return manufacturer;
}

console.log(getValues(carsObject));

// Functions Parameter Destructuring
function getCarDetails({ name, manufacturer }) {
	if (name === 'Civic') return `My favorite car is ${name}`;
	return manufacturer;
}

console.log(getValues(carsObject));
