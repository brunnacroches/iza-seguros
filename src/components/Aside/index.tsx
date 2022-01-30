import React from "react";

import LogoIzaI from '../../assets/svg/logo-i.svg';
import LogoIzaPonto from '../../assets/svg/logo-ponto.svg';
import LogoIzaZa from '../../assets/svg/logo-za.svg';
import Seguidores from '../../assets/svg/peple.svg';
import Painel from '../../assets/svg/grid.svg';
import Pagamentos from '../../assets/svg/card.svg';
import DadosCadastrais from '../../assets/svg/logo-za.svg';
import Suporte from "../../pages/Suporte";
import Blogging from "../../assets/svg/blogging.svg";


import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink
} from './styles';


const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg className="LogoIza" src={LogoIzaI} alt="Logo Minha Carteira" />
        <LogImg  className="LogoIzaPonto" src={LogoIzaPonto} alt="Logo Minha Carteira" />
        <LogImg  className="LogoIzaZa" src={LogoIzaZa} alt="Logo Minha Carteira" />
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
