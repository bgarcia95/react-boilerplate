"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "This is some text",
  options: ["One", "Two"]
};

// only render the subtitle and p tag if subtitle exist - logical && operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
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
  ),
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add Option"
    )
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

// Create a templateTwo var JSX

// const user = {
//   name: "Brayan",
//   age: 25,
//   location: "Santa Ana"
// };

// function getLocation(location) {
//   if (location) {
//   return <p>Location: {location} </p>;
//   }
// }

// var templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
