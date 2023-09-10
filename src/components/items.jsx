import React, { useEffect, useState } from "react";
import "./items.css";
import CountryCard from "./countrycard";
import Loader from "./loader";
import ErrorState from "./errorstate";
function Items(props) {
  const {
    region,
    search,
    subregion,
    setSubRegion,
    sortValue,
    data,
    setData,
    isascending,
  } = props;
  const url = "https://restcountries.com/v3.1/all";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw error("failed to fetch data");
        } else {
          return res.json();
        }
      })
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  function regionFilter() {
    const regionFilteredCountries = data.filter((country) => {
      return region != "" ? country.region == region : true;
    });
    return regionFilteredCountries;
  }
  return (
    <div className="items-container">
      {error ? (
        <div className="loadingOrFailed">
          <ErrorState />
        </div>
      ) : loading ? (
        <div className="loadingOrFailed">
          <Loader />
        </div>
      ) : (
        regionFilter()
          .filter((country) => {
            return subregion != "" ? country.subregion == subregion : true;
          })
          .filter((country) => {
            return search != ""
              ? country.name.common.toLowerCase().includes(search)
              : true;
          })
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
            // console.log("inside nothing to show");
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
  );
}
export default Items;
