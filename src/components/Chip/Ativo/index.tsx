import React from "react";
import "./style.css";

interface AtivoProps {
  ativo: string;
  variant?:
    | "chip__Ativo"
    | "chip__Inativo"
    //
    | "chip__Segurado__Ativo"
    | "chip__Segurado__Inativo"
    | "chip__Segurado__Ativando"
    | "chip__Segurado__Inativando";
}

const defaultProps: Partial<AtivoProps> = {
  variant: "chip__Ativo",
};

const Ativo: React.FC<AtivoProps> = ({ variant, children }) => {
  let className = "chip__Status";
  className += `${variant}`;

  return <p className={className}>{children}</p>;
};

Ativo.defaultProps = defaultProps;

export default Ativo;
