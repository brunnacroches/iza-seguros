import React from "react";
import "./style.css";
import { Container } from "./styles";

interface TextInputProps {
  textInput: string;
}

const TextInput: React.FC<TextInputProps> = ({ textInput }) => {
  return (
    <Container>
      <input className="textInput">{textInput}</input>
    </Container>
  );
};

export default TextInput;
