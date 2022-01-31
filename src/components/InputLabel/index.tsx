import React from "react";
import Lottie from 'react-lottie';
import { Container } from "./styles";

const InputLabel: React.FC = ({children}) => {
  return (
    <Container>
      <form>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </Container>
  );
};

export default InputLabel;
















