import React from "react";

function SearchBar({ searchChange }) {
  return (
    <>
      <input
        className="mb-3"
        placeholder="search name"
        onChange={searchChange}
      ></input>
    </>
  );
}

export default SearchBar;