// kintamojo vardas turetu prasideti su rz_
// pvz - rz_JusuNorimasPavadinimas

const rz_Number = parseInt(prompt('Iveskite norima skaciu'));
if (rz_Number % 2 === 0) {
	console.log('Lyginis');
} else if (rz_Number % 2 === 1) {
	console.log('Nelyginis');
} else console.log('neaiskus skaicius');
