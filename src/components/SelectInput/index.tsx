import React from "react";
import "./style.css";

interface SelectionInputProps {
  selectionInput: string;
}

const SelectionInput: React.FC<SelectionInputProps> = ({ selectionInput }) => {
  return <input className="selectionInput">{selectionInput}</input>;
};

export default SelectionInput;
