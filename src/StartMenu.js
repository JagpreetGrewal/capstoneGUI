import React from "react";
import "./styles.css";

class StartMenu extends React.Component {
  render() {
    return (
    // const date = new Date();
    // const options = { weekday: 'long', month: 'long', day: 'numeric' };
    // const dateString = date.toLocaleString('en-US', options).replace(/(\d)(?=(\d{2})+(?!\d))/g, '$1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th,'.split(',')[parseInt(RegExp.$1) - 1]);



      <div className="start-menu">
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

export default StartMenu;
