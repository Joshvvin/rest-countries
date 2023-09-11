import React, { useState } from "react";
export default function Custom() {
  const [value, setValue] = useState(0);
  const [divs, setDivs] = useState([]);
  function handleInputChange(event) {
    setValue(event.target.value);
  }
  function handleButtonClick(event) {
    console.log(event.target.value, value);
  }
  return (
    <>
      <h1>Counter :{value}</h1>
      <input type="text" id="input" onChange={handleInputChange} />
      <button onClick={handleButtonClick}>{value}</button>
    </>
  );
}
