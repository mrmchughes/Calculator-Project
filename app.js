const display = document.querySelector('#calculatorDisplay');
const operatorButtons = document.querySelectorAll('.operatorButtons').value;
const clearButton = document.querySelector('#clearButton');
const numButtons = document.querySelectorAll('.numButtons');
let result;
let num1 = 7;
let num2 = 7;
let operator = '+';

//On load, call clearScreen(), so display.div = 0,
window.addEventListener('load', clearScreen);

let operationInProgress = false;
//when = button is clicked, or a new operator is selected, set operationInProgress back to false//

function add(num1, num2) {
    result = num1 + num2;

    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;

    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;

    return result;
}

function divide(num1, num2) {
    result = num1 / num2;

    return result;
}

//sets result to a blank string, and display.innerHTML = 0
//doing this allows me to have 0 in the display on load, but avoid having 0 added to the value of result
function clearScreen(){
    result = '';
    display.innerHTML = 0;
}

//clears the display, by calling clearScreen()
clearButton.addEventListener('click', clearScreen);

//operatorButton.forEach(button => {
    //button.addEventListener('click', function() {
        //operate(operatorButton.value)
    //})
//});


//when clicked, a numButton will += itself to the result string, which starts as an empty string
//once result has had the numButton value added, display.innerHTML is now set to be equal to result
numButtons.forEach(button => {
    button.addEventListener('click', function(){
        result += button.value;
        display.innerHTML = result; 
    })
});



//function setOperator(){
    //
//};

//will need to configure operate() result to allow for multiple operations
//+=, -=, *=, /=, will likely be used
//will need to also allow for clearing result

function operate(){ 

    switch (operator){
        case '+':
            result = add(num1, num2);
            
            break;
        case '-':
            result = subtract(num1, num2);
            
            break;
        case '*':
            result = multiply(num1, num2);

            break;
        case '/':
            result = divide(num1, num2);

            break;
    }
    display.innerHTML = result;
};