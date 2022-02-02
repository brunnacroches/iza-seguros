import React from "react";
import Lottie from 'react-lottie';
import { Container } from "./styles";


interface ButtonProps {
  button: string;
  variant?:
  | "button__ativo"
  | "button__ativando"
  | "button__desativando"
  | "button__verDetalhes"
  | "button__inativo"
  | "button__add__Novo"
  | "button__entrar"
  | "button__desativar__Seg"
  | "button__ativar__Seg"
  | "button__desativar__Seg"
  | "button__segurado__ativo"
  | "button__segurado__ativando"
  | "button__segurado__inativo"
  | "button__inativando"
  | "button__cancelar__Ativacao"
  | "button__cancelar__Inativacao"
  | "button__salvar__Segurado"
  | "button__enviar__Mensagem";
  color?: "primary" | "orange" | "ativo" | "violet";
  img?: "children";
  active: boolean;
}

const defaultProps: Partial<ButtonProps> = {
  variant: "button__entrar",
  color: "primary"
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  img,
  active
}) => {
  let className = "type";
  className += `${variant}${active ? "--active" : ""} ${color} ${img}`;
  return (
    <Container>
      <h1 className={className}>{children} </h1>
    </Container>
  );
};
Button.defaultProps = defaultProps;

export default Button;


// MODELO
// eslint-disable-next-line no-lone-blocks
{/* ! <div className="CardPrice__second__monthly">
          <Type variant="h2__subtitle" color="fifth">
            Monthly Subscription
          </Type>
        </div>
        <div className="CardPrice__second__price">
          <Type variant="h5__subletitle__number" color="fifth">
            {" "}
            $29{" "}
          </Type>
        </div> */}

    // <div className="home">
    //   <SinglePrice button="Sing up" type="" />
    // </div>












