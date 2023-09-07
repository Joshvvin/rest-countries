import React, { useState } from 'react'
import './navigation.css'
function Navigation(props){
    // const [region, setRegion] = useState('Region');
    const { region, search } = props;
    function handleChange(event){
        // console.log(event.target.value);
        region(event.target.value);
    }
    function handleSearch(event){
        // console.log(event.target.value);
        search(event.target.value);
    }
    return (
        <div className="navigation">
            <div className="search">
                <div className="search-mark">
                   <div className="search-mark-text">
                    Q
                   </div>
                </div>
                <input type="text" id='search-countries' onKeyUp={handleSearch}placeholder='Search for a country...'/>
            </div>
            <div className="filter">
                <div className="dropdown">
                    {/* <div className="filter-text">Filter by Region</div>
                    <div className="filter-drop">
                        v
                    </div> */}
                    <select name="regions" id="regionsId" onChange={handleChange}>
                        <option value="Africa" id="africa">Africa</option>
                        <option value="Americas" id="america">Americas</option>
                        <option value="Asia" id="asia">Asia</option>
                        <option value="Europe" id="europe">Europe</option>
                        <option value="Oceania" id="Oceania">Oceania</option>
                    </select>
                    {/* {console.log(region)} */}
                </div>
            </div>
        </div>
    )
}
export default Navigation;