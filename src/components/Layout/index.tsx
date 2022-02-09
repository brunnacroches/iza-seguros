import React from "react";
import Lottie from 'react-lottie';
import { ContainerLayout } from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import ContainerContent from "../Content";

const Layout: React.FC = ({children}) => {
  return (
    <ContainerLayout>
        <MainHeader />
        <Aside />
        <ContainerContent>
          {children}
        </ContainerContent>
    </ContainerLayout>
  );
}

export default Layout;
