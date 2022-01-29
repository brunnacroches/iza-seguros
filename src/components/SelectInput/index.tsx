import React from "react";
import "./style.css";
import { Container } from "./styles";

interface SelectionInputProps {
  selectionInput: string;
}

const SelectionInput: React.FC<SelectionInputProps> = ({ selectionInput }) => {
  return (
    <Container>
      <input className="selectionInput">{selectionInput}</input>
    </Container>
  );
};

export default SelectionInput;
