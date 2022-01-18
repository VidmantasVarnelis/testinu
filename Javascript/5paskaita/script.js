//
// getElementByiD

// const heading = document.getElementById('heading');
// console.log(heading);

// 1 budas - be return

// syntax: function Jusu_Pavadinimas() {}  Jusu_Pavadinimas()

// Paprasta funkcija be argumentu ir parametru
// function getUserName() {
// 	console.log('My name is Vidmantas');
// }

// getUserName();
// Parametrai vadinami funkcijos skliausteliuose
function getUserName(name, surname, year) {
	// console.log(
	// 	'My name is ' + name + ' surname is ' + surname + ' born at ' + year
	// );
	console.log(`My name is ${name} surname is ${surname} born at ${year}`);
}
// argumentai tai reiksmes irasomos i funkcijos iskvietimo skliastelius
getUserName('Vidmantas', 'Petras', '1988-04-03');
// Funkcija kuri nera iskvieciama
// console.log(getUserName);

// Funkcija su return;
function addNumbers(x, y) {
	const sum = x + y;
	return sum;
}
const value = addNumbers(5, 15);
const value2 = addNumbers(5, 455);
const value3 = addNumbers(5, 1255);
const value4 = addNumbers(5, 655);
const value5 = addNumbers(135135, 15);
console.log('Value from function return', value);
console.log('Value from function return', value2);
console.log('Value from function return', value3);
console.log('Value from function return', value4);
console.log('Value from function return', value5);

// arrow functions - es6 feature
const arrowFunction = (name, surname) => {
	console.log(this);
	console.log('Test arrow function');
};
const object = {
	test: function () {
		console.log('this is from object', this);
	},
};
object.test();
arrowFunction('Vidmantas', 'Petras');

// Event listener
const btnEl = document.getElementById('mybtn');

// btnEl.addEventListener('click', buttonClick);

// function buttonClick(event) {
// 	// event objekta dazniausiai naudosim su target
// 	console.log(btnEl);
// 	console.log('event', event.target);
// 	alert('Button is clicked');
// }

// event listener change

// const input = document
// 	.getElementById('mytext')
// 	.addEventListener('change', changeListener);

// function changeListener() {
// 	alert('Typing....');
// }

// 4 užduotis

// let count = 0;

// btnEl.addEventListener('click', addHeadingCount);
// const headingEl = document.getElementById('heading');
// function addHeadingCount() {
// 	// 1 budas
// 	// count = count + 1;
// 	// 2 budas
// 	// count += 1;
// 	// count++;
// 	headingEl.textContent++;
// }

// 8 uzduotis

const randomNumber = Math.floor(Math.random() * 3 + 1);

const firstBtnEl = document.getElementById('firstBtn');
const secondBtnEl = document.getElementById('secondBtn');
const thirdBtnEl = document.getElementById('thirdBtn');

//arrow function
firstBtnEl.addEventListener(
	'click',
	(event) => {
		console.log(event.target.value);
	},
	{ once: true }
);
secondBtnEl.addEventListener('click', function () {
	checkRandomNumber('secondBtn');
});
thirdBtnEl.addEventListener('click', function () {
	checkRandomNumber('thirdBtn');
});

function checkRandomNumber(variant) {
	switch (variant) {
		case 'firstBtn':
			randomNumber === 1 ? alert('Yay') : alert('Nay');
			break;
		case 'secondBtn':
			randomNumber === 2 ? alert('Yay') : alert('Nay');
			break;
		case 'thirdBtn':
			randomNumber === 3 ? alert('Yay') : alert('Nay');
			break;
		default:
			alert('Bad btn');
	}
}
