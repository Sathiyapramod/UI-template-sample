import React, { useState } from "react";
import "./Moves.css";

import MovesList from "./MovesList";

function Moves() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://test.api.boxigo.in/sample-data/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.Customer_Estimate_Flow);
        setData(result.Customer_Estimate_Flow);
      });
  };
  getData();

  return (
    <div className="moves-container">
      <div className="container-title">My Moves</div>
      <div className="card-container">
        {data.map((moves, index) => (
          <MovesList moves={moves} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Moves;
