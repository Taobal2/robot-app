import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Enter your robot name"
        className="input"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
