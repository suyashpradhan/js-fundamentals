/** @format */

// Traditional Function
function sum(number) {
	return number + 5;
}

console.log(sum(5));

// Tradition function without return (it throws undefined)
function multiply(number) {
	return number * 5;
}
console.log(multiply(4));

//Arrow Function: Implicit Return
const authorization = (user) => `${user} is authorized`;
console.log(authorization('Suyash'));

//Arrow Function: Explicit Return
const userRole = (user, role) => {
	if (user === 'Suyash') {
		return `Suyash is a ${role}`;
	}
	return `${user} is Unathorized`;
};

console.log(userRole('John', 'Admin'));

//Function returning object
function makeObject() {
	return {
		hi: 5,
	};
}
console.log(makeObject());

const makeObjectUsingArrowFunction = () => {
	return { hi: 5 };
};
console.log(makeObjectUsingArrowFunction());
