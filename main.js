// importing html tags
const ticket = document.querySelector("#ticket-container");
const options = document.querySelector("#options");
const choicesContainer = document.querySelector("#choices-container");
const winningNumContainer = document.querySelector(
  "#winning-numbers-container"
);

const line = document.querySelector("hr");

// declare a variable to update the number of clicks
let click = 0;

// declare a variable to store selected numbers from the ticket
const selectedNumbers = [];

// declare a variable to store each group container element
const selectedGroupContainer = [];

for (let i = 1; i < 51; i++) {
  // create rounded container for ticket number
  const ticketNumContainer = document.createElement("div");
  ticketNumContainer.setAttribute(
    "class",
    "rounded-num-container ticket-num-container"
  );

  // create span element to display the ticket number
  const ticketNumber = document.createElement("span");
  ticketNumber.setAttribute("class", "fs-6 fw-bold");
  ticketNumber.textContent = i;

  // connect the elements with their parents to be shown in browser
  ticketNumContainer.appendChild(ticketNumber);
  options.appendChild(ticketNumContainer);

  // create event listener to display the users selected numbers
  ticketNumContainer.addEventListener("click", () => {
    // check if selectedNumbers array contains user selected number
    let duplicate = selectedNumbers.includes(i);

    // store the user selected index of selectedNumbers array from the ticket
    let indexOfSelectedNum = selectedNumbers.indexOf(i);

    // store the index of selectedGroupContainer
    let indexOfGroupContainer = selectedGroupContainer.indexOf(i); // -->> CHECK IN CONSOLE

    // if user clicks an identical number on the ticket
    if (duplicate === true) {
      // remove the user selected index from the selectedNumbers array from the ticket
      selectedNumbers.splice(indexOfSelectedNum, 1);

      selectedGroupContainer.splice(indexOfGroupContainer, 1); // -->> CHECK IN CONSOLE
      // choicesContainer.removeChild(selectedGroupContainer[3]); // -->> FIXME -->> find a way to generate dinamicaly selectedGroupContainer's index
      ticketNumContainer.classList.toggle("selected-numbers");
      click--; // decreasing clicks
    }
    // if user clicks on at least one number and maximum of six and unique number
    if (click < 6 && duplicate === false) {
      // calling the function below to populate user selected numbers on the ticket and showcase them below
      displayNumbers(choicesContainer, i);
      // CSS classes to style ticket number and horizontal line
      ticketNumContainer.classList.add("selected-numbers");
      line.classList.add("show");
      click++; // increasing clicks
    } else if (selectedNumbers.length === 0) {
      line.classList.remove("show");
    }
  });
}

// function to display BIG numbers after user selection or being generated
function displayNumbers(container, index) {
  // arguments that will be replaced with other variables when invoking the function above

  // create a group that contains the numberContainer, number and the remove button icon
  const groupContainer = document.createElement("div");
  // CSS class to style groupContainer
  groupContainer.classList.add("group-container");

  // create delay for the number to appear
  setTimeout(() => {
    // CSS class to create a transition from invisible to visible
    groupContainer.classList.add("opacity-off");
  }, 300); // >> 3seconds

  // create rounded container for the number
  const numberContainer = document.createElement("div");
  numberContainer.setAttribute(
    "class",
    "rounded-num-container play-num-container border-white"
  );
  numberContainer.style.backgroundColor = "var(--user-select)";

  // create number
  const number = document.createElement("span");
  number.setAttribute("class", "fs-2 fw-bold text-white");

  // allocate the user selected choice from the ticket to the number content
  number.textContent = index;

  // create icon to remove groupContainer
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa-regular fa-circle-xmark user-remove-icon");

  // connect the elements with their parents to be shown in browser
  numberContainer.appendChild(number);
  groupContainer.appendChild(numberContainer);
  groupContainer.appendChild(icon);
  container.append(groupContainer);

  // populate selectedNumbers array with user's choice
  selectedNumbers.push(index);

  // populate selectedGroupContainer array
  selectedGroupContainer.push(groupContainer);

  // FIXME ->> EVENT LISTENER THAT SUPPOSE TO DELETE GROUP CONTAINER BUT NOT WORKING
  for (let j = 0; j < selectedNumbers.length; j++) {
    icon.addEventListener("click", () => {
      icon.parentNode.classList.add("hide");
      console.log("remove");
    });
  }
}
