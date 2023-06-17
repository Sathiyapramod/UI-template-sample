import React, { useState } from "react";
import arrow from "../../assets/arrow-right-circle.svg";
import house from "../../assets/house.svg";
import bill from "../../assets/bill.svg";
import bus from "../../assets/bus.svg";
import date from "../../assets/date.svg";
import edit from "../../assets/edit.svg";
import caution from "../../assets/caution.svg";
import "./Moves.css";
import Inventory from "./Inventory";

function MovesList({ moves }) {
  // console.log(moves.items);
  const [isActive, setActive] = useState(false);
  const [isItemToggled, setToggle] = useState(false);
  const contentStyle = {
    display: isActive ? "block" : "none",
  };

  return (
    <div className="card">
      <div className="card-title">
        <div className="title">
          <div className="from-address">
            <div className="from-title">From</div>
            <div className="moving-to">{moves.moving_to}</div>
          </div>
          <div className="direction shadowed">
            <img src={arrow} alt="..." width="20" height="20" />
          </div>
          <div className="to-address">
            <div className="to-title">To</div>
            <div className="moving-to">{moves.moving_from}</div>
          </div>
          <div className="request-details">
            <div className="request-title">Request#</div>
            <div className="request-no colored">{moves.estimate_id}</div>
          </div>
        </div>
      </div>
      <br />
      <div className="card-status">
        <div className="house-type">
          <div className="menu-icon">
            <img src={house} alt="..." width={15} height={15} />
          </div>
          <div className="menu-item">{moves.property_size}</div>
        </div>
        <div className="house-type">
          <div className="menu-icon">
            <img src={bill} alt="..." width={15} height={15} />
          </div>
          <div className="menu-item">{moves.total_items}</div>
        </div>
        <div className="house-type">
          <div className="menu-icon">
            <img src={bus} alt="..." width={15} height={15} />
          </div>
          <div className="menu-item">{moves.distance}</div>
        </div>
        <div className="house-type">
          <div className="menu-icon">
            <img src={date} alt="..." width={15} height={15} />
          </div>
          <div className="menu-item">{moves.date_created}</div>
        </div>
        <div className="edit-option">
          <img src={edit} alt="..." width={15} height={15} />
        </div>
        <div className="flexible">
          {moves.move_date_flexible === "0" ? (
            <input type="checkbox" disabled />
          ) : (
            <input type="checkbox" />
          )}{" "}
          is Flexible
        </div>
        <div className="card-actions">
          <button
            className="action-button"
            onClick={() => setActive(!isActive)}
          >
            {!isActive ? "View more details" : "Hide Details"}
          </button>
          <button className="colored-button">Quotes Awaiting</button>
        </div>
      </div>
      <div className="disclaimer">
        <img src={caution} alt="..." width={15} height={15} />
        <span>Please update move date before two days of shifting</span>
      </div>

      <div className="card-body" style={contentStyle}>
        <div className="content-info">
          <div className="additional-info">Additional Information</div>
          <div>
            <button className="colored-button">Edit Additional Info</button>
          </div>
        </div>
        <div className="content-info">
          <div className="additional-info">House Details</div>
          <div>
            <button className="colored-button">Edit House Details</button>
          </div>
        </div>
        <span className="colored-title">New House details</span>
        <div className="house-details">
          <div className="from-address">
            <div className="from-title">Floor No</div>
            <div className="moving-to">{moves.new_floor_no}</div>
          </div>
          <div className="from-address">
            <div className="from-title">Elevator</div>
            <div className="moving-to">{moves.new_elevator_availability}</div>
          </div>
          <div className="from-address">
            <div className="from-title">Parking Distance</div>
            <div className="moving-to">{moves.new_parking_distance}</div>
          </div>
        </div>
        <span className="colored-title">Existing House details</span>
        <div className="house-details">
          <div className="from-address">
            <div className="from-title">Floor No</div>
            <div className="moving-to">{moves.old_floor_no}</div>
          </div>
          <div className="from-address">
            <div className="from-title">Elevator</div>
            <div className="moving-to">{moves.old_elevator_availability}</div>
          </div>
          <div className="from-address">
            <div className="from-title">Parking Distance</div>
            <div className="moving-to">{moves.old_parking_distance}</div>
          </div>
        </div>
        <div className="content-info">
          <div className="additional-info">Inventory Details</div>
          <div>
            <button className="colored-button">Edit Inventory Details</button>
          </div>
        </div>
        {moves.items.inventory.map((inventory, index) => {
          return <Inventory item={inventory} key={index} />;
        })}
      </div>
      <hr />
    </div>
  );
}

export default MovesList;
