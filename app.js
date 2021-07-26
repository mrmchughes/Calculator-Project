const display = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButtons');
const clearButton = document.querySelector('#clearButton');
const equalButton = document.querySelector('#equalButton');
const numButtons = document.querySelectorAll('.numButtons');

let total;
//variable to hold actual total for operations?
let num1 = 8; //operand 1
let num2 = 7; //operand 2
let operator;

//On load, calls clearScreen(), so display.div = 0,
window.addEventListener('load', clearScreen);

let operationInProgress = false;
//when = button is clicked, or a new operator is selected, set operationInProgress back to false//

//adds num1 and num2, returns the total, sets display to the total
const add = function(num1, num2) {
    let total = num1 + num2;
    display.innerHTML = total;
    return total;
}

//subtracts num1 and num2, returns the total, sets display to the total
const subtract = function(num1, num2) {
    let total = num1 - num2;
    display.innerHTML = total;
    return total;
}

//multiplies num1 and num2, returns the total, sets display to the total
const multiply = function(num1, num2) {
    let total = num1 * num2;
    display.innerHTML = total;
    return total;
}

//divides num1 and num2, returns the total, sets display to the total
const divide = function(num1, num2) {
    let total = num1 / num2;
    display.innerHTML = total;
    return total;
}

//sets total to be an empty string, and display.innerHTML = 0
//doing this allows me to have 0 in the display on load, but avoid having 0 added to the value of total in the display
function clearScreen(){
    total = '';
    display.innerHTML = 0;
}

//clears the display, by calling clearScreen()
clearButton.addEventListener('click', clearScreen);

//when an operator button is clicked, sets operator variable = to button.value, sets display.innerHTML to equal operator 
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        operator = button.value;
        display.innerHTML = button.value;
    })
});

//when clicked, total is set to button.value, which starts as an empty string
//display.innerHTML is also set to equal the current value of total
numButtons.forEach(button => {
    button.addEventListener('click', function(){
        total = button.value;
        display.innerHTML = total; 
    })
});

//runs operate when clicked
//currently works great, uses the value of num1, num2, and the operator as expected 
//need to work on num 1 and 2 logic for multiple operations in a row
equalButton.addEventListener('click', function(){
    operate(num1, operator, num2);
})

//will need to configure operate() result to allow for multiple operations
//+=, -=, *=, /=, will likely be used
//will need to also allow for clearing result

function operate(num1, operator, num2){ 

    switch (operator){
        case "+":
            total = add(num1, num2);
            
            break;
        case "-":
            total = subtract(num1, num2);
            
            break;
        case "*":
            total = multiply(num1, num2);

            break;
        case "/":
            total = divide(num1, num2);

            break;
    }
};