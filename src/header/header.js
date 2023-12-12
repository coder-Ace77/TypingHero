import React from "react";
import logo from "./../images/keyboard.png";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-item header-logo">
          <img className="logo" src={logo} alt="Not working" />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item test-duration">
          <span>Test Duration: </span>
          <div className="test-times">
            <span>
              <button className="time-duration-button" id="selected">
                0:30
              </button>
            </span>
            <span>
              <button className="time-duration-button">1:00</button>
            </span>
            <span>
              <button className="time-duration-button">1:30</button>
            </span>
            <span>
              <button className="time-duration-button">3:00</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
