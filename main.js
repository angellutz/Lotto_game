// @ts-nocheck
// importing html tags
const ticket = document.querySelector('#ticket-container');
const options = document.querySelector('#options');
const choicesContainer = document.querySelector('#choices-container');
const winningNumContainer = document.querySelector(
	'#winning-numbers-container',
);

//   declare a variable to update the number of clicks
let click = 0;

//   declare a variable to prevent duplicate numbers from being selected
const selectedNumbers = [];

for (let i = 1; i < 51; i++) {
	//create rounded container for number
	const ticketNumContainer = document.createElement('div');
	ticketNumContainer.setAttribute(
		'class',
		'rounded-num-container ticket-num-container',
	);

	//create span element to store the number
	const ticketNumber = document.createElement('span');
	ticketNumber.setAttribute('class', 'fs-6 fw-bold');
	ticketNumber.textContent = i;
	ticketNumContainer.appendChild(ticketNumber);
	options.appendChild(ticketNumContainer);

	// create event listener to display the users selected numbers
	ticketNumContainer.addEventListener('click', () => {
		click++;
		if (click > 6) {
			ticketNumContainer.removeEventListener;
		} else {
			displayNumbers(choicesContainer, i);
			ticketNumContainer.style.backgroundColor = 'var(--user-select)';
			ticketNumContainer.style.color = 'var(--primary-color)';
		}
	});
}

// function to display numbers after user selection or being generated
function displayNumbers(container, index) {
	const groupContainer = document.createElement('div');
	groupContainer.classList.add('group-container');
	const numberContainer = document.createElement('div');
	numberContainer.setAttribute(
		'class',
		'rounded-num-container play-num-container border-white',
	);
	numberContainer.style.backgroundColor = 'var(--user-select)';
	const number = document.createElement('span');
	number.setAttribute('class', 'fs-2 fw-bold text-white');
	number.textContent = index;

	// convert string to numbers from array
	selectedNumbers.push(parseInt(number.textContent));

	numberContainer.appendChild(number);
	groupContainer.appendChild(numberContainer);
	container.append(groupContainer);
}
