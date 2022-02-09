import React from "react";
import Lottie from 'react-lottie';
import { ContainerContent } from "./styles";

const ContentLayout: React.FC = ({children}) => {
  return (
    <ContainerContent>
      {children}
    </ContainerContent>
  );
};

export default ContentLayout;
