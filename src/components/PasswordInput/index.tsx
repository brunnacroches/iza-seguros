import React from "react";
import "./style.css";
import { Container } from "./styles";

interface PasswordInputProps {
  passwordInput: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ passwordInput }) => {
  return (
    <Container>
      <input className="passwordInput">{passwordInput}</input>
    </Container>
  );
};

export default PasswordInput;
