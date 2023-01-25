// Function statments aka Function Declaration

function a(){
    console.log("Function a");
}

// Function Expressions
const b = function (para1){
    return function () {
        console.log(para1);
    }
}

a();

console.log(b())

//anonymous functions

// const c = () => {
//     console.log("Anonymous function");
// }

// c();

// Named functions Expressions

// Diffrence between Parameters and Expressions

// First class functions -> ability to used like values
// First class Citizens

//Arrow functions