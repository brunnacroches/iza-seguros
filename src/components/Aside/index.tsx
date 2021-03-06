import React from "react";
import Lottie from 'react-lottie';
import bank from '../../assets/lotties/bank.json';
import cadastro from '../../assets/lotties/cadastro.json';
import grid from '../../assets/lotties/grid.json';
import message from '../../assets/lotties/message.json';
import people from '../../assets/lotties/people.json';
import { Outlet } from 'react-router';
import LogoIzaI from '../../assets/svg/logo-iza-i-info.svg';
import LogoIzaPonto from '../../assets/svg/logo-iza-ponto-info.svg';
import LogoIzaZa from '../../assets/svg/logo-iza-za-info.svg';

import {
  ContainerAside,
  Header,
  LogoIzaP,
  LogoIzaIP,
  LogoIza,
  MenuContainer,
  MenuItemLink,
  LottiePeople,
  LottieGrid,
  LottiePay,
  LottieDados,
  LottieMensagem,
  MenuSuporte,
  DividerLine

} from './styles';


const Aside: React.FC = () => {
  return (
    <ContainerAside>
      <Header>
        <LogoIzaP src={LogoIzaPonto} alt=""/>
        <LogoIzaIP src={LogoIzaI} alt="" />
        <LogoIza src={LogoIzaZa} alt="" />
      </Header>
      {/* PEOPLE IZA */}
        <LottiePeople href="#">
          <Lottie
              options={{
              animationData: people,
              loop: true,
            }}
          />
        </LottiePeople >
      {/* GRID IZA */}
        <LottieGrid href="#">
          <Lottie
              options={{
              animationData: grid,
              loop: true,
            }}
          />
        </LottieGrid >
      {/* PAY IZA*/}
        <LottiePay href="#">
          <Lottie
              options={{
              animationData: bank,
              loop: true,
            }}
          />
        </LottiePay>
      {/* DADOS IZA*/}
        <LottieDados href="#">
          <Lottie
              options={{
              animationData: cadastro,
              loop: true,
            }}
          />
        </LottieDados >
      {/* MENSAGEM IZA */}         
        <LottieMensagem href="#">
          <Lottie
              options={{
              animationData: message,
              loop: true,
            }}
          />
        </LottieMensagem>
  
      <MenuContainer>
        <MenuItemLink href="#">
          Segurados
        </MenuItemLink>

        <MenuItemLink href="#">
          Painel
        </MenuItemLink>

        <MenuItemLink href="#">
          Pagamentos
        </MenuItemLink>

        <MenuItemLink href="#">
          Dados cadastrais
        </MenuItemLink>
      </MenuContainer>
      <DividerLine />
      <MenuSuporte href="#">
        Suporte
        </MenuSuporte>
    </ContainerAside>
  );
};

export default Aside;

// /list/entry-balance

/**
 * @O @MEU @StatusUser @?? @TIPO @FC
 * ? ==> const Dashboard:
 * * NOME DA P??GINA
 * ? -> const Dashboard <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- ?? PARA ATRIBUIR A TIPAGEM DA MINHA P??GINA
 * * A TIPAGEM DA P??GINA:
 * ? -> React.FC <- ( A P??GINA ?? DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUN????O :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>Dashboard</h1>
 * ? </Container>
 * ? );
 */
