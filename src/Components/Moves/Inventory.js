import React, { useState } from "react";
import "./Moves.css";

function Inventory({ item }) {
  console.log(item);
  const [isItemToggled, setToggle] = useState(false);
  return (
    <div className="">
      <div className="item-title">
        <div className="item-name">{item.displayName}</div>
        <div
          className="item-toggleButton"
          onClick={() => setToggle(!isItemToggled)}
        >
          {isItemToggled ? "^" : "V"}
        </div>
      </div>
      {/* {item.category.map((item, index) => {
        console.log(item.category);
        return (
          <div className="item-title">
            <div className="item-name">{item.displayName}</div>
          </div>
        );
      })} */}
    </div>
  );
}
function Item({ item, isItemToggled, setToggle }) {
  return <div className="item-body"></div>;
}

export default Inventory;
