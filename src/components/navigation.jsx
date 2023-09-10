import React, { useState } from "react";
import "./navigation.css";
import img from "../assets/sort_icon.png";
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
  } = props;
  function handleSubRegionChange(event) {
    setSubRegion(event.target.value);
  }
  function handleRegionChange(event) {
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
          <option key={index}>{subregion}</option>
        ))}
      </>
    ) : null;
  };
  return (
    <div className="navigation">
      <div className="search">
        <div className="search-mark">
          <div className="search-mark-text">Q</div>
        </div>
        <input
          type="text"
          id="search-countries"
          onChange={handleSearch}
          placeholder="Search for a country..."
        />
      </div>
      <div className="filter">
        <div className="dropdowns" id="region-dropdown">
          <select
            name="regions"
            id="regionsId"
            className="dropdown-selects"
            onChange={handleRegionChange}
          >
            <option value="0" className="dropdown-header" id="region-id">
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
        </div>
        <div className="dropdowns" id="subregion-dropdown">
          <select
            name="subregions"
            id="subRegionsId"
            className="dropdown-selects"
            onChange={handleSubRegionChange}
          >
            <option value="0" className="dropdown-header" id="subregion-id">
              Filter by SubRegion
            </option>
            <Dispsubregions />
          </select>
        </div>
        <div className="dropdowns sort-dropdown">
          <select
            name="sort"
            id="sortId"
            className="dropdown-selects"
            onChange={handleSortChange}
          >
            <option value="0" className="dropdown-header">
              Sort By
            </option>
            <option>Population</option>
            <option>Area</option>
          </select>
          <button className="sort-icon" onClick={handleSortOrder}>
            <img src={img} alt="sort_icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
