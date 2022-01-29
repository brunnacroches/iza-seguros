import React from "react";
import "./style.css";

interface PasswordInputProps {
  passwordInput: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ passwordInput }) => {
  return <input className="passwordInput">{passwordInput}</input>;
};

export default PasswordInput;
