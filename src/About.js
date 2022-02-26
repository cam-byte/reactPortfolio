import React from 'react';
import './About.css';
import profile from './profileboatpic.png';
import jsLogo from './JavaScript-logo.png';
import reactlogo from './reactlogo.png';

function About(){
  return(
    <div className='aboutPage'>
    <div className='aboutHeader'>
      <h1>ABOUT ME</h1>
    </div>
    <div className='aboutHeaderSub'>
      <h4>Highly motivated front-end developer with junior level experience. </h4><br></br>
      <h4>Currently I am working on personal projects and looking for a full time role.</h4>
    </div>      
    <div className='aboutProfile'>
      <img src={profile}/>
      <img className='jsLogo' src={jsLogo}/>
      <img className='reactLogo' src={reactlogo}/>
    </div>
    </div>
  );
}

export default About;