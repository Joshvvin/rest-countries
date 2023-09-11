import React, { useEffect, useState } from "react";
import "./items.css";
import CountryCard from "./countrycard";
import Loader from "./loader";
import ErrorState from "./errorstate";
function Items(props) {
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

  // function sortCountries(data) {
  //   const res = data.sort((countryA, countryB) =>
  //     sortValue === "Population"
  //       ? countryA.population < countryB.population
  //         ? isascending
  //           ? -1
  //           : 1
  //         : isascending
  //         ? 1
  //         : -1
  //       : sortValue === "Area"
  //       ? countryA.area < countryB.area
  //         ? isascending
  //           ? -1
  //           : 1
  //         : isascending
  //         ? 1
  //         : -1
  //       : null
  //   );
  //   // console.log(res);
  //   return res;
  // }
  // const sortedCountries = sortCountries(searchFilteredCountries);
  // // sortCountries = sortCountries(searchFilteredCountries);
  // function renderCountries(data) {
  //   return data.map((country) => (
  //     <CountryCard
  //       key={country.name.common}
  //       name={country.name.common}
  //       population={country.population}
  //       region={country.region}
  //       capital={country.capital}
  //       flags={country.flags}
  //       area={country.area}
  //     />
  //   ));
  // }
  // const RenderedCountries = renderCountries(sortCountries);
  return (
    <div className="items-container">
      {
        error != "" ? (
          <div className="loadingOrFailed">
            <ErrorState errorname={error} />
          </div>
        ) : loading ? (
          <div className="loadingOrFailed">
            <Loader />
          </div>
        ) : // regionFilteredCountries(data)
        //   .filter((country) => {
        //     return subregion != "" ? country.subregion == subregion : true;
        //   })
        //   .filter((country) => {
        //     return search != ""
        //       ? country.name.common.toLowerCase().includes(search)
        //       : true;
        //   })
        searchFilteredCountries.length == 0 ? (
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
        )
        // <RenderedCountries />
      }
    </div>
  );
}
export default Items;
