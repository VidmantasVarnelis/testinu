// kintamojo vardas turetu prasideti su gs_
// pvz - gs_JusuNorimasPavadinimas
const gs_Number = parseInt(prompt('Iveskite skaiciu:'));
if (gs_Number)
	if (gs_Number % 2) console.log('nelyginis');
	else console.log('lyginis');
else console.log('neskaicius');
