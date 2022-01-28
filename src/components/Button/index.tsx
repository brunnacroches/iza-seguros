import React from "react";
import "./style.css";

interface ButtonProps {
  button?: string;
}

const Button: React.FC<ButtonProps> = ({ button }) => {
  return <button className="button">{button}</button>;
};

export default Button;
