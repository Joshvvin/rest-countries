import React, { useState, useContext } from "react";
import "./content.css";
import Navigation from "./navigation";
import Items from "./items";
import { ModeContext } from "../ModeContext";
function Content() {
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [data, setData] = useState([]);
  const [isascending, setIsAscending] = useState(true);
  //   const [subregions, setSubregions] = useState("");
  const mode = useContext(ModeContext);

  return (
    <ModeContext.Provider value={mode}>
      <div
        className="content"
        style={
          mode
            ? {
                backgroundColor: "hsl(0, 0%, 98%)",
                color: "hsl(207, 26%, 17%)",
              }
            : {
                backgroundColor: "hsl(207, 26%, 17%)",
                color: "hsl(0, 0%, 98%)",
              }
        }
      >
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
    </ModeContext.Provider>
  );
}
export default Content;
