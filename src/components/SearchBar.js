import React from "react";
import "../styles/searchbar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-field">
        <label>Where</label>
        <input id="input" type="text" placeholder="City,Airport"></input>
        <hr style={{width:"150px"}}></hr>
      </div>
      <div className="search-field">
        <label>From Date</label>
        <select>
          <option id="option">Select Date</option>
        </select>
        <hr />
      </div>
      <div className="search-field">
        <label>From Time</label>
        <select>
          <option id="option">Select Time</option>
        </select>
        <hr />
      </div>
      <div className="search-field">
        <label>Until Date</label>
        <select>
          <option id="option">Select Date</option>
        </select>
        <hr />
      </div>
      <div className="search-field">
        <label>Until Time</label>
        <select>
          <option id="option">Select Time</option>
        </select>
        <hr />
      </div>
      <button className="search-btn">SEARCH</button>
    </div>
  );
};

export default SearchBar;
