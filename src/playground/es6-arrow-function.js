// ES5
// function square(x) {
//   return x * x;
// }
// console.log(square(8));

// ES6

// const squareArrow = x => {
//   return x * x;
// };

// const squareArrow = x => x * x;

// console.log(squareArrow(10));

// Challenge - Use arrow functions
// get FirstName('Mike Smith') -> 'Mike'
// Create regular arrow function
// Create arrow function using shorthand syntax

const fullName = 'Brayan Garcia';

const getFirstName =  (fullName) => {
    
    return fullName.split(' ')[0];
}

console.log("Regular ES6 Arrow function: ",getFirstName(fullName));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log("Arrow Function as a Expression: ", getFirstNameArrow(fullName));
