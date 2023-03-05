import React from "react";
import StartMenu from "./StartMenu";
import backgroundImg from "./background.jpg";
import { Switch, Route} from "react-router-dom";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
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
      <Switch>
        <Route path="/MainPage">
          <MainPage />
        </Route>
        <Route path="/">
          <StartMenu
            time={this.state.time}
            date={this.state.date}
            prompt={this.state.prompt}
          />
        </Route>
      </Switch>
    </div>
    );
  }
}

export default App;
