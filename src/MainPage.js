import React from "react";
import example1Output from "./example1Output.txt";
import "./MainPage.css";
import Net from "./Net.png"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example1Output: "",
      example2Output: "",
      example3Output: ""
    };
  }

  handleExample1Click = () => {
    // Use fetch to call example1.py and get its output
    fetch("example1.py")
      .then(response => response.text())
      .then(output => this.setState({ example1Output: output }));
  };

  handleExample2Click = () => {
    // Use fetch to call example2.py and get its output
    fetch("example2.py")
      .then(response => response.text())
      .then(output => this.setState({ example2Output: output }));
  };

  handleExample3Click = () => {
    // Use fetch to call example3.py and get its output
    fetch("example3.py")
      .then(response => response.text())
      .then(output => this.setState({ example3Output: output }));
  };

  render() {
    return (
      <div className="MainPage">
        <div className="SettingsColumn">
          <button>Setting 1</button>
          <button>Setting 2</button>
          <button>Setting 3</button>
          <button>Setting 4</button>
          <button>Setting 5</button>
        </div>
        <div className="ScriptColumn">
          <img src={Net} alt="Script Image" className="ScriptImage" />
          <div className="ScriptButtons">
            <button onClick={this.handleExample1Click}>Example 1</button>
            <button onClick={this.handleExample2Click}>Example 2</button>
            <button onClick={this.handleExample3Click}>Example 3</button>
          </div>
          <div className="OutputBox">{this.state.example1Output}</div>
        </div>
        <div className="OutputColumn">
          <div className="OutputBox">{this.state.example2Output}</div>
          <div className="OutputBox">{this.state.example3Output}</div>
        </div>
      </div>
    );
  }
}

export default MainPage;
