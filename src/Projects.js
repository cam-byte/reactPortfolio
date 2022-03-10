import React from "react";
import "./css/Projects.css";
function Projects() {
  return (
    <div>
      <h1 className="projsTitle">Projects</h1>
      <div className="tmasProj">
        <h2 className="tmasTitle">TMAS: Traffic Management Analysis System</h2>
        <button
          onClick={() =>
            (window.location =
              "https://cs.newpaltz.edu/p/f21-16/v0/graphDailyReport.php")
          }
          className="tmasButton"
        ></button>
        <div className="tmasProjDesc">
          <p>
            Implemented new traffic counting camera in SUNY New Paltz Library
            and created a web interface.
          </p>
          <p className="techText">
            <br />
            HTML CSS JavaScript PHP MySQL jQuery Ajax Google Charts
          </p>
        </div>
        <button
          onClick={() =>
            (window.location =
              "https://github.com/cam-byte/LibraryCountingCamera")
          }
          className="gitTmasLink"
        ></button>
        <button
          onClick={() =>
            (window.location =
              "https://cs.newpaltz.edu/p/f21-16/v0/graphDailyReport.php")
          }
          className="extTmasLink"
        ></button>
      </div>
      <div className="groceryPOSProj">
        <h2 className="grocText">
          <bold>Cloud Based Grocery Point of Sale</bold>
        </h2>
        <button
          onClick={() =>
            (window.location = "https://github.com/CloudPOSFall/GroceryPOS")
          }
          className="grocButton"
        ></button>
        <div className="grocProjDesc">
          <p>
            Implemented a cloud based Gorcery Point of Sale web interface with
            an inventory of items and users.
          </p>
          <p className="techText">
            <br />
            HTML CSS JavaScript PHP MySQL
          </p>
        </div>
        <button
          onClick={() =>
            (window.location = "https://github.com/CloudPOSFall/GroceryPOS")
          }
          className="gitGrocLink"
        ></button>
        <button
          onClick={() =>
            (window.location = "https://github.com/CloudPOSFall/GroceryPOS")
          }
          className="extGrocLink"
        ></button>
      </div>
    </div>
  );
}

export default Projects;
