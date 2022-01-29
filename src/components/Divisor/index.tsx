import React from "react";
import "./style.css";

interface DivisorProps {
  divisor: string;
}

const Divisor: React.FC<DivisorProps> = ({ divisor }) => {
  return <p className="divisorIza">{divisor}</p>;
};

export default Divisor;
