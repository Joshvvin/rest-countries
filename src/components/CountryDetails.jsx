import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import ErrorState from "./errorstate";
import Loader from "./loader";
import "./CountryDetails.css";
import { ModeContext } from "../ModeContext";
import arrow from "../assets/arrow.svg";
import CountryBorders from "./CountryBorders";
// import earrow from "../assets/whitearrow.png";
export default function CountryDetails(props) {
  const { abbreviation } = props;
  const { id } = useParams();
  const [datafailed, setDataFailed] = useState("");
  const [loading, setLoading] = useState(true);
  const mode = useContext(ModeContext);
  //   console.log(id);
  const [country, setCountry] = useState("");
  const baseurl = "https://restcountries.com/v3.1/alpha?codes=";
  const url = baseurl + id;
  //   console.log(typeof url);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setLoading(false);
        setCountry(data[0]);
      })
      .catch((err) => {
        setDataFailed(err.message);
      });
  }, []);
  // console.log(country);
  return (
    <ModeContext.Provider value={mode}>
      <div
        className={
          "details-container" +
          " " +
          (mode ? "details-container-light" : "details-container-dark")
        }
      >
        {datafailed != "" ? (
          <ErrorState errorname={datafailed} />
        ) : loading ? (
          <Loader />
        ) : (
          <>
            <div className="button-container">
              <NavLink
                to="/"
                className={
                  "back-to-home" +
                  " " +
                  (mode ? "back-to-home-light" : "back-to-home-dark")
                }
              >
                <div className="back-arrow">
                  <img
                    className={mode ? "arrow-light" : "arrow-dark"}
                    src={arrow}
                    alt="back-arrow"
                  />
                </div>
                <div
                  className={
                    "back-text" +
                    " " +
                    (mode ? "back-text-light" : "back-text-dark")
                  }
                >
                  Back
                </div>
              </NavLink>
            </div>
            <div className="country-details-container">
              <div className="country-image-container">
                <img className="detail-img" src={country.flags.png} alt="" />
              </div>
              <div className="country-all-details">
                <div className="country-details-name">
                  {country.name.common}
                </div>
                <div className="country-subdetails-container">
                  <div className="country-native-name country-subdetails">
                    <div className="subdetails-heading">Native Name:</div>
                    <div className="subdetails-value">
                      {
                        country.name.nativeName[
                          Object.keys(country.name.nativeName).find(
                            (value, index) =>
                              index ==
                              Object.keys(country.name.nativeName).length - 1
                                ? true
                                : false
                          )
                        ].common
                      }
                    </div>
                  </div>
                  <div className="country-top-level-domain country-subdetails">
                    <div className="subdetails-heading">Top Level Domain:</div>
                    <div className="subdetails-value">{country.tld[0]}</div>
                  </div>
                  <div className="country-pop country-subdetails">
                    <div className="subdetails-heading">Population:</div>
                    <div className="subdetails-value">{country.population}</div>
                  </div>
                  <div className="country-currencies country-subdetails">
                    <div className="subdetails-heading">Currencies:</div>
                    <div className="subdetails-value">
                      {Object.keys(country.currencies)
                        .map((curr) => curr)
                        .join(",")}
                    </div>
                  </div>
                  <div className="country-reg country-subdetails">
                    <div className="subdetails-heading">Region:</div>
                    <div className="subdetails-value">{country.region}</div>
                  </div>
                  <div className="country-languages country-subdetails">
                    <div className="subdetails-heading">Languages:</div>
                    <div className="subdetails-value">
                      {Object.values(country.languages)
                        .map((lang) => lang)
                        .join(",")}
                    </div>
                  </div>
                  <div className="country-subregs country-subdetails subregion-subdetails">
                    <div className="subdetails-heading">Sub Region:</div>
                    <div className="subdetails-value">{country.subregion}</div>
                  </div>
                  <div className="country-cap country-subdetails">
                    <div className="subdetails-heading">Capital:</div>
                    <div className="subdetails-value">{country.capital[0]}</div>
                  </div>
                </div>
                {country.borders != undefined ? (
                  <div className="country-border-details">
                    <div className="country-border-text subdetails-heading">
                      Border Countries:
                    </div>
                    <div className="country-border-values">
                      {
                        country.borders.map((border) => (
                          <CountryBorders>
                            {abbreviation[border].name}
                          </CountryBorders>
                        ))
                        // : null
                      }
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </ModeContext.Provider>
  );
}
