import React from "react";
import Button from "../../../../components/Button";
import Ativo from "../../../../components/Chip/Ativo";
import Link from "../../../../components/Link";
import MenuLink from "../../../../components/MenuLink";
import PasswordInput from "../../../../components/PasswordInput";
import SearchInput from "../../../../components/SearchInput";
import TextInput from "../../../../components/TextInput";
import SelectionInput from "../../../../components/SelectInput";
import Divisor from "../../../../components/Divisor";
import Typography from "../../../../components/Typography";

import "./style.ts";

export interface LoginFormProps {}

const LoginForm: React.FC = () => {
  return (
    <div className="LoginFormIza">
      <div className="Teste">
        <p>Teste Page Login</p>
      </div>
    </div>
  );
};

export default LoginForm;
