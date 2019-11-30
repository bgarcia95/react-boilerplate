import React from "react";

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    e.preventDefault();
    //Retrieving value from input
    // Trim removes leading and trailing spaces
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = "";
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" placeholder="Enter your goal" name="option" />
          <button>Add Goal</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
