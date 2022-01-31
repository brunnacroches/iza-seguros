import React from "react";
import Lottie from 'react-lottie';
import { Container } from "./styles";

const Content: React.FC = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Content;
