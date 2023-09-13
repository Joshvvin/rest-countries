import React, { useContext } from "react";
import "./CountryBorders.css";
import { ModeContext } from "../ModeContext";
export default function CountryBorders(props) {
  const mode = useContext(ModeContext);
  return (
    <ModeContext.Provider value={mode}>
      <div
        className={
          "country-borders" +
          " " +
          (mode ? "country-borders-light" : "country-borders-dark")
        }
      >
        {props.children}
      </div>
    </ModeContext.Provider>
  );
}
