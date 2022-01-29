import React from "react";
import "./style.css";

interface SearchInputProps {
  searchInput: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchInput }) => {
  return <input className="searchInput">{searchInput}</input>;
};

export default SearchInput;
