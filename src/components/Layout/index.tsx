import React from "react";
import Lottie from 'react-lottie';
import { 
  ContainerLayout 
} from "./styles";

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({children}) => {
  return (
    <ContainerLayout>
        <MainHeader />
        <Aside />
        <Content>
          {children}
        </Content>
    </ContainerLayout>
  );
}

export default Layout;
