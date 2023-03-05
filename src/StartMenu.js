import React from "react";
import { withRouter } from "react-router-dom";
import "./styles.css";

class StartMenu extends React.Component {

  handleStartMenuClick = () => {
    this.props.history.push("/MainPage");
  }; 

  render() {
    return (
    
      <div 
          className="start-menu"
          onClick={this.handleStartMenuClick}
          onTouchEnd={this.handleStartMenuClick}
      >

        {/* <img src={this.props.backgroundImg} alt="background" className="background-img" /> */}
        <div className="start-menu-content">
          <div>
          <h1 className="time">{this.props.time}</h1>
          <h2 className="date">{this.props.date}</h2>
          </div>
          <div>
          <h1 className="start-prompt">{this.props.prompt}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StartMenu);
