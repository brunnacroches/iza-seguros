import React from "react";
import plus from '../../assets/lotties/add.json';
import Lottie from 'react-lottie';

import { 
  Container,
  TitleContainer,
  Controllers,
  BottonNovoIza,
  LottiePlus
} from "./styles";

// ? CRIANDO UMA NOVA INTERFACE PARA ATELRAR O CONTENT-HEADER
// ? chamando o que vai ficar dinamico
// ? CHILDREN : ELE JÁ VEM POR PADRAO INDEPENDENTE DO COMPONENTE 
// ? controllers : caso queira mudar o botao ou select, ou seja um nó react
interface ITitleContainerProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

// ! A TIPAGEM DO CONTENT HEADER É O <IContentHeaderProps>
const ContentHeader: React.FC<ITitleContainerProps> = ({
  title, lineColor, children
}) => {

  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>
        {children}
      </Controllers>
        <BottonNovoIza href="#">
          Adicionar Seguradores 
        <LottiePlus href="#">
        <Lottie 
            options={{
              animationData: plus,
              loop: true,
            }}
          />
        </LottiePlus>
        </BottonNovoIza>
    </Container>
  );
};
export default ContentHeader;

// ! TITULO DE VAI SER DINAMICO */}
// ? VAI SER CRIADO TAMBÉM UMA INTERFACE PARA O NOSSO CONTENT HEADER 
// ? PARA DIZER PARA QUEM FOR USAR O CONTENT HEADER AS PAGINAS E OS ELEMENTOS
// ? QUAIS SAO AS PROPRIEDADES QUE ELE ESPERA

// interface IContentHeaderProps {
//   title: string;
//   lineColor: string;
//   controllers: React.ReactNode;
// }

//~CHILDREN JÁ VEM POR PADRÃO INDEPENDENTE DO COMPONENTE