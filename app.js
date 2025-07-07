//console.log("This is connected")

/* User stories for this lab:

As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.


//Pseudo code

1) Constants = button values
    variables = buttons user selects, output

2) Handle user clicking multiple buttons
    Select two numbers = event listeners
    equation of two numbers (add, subtract, multiply, divide) = event listeners

3) Output of equation = functions

4) Clear all operations & start from 0 = event listener + functions


//2 ways t do this> each button at a time, or forEach loop to iterate over everything at once



/*-------------------------------- Constants --------------------------------*/

const numbers = [1,2,3,4,5,6,7,8,9]
const operators = ["+", "-", "*", "/"]
const equals = ["="]


const buttons = document.querySelectorAll(".button");


//Why doesn't the below way work? OH because this is reffering to the CSS class, not the HTML
//const buttonNumber = document.querySelectorAll(".button-Number");
//const buttonOperator = document.querySelectorAll."#buttonOperator";
//const buttonEquals = document.querySelector("#button equals");
//const calculator = document.querySelector('#calculator');


/*-------------------------------- Variables --------------------------------*/
let selectedNumberOne = "";
// starts as empty so if checking later begins with blank
let selectedNumberTwo = "";
  //As a user, I want to be able to select numbers so that I can perform operations with them.

let selectedOperator = "";
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.

let selectEqual;
//As a user, I want to be able to see the output of the mathematical operation.

let selectClear;
//As a user, I want to be able to clear all operations and start from 0.


/*------------------------ Cached Element References ------------------------*/

const outputDisplayElement = document.querySelector(".display")
// class = dot notation, id = #


/*----------------------------- Event Listeners -----------------------------*/
const calculator = document.querySelector('#calculator');

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);
  // Future logic to capture the button's value would go here...
  // Example
  if (event.target.classList.contains('number')) {
    // Do something with a number
    // have it appear on the .display
   // const displayElement = document.createElement("p");
    outputDisplayElement.textContent = event.target.innerText;
    //outputDisplayElement.appendChild(displayElement);
    if (selectedNumberOne == "") {
      selectedNumberOne = Number(event.target.innerText);
      // Number() converts text string to number 

    }
    else {selectedNumberTwo = Number(event.target.innerText)}
  }

  // Example
  if (event.target.classList.contains('operator')) {

    if (event.target.innerText === 'C') {
      // Do something with this operator
      // or is it this:  if (event.target.classList.contains('operator')) {
      outputDisplayElement.textContent = "";
      selectedOperator = "";
      selectedNumberOne = "";
      selectedNumberTwo = "";
    }
 if (event.target.innerText === '/') {
      // Do something with this operator
      // or is it this:  if (event.target.classList.contains('operator')) {
      outputDisplayElement.textContent = "/";
      selectedOperator = "/"; 
    }
 if (event.target.innerText === '*') {
      // Do something with this operator
      // or is it this:  if (event.target.classList.contains('operator')) {
      outputDisplayElement.textContent = "*";
      selectedOperator = "*"; 
    }
 if (event.target.innerText === '-') {
      // Do something with this operator
      // or is it this:  if (event.target.classList.contains('operator')) {
      outputDisplayElement.textContent = "-";
      selectedOperator = "-";
    }
 if (event.target.innerText === '+') {
      // Do something with this operator
      // or is it this:  if (event.target.classList.contains('operator')) {
      outputDisplayElement.textContent = "+";
      selectedOperator = "+";
    }

  }

  if (event.target.classList.contains("equals")) {
    outputDisplayElement.textContent = math(selectedNumberOne, selectedNumberTwo, selectedOperator);  
  }
})




/*-------------------------------- Functions --------------------------------*/

const math = (selectedNumberOne, selectedNumberTwo, selectedOperator) => {
  if (selectedOperator === "+") {
    return selectedNumberOne + selectedNumberTwo;
  }
  if (selectedOperator === "-") {
    return selectedNumberOne - selectedNumberTwo;
  }
  if (selectedOperator === "*") {
    return selectedNumberOne * selectedNumberTwo;
  }
  if (selectedOperator === "/") {
    return selectedNumberOne / selectedNumberTwo;
  }
}