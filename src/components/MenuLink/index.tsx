import React from "react";
import "./style.css";

interface MenuLinkProps {
  menulink: string;
}

const MenuLink: React.FC<MenuLinkProps> = ({ menulink }) => {
  return <link className="menulink">{menulink}</link>;
};

export default MenuLink;
