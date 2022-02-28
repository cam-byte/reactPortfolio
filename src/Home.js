import React from 'react';
import "./css/Home.css";
import profile from './images/profileboatpic.png';
import jsLogo from './images//JavaScript-logo.png';
import reactlogo from './images//reactlogo.png';

function Home(){
  return(
      <div className='homePage'>
          <div className='homeHeader'>
              <h1>ABOUT ME</h1>
          </div>
          <div className='homeHeaderSub'>
              <h4>Highly motivated front-end developer with junior level experience. </h4><br></br>
              <h4>Currently I am working on personal projects and looking for a full time role.</h4>
          </div>
          <div className='homeProfile'>
              <img className='cutoutCam' src={profile} />
              <img className='jsLogo' src={jsLogo} />
              <img className='reactLogo' src={reactlogo} />
          </div>
      </div>
  );
}

export default Home;