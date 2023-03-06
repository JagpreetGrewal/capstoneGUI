import React, { useState } from "react";
import axios from "axios";
import example1Output from "./example1Output.txt";
import "./MainPage.css";
import Net from "./Net.png"

// class MainPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       example1Output: "",
//       example2Output: "",
//       example3Output: ""
//     };
//   }

const MainPage = () => {
  const [example1Output, setExample1Output] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/example1');
      const output = await response.text();
      setExample1Output(output);
    } catch (error) {
      console.error(error);
    }
  };

  // handleExample2Click = () => {
  //   // Use fetch to call example2.py and get its output
  //   fetch("python3 example2.py")
  //     .then(response => response.text())
  //     .then(output => this.setState({ example2Output: output }));
  // };

  // handleExample3Click = () => {
  //   // Use fetch to call example3.py and get its output
  //   fetch("python3 example3.py")
  //     .then(response => response.text())
  //     .then(output => this.setState({ example3Output: output }));
  // };

  // render() {

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
            <p>Output should be here</p>
            <button onClick={handleClick}>Example 1</button>
            {/* <button onClick={this.handleClick}>Example 2</button> */}
            {/* <button onClick={this.handleClick}>Example 3</button> */}
          </div>
          <div className="OutputBox">{example1Output}</div>
        </div>
        <div className="OutputColumn">
          <div className="OutputBox">{example1Output}</div>
          {/* <div className="OutputBox">{this.state.example3Output}</div> */}
        </div>
      </div>
    );
  // }
}

export default MainPage;
