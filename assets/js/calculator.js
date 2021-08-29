// DRY, Don't Repeat Yourself
// functions,  methods, procedures, macros
// a set of instructions,

// prototype
// definition
// signature of function
function sum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// anonymous function
// var a = 'my name';
// let App = function () {
// }
// let a = App();
// arrow functions
// let App = () => {
// }

// Nested Functions
// other way to  write this
// let CalculatorLong = function(){
//  // some commands
//  console.log(`i'm a function`)
// };
// this is an invocation
// let cl = CalculatorLong();

// self invocation
// let selfInvokeResult =  function(){}();
// arrow function syntax
// let selfInvokeResultArrowFunction = (()=>{ console.log(`i'm a self invoked arrow functions`); })();


// short hand of Self Invoking
let Calculator = (() => {

    // encapsulation
    function divide(num1, num2) {
        return num1 / num2;
    }
    // let res = divide();

    // this is publicly accessible
    return {
        Sum: sum,
        Sub: subtract,
        Mul: multiply,
        Div: divide
    };
})();