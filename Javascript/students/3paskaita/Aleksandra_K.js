// kintamojo vardas turetu prasideti su ak_
// pvz - ak_JusuNorimasPavadinimas

let ak_number = prompt('Iveskite numeri');

if (isNaN(ak_number)) {
	console.log('Ne skaicius');
} else if (ak_number % 2 === 0) {
	console.log('Lyginis');
} else {
	console.log('Nelyginis');
}
