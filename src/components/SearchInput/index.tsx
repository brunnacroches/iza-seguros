import React from "react";
import "./style.css";
import { Container } from "./styles";

interface SearchInputProps {
  searchInput: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchInput }) => {
  return (
    <Container>
      <input className="searchInput">{searchInput}</input>
    </Container>
  );
};

export default SearchInput;
