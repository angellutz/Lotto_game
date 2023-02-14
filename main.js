// importing html tags
const ticket = document.querySelector("#ticket-container");
const options = document.querySelector("#options");
const choicesContainer = document.querySelector("#choices-container");
const winningNumContainer = document.querySelector(
  "#winning-numbers-container"
);

for (let i = 1; i < 51; i++) {
  //create rounded containers for numbers
  const ticketNumContainer = document.createElement("div");
  ticketNumContainer.setAttribute(
    "class",
    "rounded-num-container ticket-num-container"
  );
  //create span element to store the numbers
  const ticketNumber = document.createElement("span");
  ticketNumber.setAttribute("class", "fs-6 fw-bold");
  ticketNumber.textContent = i;
  ticketNumContainer.appendChild(ticketNumber);
  options.appendChild(ticketNumContainer);

  // create event listener for targeting and displaying the numbers
  ticketNumContainer.addEventListener("click", () => {
    displayNumbers(choicesContainer, i);
    ticketNumContainer.style.backgroundColor = "#A3A2DF";
  });
}

// function to display numbers after user selection or being generated
function displayNumbers(container, index) {
  const numberContainer = document.createElement("div");
  numberContainer.setAttribute(
    "class",
    "rounded-num-container chosen-num-container border-white"
  );
  numberContainer.style.backgroundColor = "#A3A2DF";
  const number = document.createElement("span");
  number.setAttribute("class", "fs-2 fw-bold text-white");
  number.textContent = index;
  numberContainer.appendChild(number);
  container.appendChild(numberContainer);
}
