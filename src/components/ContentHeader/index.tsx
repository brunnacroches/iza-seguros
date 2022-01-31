import React from "react";
import plus from '../../assets/lotties/add.json';
import Lottie from 'react-lottie';
import InputLabel from "../InputLabel";

import { 
  Container,
  TitleContainer,
  Controllers,
  BottonNovoIza,
  LottiePlus
} from "./styles";

// ? CRIANDO UMA NOVA INTERFACE PARA ATELRAR O CONTENT-HEADER
// ? chamando o que vai ficar dinamico
interface IContentHeaderProps {
  title: string;
  // ? CHILDREN : ELE JÁ VEM POR PADRAO INDEPENDENTE DO COMPONENTE 
  // ? controllers : caso queira mudar o botao ou select, ou seja um nó react
}

// ! A TIPAGEM DO CONTENT HEADER É O <IContentHeaderProps>
const ContentHeader: React.FC<IContentHeaderProps> = ({
  title
}) => {

  return (
    <Container>
      <TitleContainer>
        <h1>Segurados</h1>
      </TitleContainer>
      <Controllers>
        <BottonNovoIza href="#">
          Adiconar Seguradores 
        <LottiePlus href="#">
        <Lottie 
            options={{
              animationData: plus,
              loop: true,
            }}
          />
        </LottiePlus>
        </BottonNovoIza>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;

