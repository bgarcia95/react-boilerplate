console.log("App.js is running!");

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This was some text... or not?</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo var JSX
var templateTwo = (
    <div>
        <h1>Brayan Garcia</h1>
        <p>Age: 25</p>
        <p>Location: El Salvador</p>
    </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
