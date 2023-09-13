import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./reset.css";
import { ModeContext } from "./ModeContext";
import Header from "./components/header";
import Content from "./components/content.jsx";

import CountryDetails from "./components/CountryDetails";

import Error from "./Error";
function App() {
  const [lightMode, setLightMode] = useState(true);
  const [abbreviation, setAbbreviation] = useState([]);
  // console.log(abbreviation);
  return (
    <BrowserRouter>
      <ModeContext.Provider value={lightMode}>
        <Header setLightMode={setLightMode} />
        <Routes>
          <Route
            path="/"
            element={<Content setAbbreviation={setAbbreviation} />}
          ></Route>
          <Route
            path="/country/:id"
            element={<CountryDetails abbreviation={abbreviation} />}
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </ModeContext.Provider>
    </BrowserRouter>
  );
}
export default App;
