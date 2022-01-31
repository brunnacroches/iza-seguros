import React from "react";

import LogoIzaI from '../../assets/svg/logo-iza-i-info.svg';
import LogoIzaPonto from '../../assets/svg/logo-iza-ponto-info.svg';
import LogoIzaZa from '../../assets/svg/logo-iza-za-info.svg';
import Seguidores from '../../assets/svg/peple.svg';
import Painel from '../../assets/svg/grid.svg';
import Pagamentos from '../../assets/svg/card.svg';
import DadosCadastrais from '../../assets/svg/logo-za.svg';
import Suporte from "../../pages/Suporte";
import Blogging from "../../assets/svg/blogging.svg";


import {
  Container,
  Header,
  LogoIzaP,
  LogoIzaIP,
  LogoIza,
  MenuContainer,
  MenuItemLink,
} from './styles';


const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoIzaP src={LogoIzaPonto} alt=""/>
        <LogoIzaIP src={LogoIzaI} alt="" />
        <LogoIza src={LogoIzaZa} alt="" />
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          Dashboard
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
