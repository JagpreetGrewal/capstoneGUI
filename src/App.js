import React from "react";
import StartMenu from "./StartMenu";
import backgroundImg from "./background.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
      prompt: "Slide/Click to start"
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className="App">
        <StartMenu
          backgroundImg={backgroundImg}
          time={this.state.time}
          date={this.state.date}
          prompt={this.state.prompt}
        />
      </div>
    );
  }
}

export default App;
