import React from "react";
import "./styles.css";

class StartMenu extends React.Component {
  render() {
    return (
      <div className="start-menu">
        <img src={this.props.backgroundImg} alt="background" className="background-img" />
        <div className="start-menu-content">
          <h1 className="time">{this.props.time}</h1>
          <h2 className="date">{this.props.date}</h2>
          <p className="start-prompt">{this.props.prompt}</p>
        </div>
      </div>
    );
  }
}

export default StartMenu;
