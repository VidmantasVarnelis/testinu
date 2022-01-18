// kintamojo vardas turetu prasideti su au_
// pvz - au_JusuNorimasPavadinimas

let au_nbr = prompt('Iveskite skaiciu:');

if (isNaN(au_nbr)) {
	console.log('Ne skaicius');
} else if (au_nbr % 2 === 0) {
	console.log('Lyginis');
} else {
	console.log('Nelyginis');
}
