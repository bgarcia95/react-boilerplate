console.log("App.js is running!");

const app = {
  title: "Indecision App",
  subtitle: "This is some text",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  // console.log('form submitted');
  // target -> parent tag (form in this case)
  // list all the elements and index by name(that's why we use option after 'elements.')
  // here we are reading the value
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    console.log(app.options);
    e.target.elements.option.value = "";
    renderApp();
  }
};

// Create "Remove ALl" button above list
// onClick -> wipe  the array -> rerender
const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
  
};

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

let id = 0;

const renderApp = () => {
  
  // JSX - JavaScript XML
  const template = (
    
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {// JS expression can only accept strings, numbers, booleans, undefined and null
      numbers.map(number => {
        return <p key={number}>Number: {number}</p>;
      })}

      <ol>
        {app.options.map(option => {
          
          return <li key={id++}>{option}</li>
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
