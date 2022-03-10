import React from "react";
import "./css/Home.css";
import signature from "./images/signature.png";
import profile from "./images/profileboatpic.png";
import jsLogo from "./images//JavaScript-logo.png";
import reactlogo from "./images//reactlogo.png";

function Home() {
  return (
    <div className="homePage">
      <div className="homeHeader">
        <img className="signImg" src={signature} />
      </div>
      <div className="homeHeaderSub">
        <h4>I am fed up with small businesses not having websites</h4>
        <br></br>
        <h4>and I have decided to do something about it.</h4>
      </div>
      <div className="homeProfile">
        <img className="cutoutCam" src={profile} />
        <img className="jsLogo" src={jsLogo} />
        <img className="reactLogo" src={reactlogo} />
      </div>
    </div>
  );
}

export default Home;
