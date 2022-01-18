// class Car {
// 	constructor(name, color, age) {
// 		this.name = name;
// 		this.color = color;
// 		this.age = age;
// 		// this.getColor = function () {
// 		// 	console.log(`Spalva - ${this.color}`);
// 		// };
// 	}
// 	getColor() {
// 		console.log(`Spalva - ${this.color}`);
// 	}
// }
// abstract
class Car {
	constructor(name, color, age) {
		if (this.constructor === Car) {
			throw new Error('Negalima iniciuoti abstrakcios klases');
		}
		let myage = age;
		this.name = name;
		this.color = color;
		const calcAge = function () {
			return myage + 10;
		};
		this.age = calcAge();
	}
	getColor() {
		console.log(`Spalva - ${this.color}`);
	}
}
// const car = new Car('BMW', 'black', 2010);
// console.log(car.getColor());

// paveldejimas

// class BMW extends Car {
// 	constructor(name, color, age, doorSize) {
// 		super(name, color, age);
// 		this.doorSize = doorSize;
// 	}
// }

//Poly
class BMW extends Car {
	constructor(name, color, age, doorSize) {
		super(name, color, age);
		this.doorSize = doorSize;
	}
	getColor() {
		return 'Tai yra kita funkcija';
	}
}
class Audi extends Car {
	constructor(name, color, age, doorSize) {
		super(name, color, age);
		this.doorSize = doorSize;
	}
}
const bmw = new BMW('car', 'black', 2006, 4);
const audi = new Audi('car', 'black', 2006, 4);
console.log(bmw.getColor());
console.log(audi.getColor());

const nameEl = document.getElementById('fullname');

nameEl.addEventListener('change', (e) => {
	let currentValue = e.target.value;
	const firstName = currentValue.split(' ')[0];
	const lastName = currentValue.split(' ')[1];
	const person = new Person(firstName, lastName);
	person.displayName();
	console.log(person);
});

class Person {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}
	displayName() {
		const tableBody = document.querySelector('tbody');
		const tableRow = document.createElement('tr');
		const tableCell = document.createElement('td');
		const tableCell2 = document.createElement('td');
		tableCell.textContent = this.name;
		tableCell2.textContent = this.lastName;
		tableRow.append(tableCell);
		tableRow.append(tableCell2);
		tableBody.append(tableRow);
	}
}
console.log(nameEl);
