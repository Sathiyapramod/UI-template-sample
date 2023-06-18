import React from "react";
import "./Sidebar.css";
import bus from "../../assets/bus.svg";
import user from "../../assets/user.svg";
import bill from "../../assets/bill.svg";
import info from "../../assets/info.svg";

function Sidebar() {
  return (
    <div className="sidebar-container">
    <h1>Logo</h1>
      <div className="sidebar-menu">
        <div className="menu">
          <div className="menu-icon">
            <img src={bus} alt="..." width="30" height="30" />
          </div>
          <div className="colored-menu-title">My Moves</div>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <img src={user} alt="..." width="30" height="30" />
          </div>
          <div className="menu-title">My Profile</div>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <img src={bill} alt="..." width="30" height="30" />
          </div>
          <div className="menu-title">Get Quote</div>
        </div>
        <div className="menu">
          <div className="menu-icon">
            <img src={info} alt="..." width="30" height="30" />
          </div>
          <div className="menu-title">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
