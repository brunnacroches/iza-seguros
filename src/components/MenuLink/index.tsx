import React from "react";
import "./style.css";
import { Container } from "./styles";

interface MenuLinkProps {
  menulink: string;
  variant?:
    | "menu__Segurados"
    | "menu__Painel"
    | "menu__Pagamentos"
    | "menu__DadosCadast"
    | "menu__Suporte";
}

const defaultProps: Partial<MenuLinkProps> = {
  variant: "menu__Segurados",
};

const MenuLink: React.FC<MenuLinkProps> = ({ variant, children }) => {
  let className = "menu__Segurados__Iza";
  className += `${variant}`;

  return (
    <Container>
      <link className={className}>{children}</link>
    </Container>
  );
};

MenuLink.defaultProps = defaultProps;

export default MenuLink;
