import React, { useContext } from "react";
import "./countrycard.css";
import { ModeContext } from "../ModeContext";

function CountryCard(props) {
  const { name, population, region, capital, flags, area } = props;
  // console.log(name, population, capital ,region);
  const mode = useContext(ModeContext);
  return (
    <ModeContext.Provider value={mode}>
      <div
        className="country"
        id={name}
        style={
          mode
            ? {
                backgroundColor: "hsl(0, 0%, 100%)",
                color: "hsl(207, 26%, 17%)",
              }
            : {
                backgroundColor: "hsl(209, 23%, 22%)",
                color: "hsl(0, 0%, 100%)",
              }
        }
      >
        <div className="country-image">
          <img src={flags.png} alt={flags.alt} />
        </div>
        <div className="country-details">
          <div className="country-name">{name}</div>
          <div className="country-others">
            <div className="country-others-text">Population:</div>
            <div className="country-others-value">{population}</div>
          </div>
          <div className="country-others">
            <div className="country-others-text">Region:</div>
            <div className="country-others-value">{region}</div>
          </div>
          <div className="country-others">
            <div className="country-others-text">Capital:</div>
            <div className="country-others-value">{capital}</div>
          </div>
          <div className="country-others">
            <div className="country-others-text">Area:</div>
            <div className="country-others-value">{area}</div>
          </div>
        </div>
      </div>
    </ModeContext.Provider>
  );
}
export default CountryCard;
