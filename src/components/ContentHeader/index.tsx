import React from "react";
import plus from '../../assets/lotties/add.json';
import Lottie from 'react-lottie';
import InputLabel from "../InputLabel";
// import SelectInput from "../SelectInput";

import { 
  Container,
  TitleContainer,
  // Controllers,
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
  // const options = [
  //   {value: 'Rodrigo', label: 'Segurados Inativos'},
  //   {value: 'Maria', label: 'Maria'},
  //   {value: 'Ana', label: 'Ana'}
  //  ];
  // const buscar = [
  //   {value: 'Rodrigo', label: 'Buscar por nome ou CPF do segurado'},
  //   {value: 'Maria', label: 'Maria'},
  //   {value: 'Ana', label: 'Ana'}
  //  ];
  return (
    <Container>
      <TitleContainer>
        <h1>Segurados</h1>
      </TitleContainer>
      {/* <Controllers> */}
      {/* <Controllers>
        <SelectInput options={options} />
        <SelectInput options={buscar} />
      </Controllers> */}
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
      {/* </Controllers> */}
    </Container>
  );
};

export default ContentHeader;

