import React, { useState } from "react";
import axios from "axios";
import example1Output from "./example1Output.txt";
import "./MainPage.css";
import Net from "./Net.png"
import Cam from "./Cam"

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

  const [videoSrc, setVideoSrc] = useState("");

  // const handleExample1Click = () => {
  //   fetch("http://localhost:5000/video_feed", {
  //     method: 'GET',
  //   })
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return response.blob();
  //   })
  //   .then((blob) => {
  //     const videoUrl = URL.createObjectURL(blob);
  //     setVideoSrc(videoUrl);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching video stream:", error);
  //   });
  // };


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
          {/* <button onClick={handleClick}>Example 1</button> */}
          {/* <button onClick={this.handleClick}>Example 2</button> */}
          {/* <button onClick={this.handleClick}>Example 3</button> */}
        </div>
        {/* <div className="OutputBox">{example1Output}</div> */}
      </div>
      {/* <div className="ScriptColumn"> */}
        {/* <video src={Cam} alt="webcam"></video> */}
        <Cam />
        {/* <video src={videoSrc} autoPlay /> */}
        {/* <button onClick={handleExample1Click}>Example 2</button> */}
      {/* </div> */}

      {/* <Grid item xs={9}>
      <Container>
        <iframe
            src={'/video_feed'}
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </Container>
    </Grid> */}
    </div>
  );
  // }
};

export default MainPage;
