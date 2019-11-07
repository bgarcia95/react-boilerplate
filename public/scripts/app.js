"use strict";

console.log("App.js is running!");

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This was some text... or not?"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

// Create a templateTwo var JSX
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Brayan Garcia"
  ),
  React.createElement(
    "p",
    null,
    "Age: 25"
  ),
  React.createElement(
    "p",
    null,
    "Location: El Salvador"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
