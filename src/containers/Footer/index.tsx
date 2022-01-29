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
import Divisor from "../../components/Divisor";

export interface FooterProps {
  button: string;
  chip: string;
  link: string;
  menulink: string;
  passwordinput: string;
  searchinput: string;
  textinput: string;
  selectioninput: string;
  typography: string;
  divisor: string;
}

const Footer: React.FC<FooterProps> = ({
  button,
  chip,
  link,
  menulink,
  passwordinput,
  searchinput,
  textinput,
  selectioninput,
  divisor,
}) => {
  return (
    <div className="FooterIza">
      <Button button="" />
      <Ativo ativo="" />
      <Link link="" />
      <MenuLink menulink="" />
      <PasswordInput passwordInput="" />
      <SearchInput searchInput="" />
      <TextInput textInput="" />
      <SelectionInput selectionInput="" />
      <Typography></Typography>
      <Divisor divisor="" />
    </div>
  );
};

export default Footer;
