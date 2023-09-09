import React, { useState } from "react";
import "./content.css";
import Navigation from "./navigation";
import Items from "./items";
function Content() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [subregion, setSubRegion] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [data, setData] = useState([]);

  //   const [subregions, setSubregions] = useState("");
  return (
    <div className="content">
      <div className="content-container">
        <Navigation
          region={region}
          setRegion={setRegion}
          setSearch={setSearch}
          setSubRegion={setSubRegion}
          data={data}
          //   subregions={subregions}
        />
        <Items
          region={region}
          search={search}
          subregion={subregion}
          setSubRegion={setSubRegion}
          data={data}
          setData={setData}
        />
      </div>
    </div>
  );
}
export default Content;
