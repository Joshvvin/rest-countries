import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import ErrorState from "./errorstate";
import Loader from "./loader";
import "./CountryDetails.css";
import { ModeContext } from "../ModeContext";
import backarrow from "../assets/arrow-left-55.png";
export default function CountryDetails() {
  const { id } = useParams();
  const [datafailed, setDataFailed] = useState("");
  const [loading, setLoading] = useState(true);
  const mode = useContext(ModeContext);
  //   console.log(id);
  const [country, setCountry] = useState("");
  const url = "https://restcountries.com/v3.1/name/" + id;
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
        setDataFailed(err.name);
      });
  }, []);
  //
  //   console.log(country.name.nativeName);
  //   const nativeName = Object.values(country.name.nativeName).find((value) => {
  //     return true;
  //   });
  //   console.log(nativeName);
  //   console.log(country);
  //   console.log(mode);
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
              <NavLink to="/" className="back-to-home">
                <div className="back-arrow">
                  <img src={backarrow} alt="back-arrow" />
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
                            (value) => true
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
                      {Object.keys(country.currencies).map(
                        (curr) => curr + ","
                      )}
                    </div>
                  </div>
                  <div className="country-reg country-subdetails">
                    <div className="subdetails-heading">Region:</div>
                    <div className="subdetails-value">{country.region}</div>
                  </div>
                  <div className="country-languages country-subdetails">
                    <div className="subdetails-heading">Languages:</div>
                    <div className="subdetails-value">
                      {Object.values(country.languages).map(
                        (lang) => lang + ","
                      )}
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
                    <div className="country-border-text">Border Countries:</div>
                    <div className="country-border-values">
                      {
                        // country.borders != undefined
                        //   ?
                        country.borders.map((border) => (
                          <div className="country-borders">{border}</div>
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
