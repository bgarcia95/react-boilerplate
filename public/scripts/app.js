"use strict";

console.log("App.js is running!");

var app = {
  title: "Indecision App",
  subtitle: "This is some text",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // console.log('form submitted');
  // target -> parent tag (form in this case)
  // list all the elements and index by name(that's why we use option after 'elements.')
  // here we are reading the value
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log(app.options);
    e.target.elements.option.value = "";
    renderApp();
  }
};

// Create "Remove ALl" button above list
// onClick -> wipe  the array -> rerender
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById("app");

var numbers = [55, 101, 1000];

var id = 0;

var renderApp = function renderApp() {

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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: onRemoveAll },
      "Remove All"
    ),
    // JS expression can only accept strings, numbers, booleans, undefined and null
    numbers.map(function (number) {
      return React.createElement(
        "p",
        { key: number },
        "Number: ",
        number
      );
    }),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {

        return React.createElement(
          "li",
          { key: id++ },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
