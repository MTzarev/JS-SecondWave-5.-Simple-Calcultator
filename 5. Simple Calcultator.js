function simpleCalculator(num1, num2, op) {
    switch (op) {
        case "multiply":
            let multiply = (a, b) => a * b;
            console.log(multiply(num1, num2)); break;
        case "divide":
            let divide = (a, b) => a / b;
            console.log(divide(num1, num2)); break;
        case "add":
            let add = (a, b) => a + b;
            console.log(add(num1, num2)); break;
        case "subtract":
            let subtract = (a, b) => a - b;
            console.log(subtract(num1, num2)); break;
    }
    console.log();
}
simpleCalculator(40,
    8,
    'divide');
