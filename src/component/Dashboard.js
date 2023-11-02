import React, { useState } from "react";
import "./Dashboard.css";
import logo from "../image/logo.svg";

function Dashboard() {
  const [isExpended, setExpandState] = useState("false");
  const menuItems = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Admin Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Analytics",
      icon: "icons/analytic.svg",
    },
    {
      text: "Business Spot",
      icon: "icons/business.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];
  return (
    <div>
      <div
        className={
          isExpended
            ? "slide-nav-container"
            : "slide-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpended && (
              <div className="nav-brand">
                <img src={logo} />
                <h2>Dreams Focus</h2>
              </div>
            )}
            <button
              className={
                isExpended
                  ? "hamburger hamburger-in"
                  : "hamburger hamburger-out"
              }
              onClick={() => setExpandState(!isExpended)}
            >
              <i class="bx bx-menu"></i>
            </button>
          </div>
          <div className="nv-menu">
            {menuItems.map(({ text, icon }) => (
              <a
                href="#"
                className={isExpended ? "menu-item" : "menu-item menu-item-NX"}
              >
                <img src={icon} />
                {isExpended && <p>{text}</p>}
                <div className="tooltip">{text}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
