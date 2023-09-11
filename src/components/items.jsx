import React, { useEffect, useState, useContext } from "react";
import "./items.css";
import CountryCard from "./countrycard";
import Loader from "./loader";
import ErrorState from "./errorstate";
import { ModeContext } from "../ModeContext";

function Items(props) {
  const mode = useContext(ModeContext);
  const {
    region,
    search,
    subRegion,
    setSubRegion,
    sortValue,
    data,
    setData,
    isascending,
  } = props;
  const url = "https://restcountries.com/v3.1/all";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        } else {
          return res.json();
        }
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
      });
  }, []);
  const regionFilteredCountries = data.filter((country) => {
    return region != "" ? country.region == region : true;
  });
  function subregionFilter(data) {
    return data.filter((country) =>
      subRegion != "" ? country.subregion == subRegion : true
    );
  }
  const subregionFilteredCountries = subregionFilter(regionFilteredCountries);
  function searchFilter(data) {
    return data.filter((country) =>
      search != "" ? country.name.common.toLowerCase().includes(search) : true
    );
  }
  const searchFilteredCountries = searchFilter(subregionFilteredCountries);

  return (
    <ModeContext.Provider value={mode}>
      <div
        className="items-container"
        // style={
        //   mode
        //     ? {
        //         backgroundColor: "hsl(0, 0%, 100%)",
        //         color: "hsl(207, 26%, 17%)",
        //       }
        //     : {
        //         backgroundColor: "hsl(207, 26%, 17%)",
        //         color: "hsl(0, 0%, 100%)",
        //       }
        // }
      >
        {error != "" ? (
          <div className="loadingOrFailed">
            <ErrorState errorname={error} />
          </div>
        ) : loading ? (
          <div className="loadingOrFailed">
            <Loader />
          </div>
        ) : searchFilteredCountries.length == 0 ? (
          <div className="loadingOrFailed">No such countries found</div>
        ) : (
          searchFilteredCountries
            .sort((countryA, countryB) => {
              if (sortValue === "Population") {
                if (countryA.population < countryB.population) {
                  return isascending ? -1 : 1;
                } else {
                  return isascending ? 1 : -1;
                }
              } else if (sortValue === "Area") {
                if (countryA.area < countryB.area) {
                  return isascending ? 1 : -1;
                } else {
                  return isascending ? -1 : 1;
                }
              }
            })
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flags={country.flags}
                  area={country.area}
                />
              );
            })
        )}
      </div>
    </ModeContext.Provider>
  );
}
export default Items;
