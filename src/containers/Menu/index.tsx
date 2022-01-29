import React from "react";
import "./style.css";
import Button from "../../components/Button";
import Ativo from "../../components/Chip/Ativo";
import Link from "../../components/Link";
import MenuLink from "../../components/MenuLink";
import PasswordInput from "../../components/PasswordInput";
import SearchInput from "../../components/SearchInput";
import TextInput from "../../components/TextInput";
import SelectionInput from "../../components/SelectInput";
import Typography from "../../components/Typography";

export interface MenuProps {
  button: string;
  chip: string;
  link: string;
  menulink: string;
  passwordinput: string;
  searchinput: string;
  textinput: string;
  selectioninput: string;
  typography: string;
}

const Menu: React.FC<MenuProps> = ({
  button,
  chip,
  link,
  menulink,
  passwordinput,
  searchinput,
  textinput,
  selectioninput,
}) => {
  return (
    <div className="MenuIza">
      <Button button="" />
      <Ativo ativo="" />
      <Link link="" />
      <MenuLink menulink="" />
      <PasswordInput passwordInput="" />
      <SearchInput searchInput="" />
      <TextInput textInput="" />
      <SelectionInput selectionInput="" />
      <Typography></Typography>
    </div>
  );
};

export default Menu;
