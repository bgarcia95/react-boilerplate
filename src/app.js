const obj = {
  name: "Brayan",
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind({ name: "Brayan" });

console.log(getName());

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("handlePick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Add removeAll button
// Setup handleRemoveAll -> alert some message
// Setup on click to fire the method

class Options extends React.Component {
  //Calling bind in the constructor so we won't have to do it everytime manually on callbacks
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);

    // alert("handleRemoveAll");
  }

  render() {
    const { options } = this.props;
    return (
      <div>
        <br />
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {options.map(option => (
          <Option key={option} option={option} />
        ))}

        {/* <Option /> */}
      </div>
    );
  }
}

// Option
class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.option}</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    //Retrieving value from input
    // Trim removes leading and trailing spaces
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="Enter your goal" name="option" />
          <button>Add Goal</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
