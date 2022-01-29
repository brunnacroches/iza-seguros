import React from "react";
import "./style.css";

interface AtivoProps {
  ativo: string;
}

const Ativo: React.FC<AtivoProps> = ({ ativo }) => {
  return <p className="ativo">{ativo}</p>;
};

export default Ativo;
