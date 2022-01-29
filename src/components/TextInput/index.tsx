import React from "react";
import "./style.css";

interface TextInputProps {
  textInput: string;
}

const TextInput: React.FC<TextInputProps> = ({ textInput }) => {
  return <input className="textInput">{textInput}</input>;
};

export default TextInput;
