import React, { useContext } from "react";
import "./countrycard.css";
import { ModeContext } from "../ModeContext";
import { NavLink } from "react-router-dom";
function CountryCard(props) {
  const { name, population, region, capital, flags, area, id } = props;
  const mode = useContext(ModeContext);
  function handleCountryClick(event) {}
  return (
    <ModeContext.Provider value={mode}>
      <NavLink
        to={"/country/" + name}
        className={
          "country-card" +
          " " +
          (mode ? "country-card-light" : "country-card-dark")
        }
        id={name}
        onClick={handleCountryClick}
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
      </NavLink>
    </ModeContext.Provider>
  );
}
export default CountryCard;
