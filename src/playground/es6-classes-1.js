// Setup constructor to take name and age (default to 0)
// getDescription -> Brayan Garcia  is  24 year(s) old.

class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi, I am ' + this.name + '!';
    // ES6
    // ` => backtik
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    // !!'' -> if its empty returns false (value doesn't exist)
    // !!'Brayan' -> since it has a value returns true
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

// Traveler extends Person
// Add  support for homeLocation
// Override getGreeting
// 1. Hi. I am Brayan Garcia. I'm visiting from Santa Ana.
// 2. Hi. I am Brayan Garcia.

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler("Brayan Garcia", 24, "Santa Ana");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
