function add(num1, num2) {
    let result = num1 + num2;

    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;

    return result;
}

function multiply(num1, num2) {
    let result = num1 * num2;

    return result;
}

function divide(num1, num2) {
    let result = num1 / num2;

    return result;
}

//will need to configure operate() result to allow for multiple operations
//+=, -=, *=, /=, will likely be used
//will need to also allow for clearing result

//result could equal display.div
//display.div is the where the result will be displayed
function operate(operator, num1, num2){
    let result;
    switch (operator){
        case '+':
            result = add(num1, num2);
            
            return result;
        case '-':
            result = subtract(num1, num2);
            
            return result;
        case '*':
            result = multiply(num1, num2);

            return result;
        case '/':
            result = divide(num1, num2);

            return result;
    }
}