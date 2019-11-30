// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi mi name is ${this.name}.`;
  }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// -----------------------------

class NewSyntax {
  name = "Jen";
  getGreeting = () => {
    // arrow functions they don't have their own "this" binding they use the "this" binding on the parent scope and for classes that is the class instance. In this case the "getGreeting" method will always be bounded to the class instance
    return `Hi mi name is ${this.name}.`;
  };
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
// console.log(newSyntax.name);
console.log(newGetGreeting());
