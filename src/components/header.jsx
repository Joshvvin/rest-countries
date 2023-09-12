import React, { useContext } from "react";
import "./header.css";
import { ModeContext } from "../ModeContext";
import darkimg from "../assets/dark.png";
import whiteimg from "../assets/whitemoon.png";
function header({ setLightMode }) {
  const mode = useContext(ModeContext);
  function handleModeChange(event) {
    setLightMode(!mode);
  }
  //   console.log(mode);
  return (
    <ModeContext.Provider value={mode}>
      <div className={"header" + " " + (mode ? "header-light" : "header-dark")}>
        <div className="header-container">
          <h2 className="header-heading">Where in the world?</h2>
          <div className="header-theme" onClick={handleModeChange}>
            <div className="theme-img">
              <img src={mode ? darkimg : whiteimg} alt="dark" />
            </div>
            <div className="theme-text">Dark Mode</div>
          </div>
        </div>
        {/* where in the world */}
      </div>
    </ModeContext.Provider>
  );
}
export default header;
