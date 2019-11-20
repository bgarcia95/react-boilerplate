console.log("App.js is running!");

const app = {
  title: "Make it Visible",
  subtitle: "Hey. Now you can see this text!"
};

let toggle = false;

const onVisible = () => {
  toggle = !toggle;
  renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onVisible}>
        {toggle ? "Hide Details" : "Show Details"}
      </button>
      {toggle ? <p>{app.subtitle}</p> : null}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
