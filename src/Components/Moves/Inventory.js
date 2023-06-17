import React, { useState } from "react";
import "./Moves.css";
import up from "../../assets/arrow-up.svg";
import down from "../../assets/arrow-down.svg";

function Inventory({ item }) {
  const [isItemToggled, setToggle] = useState(false);

  const contentStyle = {
    display: isItemToggled ? "flex" : "none",
  };

  return (
    <div className="">
      <div className="item-title" onClick={() => setToggle(!isItemToggled)}>
        <div className="item-name">
          {item.displayName}{" "}
          <div className="colored-count">({item.category.length})</div>
        </div>
        <div
          className="item-toggleButton"
          onClick={() => setToggle(!isItemToggled)}
        >
          {isItemToggled ? (
            <img src={down} alt="..." width={15} height={15} />
          ) : (
            <img src={up} alt="..." width={15} height={15} />
          )}
        </div>
      </div>
      <div style={contentStyle} className="item-body">
        {item.category.map((category, index) => {
          return (
            <div className="category" key={index}>
              {category.displayName}
              <div className="category-items">
                {category.items.map((item, index) => {
                  return (
                    <div className="category-block">
                      <div className="category-title">
                        {item.displayName}
                        <br />
                        <span className="category-subheading">
                          {item.name_old}
                        </span>
                      </div>
                      <div className="category-count">
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
function Item({ item, isItemToggled, setToggle }) {
  return <div className="item-body"></div>;
}

export default Inventory;
