// kintamojo vardas turetu prasideti su el_
// pvz - el_JusuNorimasPavadinimas
let el_number = prompt('Number please:');
if (el_number % 2 == 0) {
	console.log('Even');
} else if (el_number % 2 == 1 || el_number % 2 == -1) {
	console.log('Odd');
} else {
	console.log('umm?');
}
