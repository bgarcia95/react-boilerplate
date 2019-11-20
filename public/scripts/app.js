"use strict";

console.log("App.js is running!");

var app = {
  title: "Make it Visible",
  subtitle: "Hey. Now you can see this text!"
};

var toggle = false;

var onVisible = function onVisible() {
  toggle = !toggle;
  renderApp();
};

var appRoot = document.getElementById("app");

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
    React.createElement(
      "button",
      { onClick: onVisible },
      toggle ? "Hide Details" : "Show Details"
    ),
    toggle ? React.createElement(
      "p",
      null,
      app.subtitle
    ) : null
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
