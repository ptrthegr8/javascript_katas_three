function printResult(textwithquotes, headerwithquotes) {
    var myHeader = document.createElement("h2");
    var h = document.createTextNode(headerwithquotes);
    myHeader.appendChild(h);
    document.body.appendChild(myHeader);
    //Header code above
    var myDiv = document.createElement("div"); // Create a <div> element
    var t = document.createTextNode(textwithquotes); // Create a text node
    myDiv.appendChild(t); // Append the text to <div>
    document.body.appendChild(myDiv);
    //div code above
}
// Add
// Write a function named "add" that takes two arguments and returns their sum.

// You may use built-in operators to finish the definition.

// Display the result of calling add(2, 4), which should be 6.
function add(x, y) {
    let sum = x + y;
    return sum;
}
printResult(add(2, 4), "Add");

// Multiply
// Write a function named "multiply" that takes two arguments and returns their product.
// You may not use built-in arithmetic operators or functions. Instead, you'll need a for loop which calls the "add" function you wrote earlier.

// Display the result of calling multiply(6, 8), which should be 48.
function multiply(x, y) {
    let multiResult = 0;
    for (let i = 0; i < x; i++) {
        multiResult = add(multiResult, y); /* multiResult = add(multiresult, y) */
    }
    return multiResult;
}
printResult(multiply(6, 8), "Multiply");

// Power
// Write a function named "power" that takes two arguments (x and n) and returns the the result of raising x to the nth power.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.
// Display the result of calling power(2, 8), which should be 256.

function power(x, n) {
    let powerResult = 1;
    for (i = 0; i < n; i++) {
        powerResult = (multiply(powerResult, x));
        // let xVarResult = (multiply(x, 1)); 
        // powerResult *= xVarResult;
    }
    return powerResult;
}
printResult(power(2, 8), "Power");

// Factorial
// Write a function named "factorial" that takes a single argument and returns the factorial of that argument.
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

// Display their result of calling factorial(4), which should be 24 (4 * 3 * 2 * 1).
function factorial(x) {
    let factorialResult = 1;
    for (i = x; i >= 1; i--) {
        // factorialResult *= (multiply(i, 1));
        factorialResult = multiply(factorialResult, i)
    }
    return factorialResult;
}
printResult(factorial(4), "Factorial");

// Fibonacci
// Write a function named "fibonacci" that takes an argument n and returns the nth, Fibonacci number (Links to an external site.)Links to an external site. (click me!).
// You may not use built-in arithmetic operators or functions. Instead, use functions you wrote in earlier katas to write this function.

// Display the result of calling fibonacci(8), which should be 13:

// 0 1 1 2 3 5 8 [13] 21

// The number in brackets is the 8th fibonacci number.

function fibonacci(n) {
    let fibResult = 1
    let oldNumb = 0
    let newNumb = 1
    for (let i = 2; i < n; i++) {
        fibResult = oldNumb + newNumb;
        oldNumb = newNumb;
        newNumb = fibResult;
    }
    return fibResult
}

printResult(fibonacci(8), "Fibonacci");