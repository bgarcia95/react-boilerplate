var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar: ", nameVar);

let nameLet = "Jen";
nameLet = "July";
console.log("nameLet: ", nameLet);

const nameConst = "Frank";
console.log("nameConst: ", nameConst);

// var are function scopes variables

// let and const are block scopes variables

const fullName = "Jen Garcia";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
