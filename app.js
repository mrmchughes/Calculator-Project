const display = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButtons');
const clearButton = document.querySelector('#clearButton');
const equalButton = document.querySelector('#equalButton');
const numButtons = document.querySelectorAll('.numButtons');

let total = Number(0);
let num1 = Number(0); //operand 1
let num2 = Number(0); //operand 2
let operator;

//when = button is clicked, or a new operator is selected, set operationInProgress back to false//
let operationInProgress;

//On load, calls clearScreen(), so display.div = 0,
window.addEventListener('load', clearScreen);

//clears the display, by calling clearScreen()
clearButton.addEventListener('click', clearScreen);

//sets total to be an empty string, and display.innerHTML = 0
//doing this allows me to have 0 in the display on load, but avoid having 0 added to the value of total in the display
function clearScreen(){
    total = Number(0);
    num1 = Number(0);
    num2 = Number(0);
    operator = '';
    operationInProgress = false;
    display.innerText = '0';
    console.log(typeof (num1))
}

//adds num1 and num2, returns the total, sets display to the total
const add = function(num1, num2) {
    let total = parseInt(num1) + parseInt(num2); // num1 and 2 are getting parsed seperately, so they know they're ints
    // vs
    // let total = parseInt(num1 + num2); // num1 and 2 still think they're strings and cancatinate

    display.innerHTML = Math.round((total + Number.EPSILON) * 100) / 100;
    
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

//subtracts num1 and num2, returns the total, sets display to the total
const subtract = function(num1, num2) {
    let total = parseInt(num1) - parseInt(num2);

    display.innerHTML = Math.round((total + Number.EPSILON) * 100) / 100;
    
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

//multiplies num1 and num2, returns the total, sets display to the total
const multiply = function(num1, num2) {
    let total = parseInt(num1) * parseInt(num2);

    display.innerHTML = Math.round((total + Number.EPSILON) * 100) / 100;
    
    return Math.round((total + Number.EPSILON) * 100) / 100;
}

//divides num1 and num2, returns the total, sets display to the total
const divide = function(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        alert("You can't divide by zero!")
        clearScreen();
    } else {
    let total = parseInt(num1) / parseInt(num2);

    display.innerHTML = Math.round((total + Number.EPSILON) * 100) / 100;
    
    return Math.round((total + Number.EPSILON) * 100) / 100;
    }
}

//when an operator button is clicked, sets operator variable = to button.value, sets display.innerHTML to equal operator 
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (operator != '') {
            operate(num1, operator, num2);
            num1 = parseInt(total);
            num2 = '';
            
            operationInProgress = true;
            operator = button.value;
            display.innerHTML = button.value;
        }

        operationInProgress = true;
        operator = button.value;
        display.innerHTML = button.value;
    })
});

//when clicked, total is set to button.value, which starts as an empty string
//display.innerHTML is also set to equal the current value of total
numButtons.forEach(button => {
    button.addEventListener('click', function(){
        // Important!! You can use "console.log(string/cancatination)" 
        if (!operationInProgress){
            if (num1 == 0){
                num1 = button.value;
            }   else {
                num1 += button.value;
            }

            display.innerHTML = num1; 
        } else {
            if (num2 == 0){
                num2 = button.value;
            }   else {
                num2 += button.value;
            }

            display.innerHTML = num2;
        }
    })
});

//runs operate when clicked
//currently works great, uses the value of num1, num2, and the operator as expected 
//need to work on num 1 and 2 logic for multiple operations in a row
equalButton.addEventListener('click', function(){
    if (num2 == '') {
        alert("You can't perform an equation with only one number! Try again!")
        clearScreen();
    } else {
    operate(num1, operator, num2);
    operationInProgress = false;
    }
});

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