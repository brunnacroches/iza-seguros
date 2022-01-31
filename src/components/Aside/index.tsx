import React from "react";
import Lottie from 'react-lottie';
import bank from '../../assets/lotties/bank.json';
import cadastro from '../../assets/lotties/cadastro.json';
import grid from '../../assets/lotties/grid.json';
import message from '../../assets/lotties/message.json';
import people from '../../assets/lotties/people.json';

import LogoIzaI from '../../assets/svg/logo-iza-i-info.svg';
import LogoIzaPonto from '../../assets/svg/logo-iza-ponto-info.svg';
import LogoIzaZa from '../../assets/svg/logo-iza-za-info.svg';

// import Seguidores from '../../assets/svg/peple.svg';
// import Painel from '../../assets/svg/grid.svg';
// import Pagamentos from '../../assets/svg/card.svg';
// import DadosCadastrais from '../../assets/svg/logo-za.svg';
// import Suporte from "../../pages/Suporte";
// import Blogging from "../../assets/svg/blogging.svg";



import {
  Container,
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
  MenuSuporte

} from './styles';


const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoIzaP src={LogoIzaPonto} alt=""/>
        <LogoIzaIP src={LogoIzaI} alt="" />
        <LogoIza src={LogoIzaZa} alt="" />
      </Header>
        <LottiePeople>
          <Lottie
              options={{
              animationData: people,
              loop: true,
            }}
          />
        </LottiePeople>

        <LottieGrid>
          <Lottie
              options={{
              animationData: grid,
              loop: true,
            }}
          />
        </LottieGrid>

        <LottiePay>
          <Lottie
              options={{
              animationData: bank,
              loop: true,
            }}
          />
        </LottiePay>

        <LottieDados>
          <Lottie
              options={{
              animationData: cadastro,
              loop: true,
            }}
          />
        </LottieDados>

        <LottieMensagem>
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
      <MenuSuporte href="#">
        Suporte
        </MenuSuporte>
    </Container>
  );
};

export default Aside;
