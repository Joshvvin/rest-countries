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
    console.log(event.target.value);
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
          className="search"
          style={
            mode
              ? {
                  backgroundColor: "hsl(0, 0%, 100%)",
                  color: " hsl(200, 15%, 8%)",
                }
              : {
                  backgroundColor: "hsl(209, 23%, 22%)",
                  color: "hsl(0, 0%, 100%)",
                }
          }
        >
          <div className="search-mark">
            <div className="search-mark-text">Q</div>
          </div>
          <input
            type="text"
            id="search-countries"
            onChange={handleSearch}
            placeholder="Search for a country..."
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          />
        </div>
        <div className="filter">
          {/* <div
            className="dropdowns"
            id="region-dropdown"
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          > */}
          <select
            name="regions"
            id="regionsId"
            className="dropdown-selects"
            onChange={handleRegionChange}
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
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
          {/* </div> */}
          {/* <div
            className="dropdowns"
            id="subregion-dropdown"
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          > */}
          <select
            name="subregions"
            id="subRegionsId"
            className="dropdown-selects"
            onChange={handleSubRegionChange}
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            <option
              selected={subRegion == ""}
              value="default"
              className="dropdown-header"
              id="subregion-id"
              hidden
            >
              Filter by SubRegion
            </option>
            <Dispsubregions />
          </select>
          {/* </div> */}
          {/* <div
            className="dropdowns sort-dropdown"
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          > */}
          <select
            name="sort"
            id="sortId"
            className="dropdown-selects"
            onChange={handleSortChange}
            style={
              mode
                ? {
                    backgroundColor: "hsl(0, 0%, 100%)",
                    color: " hsl(200, 15%, 8%)",
                  }
                : {
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "hsl(0, 0%, 100%)",
                  }
            }
          >
            <option value="default" className="dropdown-header" hidden>
              Sort By
            </option>
            <option>Population</option>
            <option>Area</option>
          </select>
          <button className="sort-icon" onClick={handleSortOrder}>
            <img src={img} alt="sort_icon" />
          </button>
          {/* </div> */}
        </div>
      </div>
    </ModeContext.Provider>
  );
}
export default Navigation;
