import React from "react";
import "./style.css";

interface ButtonProps {
  button: string;
}

const Button: React.FC<ButtonProps> = ({ button }) => {
  return <button className="button">{button}</button>;
};

export default Button;

// Quantos botões tem?
// Qual tamanho?
// Tem texto?
// Onde colocar o text?
// Tem SVG?
// SVG é um link ou botão?
