import React, { useEffect, useState } from "react";
import "./items.css";
import CountryCard from "./countrycard";
function Items(props) {
  const { region, search, subregion, setSubRegion, data, setData } = props;
  const url = "https://restcountries.com/v3.1/all";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // console.log(region);
  // const subregions = {};
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
        // console.log(subregions);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);
  // console.log(subregion);
  return (
    <div className="items-container">
      {error ? (
        <div className="loadingOrFailed">Failed to fetch data</div>
      ) : loading ? (
        <div className="loadingOrFailed">Loading...</div>
      ) : (
        data
          .filter((country) => {
            return region != "" ? country.region == region : true;
          })
          .filter((country) => {
            if (region != "") {
              // console.log(subregion);
            }
            return subregion != "" ? country.subregion == subregion : true;
          })
          .filter((country) => {
            return search != ""
              ? country.name.common.toLowerCase().includes(search)
              : true;
          })
          .map((country) => {
            return (
              <CountryCard
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flags={country.flags}
              />
            );
          })
      )}
    </div>
  );
}
export default Items;
