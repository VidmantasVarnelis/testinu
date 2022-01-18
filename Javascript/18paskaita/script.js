const formEl = document.getElementById('myForm');
const bodyEl = document.querySelector('tbody');
class Person {
	constructor(name, lastname) {
		this.name = name;
		this.lastname = lastname;
	}
	displayName() {
		const tableRow = document.createElement('tr');
		const firstNameCell = document.createElement('td');
		const lastNameCell = document.createElement('td');
		firstNameCell.textContent = this.name;
		lastNameCell.textContent = this.lastname;
		tableRow.append(firstNameCell);
		tableRow.append(lastNameCell);
		bodyEl.append(tableRow);
	}
}
formEl.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputValue = event.target
		.querySelector('input')
		.value.trim()
		.split(' ');

	const firstName =
		inputValue[0].charAt(0).toUpperCase() +
		inputValue[0].slice(1).toLowerCase();
	const lastName =
		inputValue[1].charAt(0).toUpperCase() +
		inputValue[1].slice(1).toLowerCase();
	const person = new Person(firstName, lastName);
	person.displayName();
});

// task2

const arr = [1, 'sfsf', 245, 'saf', 'fas', 5];
// isNaN
console.log(arr.filter((item) => isNaN(item)));

//task3
function doubleNumbersInString(string) {
	return string
		.split('')
		.map((item) => {
			return item + item;
		})
		.join('');
}
console.log(doubleNumbersInString('124354263426'));
const array = [1, 245, 325, 64, 75, 346, 436];
// console.log(
// 	array.reduce(
// 		(acc, curr) => {
// 			if (curr % 2 === 0) acc.even++;
// 			else acc.odd++;

// 			return acc;
// 		},
// 		{
// 			even: 0,
// 			odd: 0,
// 		}
// 	)
// );
// console.log(
// 	array.reduce(
// 		(acc, curr) => (curr % 2 === 0 ? (acc.even += 1) : (acc.odd += 1)),
// 		{
// 			even: 0,
// 			odd: 0,
// 		}
// 	)
// );
