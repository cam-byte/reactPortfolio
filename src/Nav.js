import React from "react";
import sanfran from "./images/image2vector.svg";
import homeicon from "./images/home.png";
import { Link } from "react-router-dom";
import "./css/App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="listItem">
          <Link className="linkER" to="/contact">
            Contact
          </Link>
        </li>
        <li className="listItem">
          <Link className="linkER" to="/projects">
            Projects
          </Link>
        </li>
        <li className="listItem">
          <Link className="linkER" to="/about">
            About
          </Link>
        </li>
        <li className="listItem">
          <Link className="linkER" to="/">
            <img className="homeIcon" src={homeicon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
