/** @format */

const people = [
	{ name: 'Aisha', grade: 89 },
	{ name: 'Bruno', grade: 55 },
	{ name: 'Carlos', grade: 68 },
	{ name: 'Dacian', grade: 71 },
	{ name: 'Esther', grade: 40 },
];

// Foreach
people.forEach((item) => console.log(item.name));

//Filter
const grades = people.filter((student) => {
	return student.grade >= 70;
});
console.log(grades);

//Map
const studentNames = people.map((student) => {
	if (student.grade > 70) {
		return `${student.name} scored ${student.grade} which is great`;
	} else {
		return `${student.name} scored ${student.grade} which is bad`;
	}
});
console.log(studentNames);
