import React, { useContext } from "react";
import "./navigation.css";
import img from "../assets/sort-arrows-icon.svg";
import { ModeContext } from "../ModeContext";

function Navigation(props) {
  const {
    region,
    setRegion,
    setSearch,
    setSubRegion,
    setSortValue,
    data,
    isascending,
    setIsAscending,
    subRegion,
  } = props;
  const mode = useContext(ModeContext);

  function handleSubRegionChange(event) {
    // console.log(event.target.value);
    setSubRegion(event.target.value);
  }
  function handleRegionChange(event) {
    setSubRegion("");
    setRegion(event.target.value);
  }
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  function handleSortChange(event) {
    setSortValue(event.target.value);
  }
  function handleSortOrder(event) {
    setIsAscending(!isascending);
  }
  const subregions = data.reduce((acc, country) => {
    if (region != "") {
      if (country.region === region) {
        if (acc[region] === undefined) {
          acc[region] = [country.subregion];
        } else {
          if (!acc[region].includes(country.subregion)) {
            acc[region].push(country.subregion);
          }
        }
      }
    }
    return acc;
  }, {});

  const Dispsubregions = () => {
    return subregions[region] != undefined && subregions[region].length != 0 ? (
      <>
        {subregions[region].map((subregion, index) => (
          <option
            selected={subRegion == subregion}
            value={subregion}
            key={subregion}
          >
            {subregion}
          </option>
        ))}
      </>
    ) : null;
  };
  return (
    <ModeContext.Provider value={mode}>
      <div className="navigation">
        <div
          className={"search" + " " + (mode ? "search-light" : "search-dark")}
        >
          <div className="search-mark">
            <div className="search-mark-text">Q</div>
          </div>
          <input
            type="text"
            id="search-countries"
            className={
              "search-countries" +
              " " +
              (mode ? "search-countries-light" : "search-countries-dark")
            }
            onChange={handleSearch}
            placeholder="Search for a country..."
          />
        </div>
        <div className="filter">
          <select
            name="regions"
            id="regionsId"
            className={
              "dropdown-selects" +
              " " +
              (mode ? "dropdown-selects-light" : "dropdown-selects-dark")
            }
            onChange={handleRegionChange}
          >
            <option
              value="default"
              className="dropdown-header"
              id="region-id"
              hidden
            >
              Filter by Region
            </option>
            <option value="Africa" id="africa">
              Africa
            </option>
            <option value="Americas" id="america">
              Americas
            </option>
            <option value="Asia" id="asia">
              Asia
            </option>
            <option value="Europe" id="europe">
              Europe
            </option>
            <option value="Oceania" id="Oceania">
              Oceania
            </option>
          </select>
          <select
            name="subregions"
            id="subRegionsId"
            className={
              "dropdown-selects" +
              " " +
              (mode ? "dropdown-selects-light" : "dropdown-selects-dark")
            }
            onChange={handleSubRegionChange}
          >
            <option
              selected={subRegion == ""}
              value="default"
              className="dropdown-header"
              id="subregion-id"
              hidden
            >
              Filter by Sub Region
            </option>
            <Dispsubregions />
          </select>
          <select
            name="sort"
            id="sortId"
            className={
              "dropdown-selects" +
              " " +
              (mode ? "dropdown-selects-light" : "dropdown-selects-dark")
            }
            onChange={handleSortChange}
          >
            <option value="default" className="dropdown-header" hidden>
              Sort By
            </option>
            <option>Population</option>
            <option>Area</option>
          </select>
          <button
            className={
              "sort-icon" + " " + (mode ? "sort-icon-light" : "sort-icon-dark")
            }
            onClick={handleSortOrder}
          >
            <img src={img} alt="sort_icon" />
          </button>
        </div>
      </div>
    </ModeContext.Provider>
  );
}
export default Navigation;
