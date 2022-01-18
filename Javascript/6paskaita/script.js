const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
	event.preventDefault();
	// console.log(usernameEl.value);
	// console.log(emailEl.value);
	// console.log(passwordEl.value);
	// if (usernameEl.value === '') {
	// 	alert('Iveskite username');
	// }
	// if (!usernameEl.value) {
	// 	// usernameEl.parentElement.className = 'error';
	// 	// usernameEl.className = 'error2';
	// 	// usernameEl.classList
	// 	// const arr = usernameEl.classList;
	// } else {
	// 	usernameEl.className = '';
	// }
	const usernameError = setErrors(usernameEl);
	const emailError = setErrors(emailEl);
	const passwordError = setErrors(passwordEl);
	if (usernameError || emailError || passwordError) return;

	console.log(usernameEl.classList);
}

function setErrors(element) {
	if (
		!element.value ||
		(element.id === 'email' && element.value.indexOf('@') === -1)
	) {
		element.className = 'error2';
		return true;
	} else {
		element.className = '';
		return false;
	}
}
