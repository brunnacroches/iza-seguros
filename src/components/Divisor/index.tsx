import React from "react";
import "./style.css";

import { Container } from "./styles";

interface DivisorProps {
  divisor: string;
  variant?: "divisor__Painel" | "divisor__Cadastro" | "divisor__Adicao";
}

const defaultProps: Partial<DivisorProps> = {
  variant: "divisor__Painel",
};

const Divisor: React.FC<DivisorProps> = ({ variant, children }) => {
  let className = "ativar";
  className += `${variant}`;
  return (
    <Container>
      <div className={className}> {children} </div>
    </Container>
  );
};

Divisor.defaultProps = defaultProps;

export default Divisor;
