import React, { useState } from "react";
import "./App.css";
import "./reset.css";
import { ModeContext } from "./ModeContext";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    // <body>
    <ModeContext.Provider value={lightMode}>
      <Header setLightMode={setLightMode} />
      <Content />
    </ModeContext.Provider>
    // </body>
  );
}
export default App;
