import React from "react";
import "./style.css";

import { Container } from "./styles";

interface ButtonProps {
  button: string;
  variant?:
    | "button__entrar"
    //
    | "adicionar__Novo__Segurado"
    | "salvar__Segurado"
    //
    | "ver__detalhes"
    //
    | "desativar__Segurado"
    | "ativar__Segurado"
    | "cancelar__Ativacao"
    | "cancelar__Inativacao"
    //
    | "enviar__Mensagem";
}

const defaultProps: Partial<ButtonProps> = {
  variant: "button__entrar",
};

const Button: React.FC<ButtonProps> = ({ variant, children }) => {
  let className = "button";
  className += `${variant}`;

  return (
    <Container>
      <button className={className}> {children} </button>
    </Container>
  );
};

Button.defaultProps = defaultProps;

export default Button;

// QUANTOS BOTÕES? 09
// | "button_entrar"
// | "adicionar__Novo__Segurado"
// | "ver__detalhes"
// | "desativar__Segurado"
// | "ativar__Segurado"
// | "cancelar__Ativacao"
// | "cancelar__Inativacao"
// | "salvar__Segurado"
// | "enviar__Mensagem"
//

// Quantos botões tem?
// Qual tamanho?
// Tem texto?
// Onde colocar o text?
// Tem SVG?
// SVG é um link ou botão?
