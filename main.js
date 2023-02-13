// importing html tags
const ticket = document.querySelector('#ticket-container');
const options = document.querySelector('#options');

for (let i = 1; i < 50; i++) {
	//create rounded container for numbers
	const numberContainer = document.createElement('div');
	numberContainer.setAttribute('class', 'rounded-container');
	//create span element to store the numbers
	const number = document.createElement('span');
	number.setAttribute('class', 'fs-6 fw-bold');
	number.textContent = i;
	numberContainer.appendChild(number);
	options.appendChild(numberContainer);
}
