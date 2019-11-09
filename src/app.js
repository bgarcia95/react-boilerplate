console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is some text",
  options: ["One", "Two"]
};

// only render the subtitle and p tag if subtitle exist - logical && operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");

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

