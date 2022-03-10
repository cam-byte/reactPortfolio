import React from "react";
import "./css/About.css";
import mspaint from "./images/MSPainting.png";
import resume from "./images/CameronDyasResume32022.pdf";

function About() {
  return (
    <div className="aboutPage">
      <div className="aboutHeader">
        <h1 className="aboutTitle">About Me</h1>
      </div>
      <div className="aboutHeaderSub">
        <p className="bioText">
          I graduated with a Bachelors in Computer Science from the University
          of SUNY New Paltz.
          <br />
          <br />
          From my time there I found I have a real passion for web development!
          I was fortunate enough to have two internships during my time at
          school aswell.
          <br />
          <br /> I have always had an obsession with technology ever since I
          made my first abstract piece in MS Paint.
        </p>
      </div>
      <div className="aboutProfile">
        <img className="msPaint" src={mspaint}></img>
        <article>
          <em>
            Cameron Dyas(<strike>5 Years Old</strike> 23 Years Old)
          </em>
        </article>
        <p className="bioTextCont">
          Just like I did then, I love having the ability to have a creative
          outlet. With front end of development, I get to be five years old
          again. Having a mind geared towards expression also helps <br />
          <br /> with communicating ideas to others effectively. I have used
          these passions and skills to get me where I am now and I will use them
          to get where I want to be in the future. <br />
          <br />
          <br />
          <br /> Add to the MS Paint art community!
        </p>
        <button onClick={() => window.open(resume)} className="resumeButton">
          My Resume
        </button>
      </div>
    </div>
  );
}

export default About;
