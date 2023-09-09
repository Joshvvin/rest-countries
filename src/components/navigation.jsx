import React, { useState } from "react";
import "./navigation.css";
function Navigation(props) {
  // const [region, setRegion] = useState('Region');
  const { region, setRegion, setSearch, setSubRegion, data } = props;
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
    console.log(event.target.value);
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
  // console.log(subregions[region]);

  const Dispsubregions = () => {
    return subregions[region] != undefined && subregions[region].length != 0 ? (
      <>
        {subregions[region].map((subregion, index) => (
          <option key={index}>{subregion}</option>
        ))}
      </>
    ) : null;
  };
  // console.log(Dispsubregions);
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
        <div className="dropdowns">
          <select
            name="subregions"
            id="subRegionsId"
            onChange={handleSubRegionChange}
          >
            {/* <nav className='regionsDropDown'> */}
            <option value="" id="filterbyregion">
              Filter by SubRegion
            </option>
            <Dispsubregions />
            {/* {region != "" ? <Dispsubregions /> : null} */}
            {/* </nav> */}
          </select>
          {/* {console.log(region)} */}
        </div>
        <div className="dropdowns">
          <select name="regions" id="regionsId" onChange={handleRegionChange}>
            {/* <nav className='regionsDropDown'> */}
            <option value="" id="filterbyregion">
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
            {/* </nav> */}
          </select>
          {/* {console.log(region)} */}
        </div>
        <div className="dropdowns">
          <select name="sort" id="sortId" onChange={handleSortChange}>
            <option>Sort by Population</option>
            <option>Sort by Area</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
