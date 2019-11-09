// aruments object - no longer bound with arrow functions

const add = (a, b) => {
  // This is for ES5 console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: "Brayan",
  cities: ["Santa Ana", "San Salvador", "La Union"],
  printPlacesLived() {
    // map returns a new arrow from an existing one
    return this.cities.map(city => `${this.name} has lived in ${city}`);

    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach(city => {
    //   return console.log(`${this.name} has lived in ${city}`);
    // });
  }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array
  numbers: [1, 2, 3],
  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return a new array where the numbers have been multiplied
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
