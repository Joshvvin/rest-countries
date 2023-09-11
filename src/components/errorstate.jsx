import React from "react";
import "./errorstate.css";
function ErrorState(props) {
  //   const { name, population, region, capital, flags, area } = props;
  // console.log(name, population, capital ,region);
  return (
    <div className="errorState" id="errorStateId">
      {props.errorname}
    </div>
  );
}
export default ErrorState;
