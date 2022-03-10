import React from "react";
import email from "./images/email-icon.png";
import phone from "./images/phone-icon.png";
import git from "./images/git-icon.png";
import linkedin from "./images/linkedin-icon.png";
import "./css/Contact.css";

function Contact() {
  return (
    <div>
      <div className="titleStuff">
        <h1>Contact Me!</h1>
        <h3>You can reach me with any of the following</h3>
      </div>
      <div className="body">
        <ul className="contButtons">
          <div className="emailButton">
            <li>
              <button
                onClick={() =>
                  (window.location = "mailto:cambytedev1@gmail.com")
                }
                className="iconButton"
              >
                <img className="emailIcon" src={email} />
                <br />
                <br />
                Email
                <p>
                  <a href="mailto: cambytedev1@gmail.com">
                    cambytedev1@gmail.com
                  </a>
                </p>
              </button>
            </li>
          </div>
          <div className="phoneButton">
            <li>
              <button
                onClick={() => (window.location = "tel:8458034150")}
                className="iconButton"
              >
                <img className="phoneIcon" src={phone} />
                <br />
                <br />
                Phone
                <p>
                  <a href="tel:8458034150">845-803-4150</a>
                </p>
              </button>
            </li>
          </div>
          <div className="gitButton">
            <li>
              <button
                onClick={() =>
                  (window.location = "https://github.com/cam-byte")
                }
                className="iconButton"
              >
                <img className="gitIcon" src={git} />
                <br />
                <br />
                GitHub
                <p>
                  <a href="https://github.com/cam-byte">My Repository</a>
                </p>
              </button>
            </li>
          </div>
          <div className="linkedInButton">
            <li>
              <button
                onClick={() =>
                  (window.location =
                    "https://www.linkedin.com/in/cameron-dyas-6504ab189/")
                }
                className="iconButton"
              >
                <img className="linkedInIcon" src={linkedin} />
                <br />
                <br />
                LinkedIn
                <p>
                  <a href="https://www.linkedin.com/in/cameron-dyas-6504ab189/">
                    Connect
                  </a>
                </p>
              </button>
            </li>
          </div>

          {/* <div className='logoIcons'>
        
        <img className='phoneIcon' src={phone}/>
        <img className='gitIcon' src={git}/>
        <img className='linkedInIcon' src={linkedin}/>
      </div> */}
          {/* <li> Phone </li>
        <li> GitHub </li>
        <li> LinkedIn </li> */}
        </ul>
        {/* <ul className='buttonText'>
      <li><a href = "tel: 8458034150">845-803-4150</a></li>
      <li><a href="https://github.com/cam-byte">My Repositories</a></li>
      <li><a href="https://www.linkedin.com/in/cameron-dyas-6504ab189/">Connect With Me</a></li>
      </ul> */}
      </div>
    </div>
  );
}

export default Contact;
