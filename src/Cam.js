// import React, { useState } from "react";
// const Cam = () => {
//     return (
//       <div>
//        <img
//         src="/video_feed"
//         alt="Video"
//        />
//       </div>
//      );
// };
    
// export default Cam;

import React, { useState } from "react";

const Cam = () => {
  const [videoSrc, setVideoSrc] = useState("");

  const handleExample1Click = () => {
    axios({
      method: "GET",
      url:"/video_feed",
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.blob();
    })
    .then((blob) => {
      const videoUrl = URL.createObjectURL(blob);
      setVideoSrc(videoUrl);
    })
    .catch((error) => {
      console.error("Error fetching video stream:", error);
    });
  };

  return (
    <div>
      <video autoPlay src={videoSrc} />
      <button onClick={handleExample1Click}>Start Stream</button>
    </div>
  );
};

export default Cam;

// import React, { useState } from "react";
// import "./MainPage.css";

// const Cam = () => {
//   return (
//     <div>
//       <video autoPlay>
//         <source src="/video_feed" type="multipart/x-mixed-replace; boundary=frame" />
//       </video>
//       test123
//     </div>
//   );
// };

// export default Cam;
