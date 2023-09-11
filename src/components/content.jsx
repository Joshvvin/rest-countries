import React, { useState } from "react";
import "./content.css";
import Navigation from "./navigation";
import Items from "./items";
function Content() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [data, setData] = useState([]);
  const [isascending, setIsAscending] = useState(true);
  //   const [subregions, setSubregions] = useState("");
  return (
    <div className="content">
      <div className="content-container">
        <Navigation
          region={region}
          setRegion={setRegion}
          setSearch={setSearch}
          setSubRegion={setSubRegion}
          setSortValue={setSortValue}
          data={data}
          isascending={isascending}
          setIsAscending={setIsAscending}
          subRegion={subRegion}

          //   subregions={subregions}
        />
        <Items
          region={region}
          search={search}
          subRegion={subRegion}
          setSubRegion={setSubRegion}
          sortValue={sortValue}
          data={data}
          setData={setData}
          isascending={isascending}
        />
      </div>
    </div>
  );
}
export default Content;
