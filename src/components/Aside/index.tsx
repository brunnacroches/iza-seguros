import React, { useState } from 'react';
import Lottie from 'react-lottie';
import people from '../../assets/lotties/people.json'

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
  MenuLottie
} from './styles';

export const LikeButton = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: people,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoIzaP src={LogoIzaPonto} alt=""/>
        <LogoIzaIP src={LogoIzaI} alt="" />
        <LogoIza src={LogoIzaZa} alt="" />
      </Header>
          <div className="animation">
          <Lottie
              options={defaultOptions}
              width={400}
              height={400}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}/>
            </div>
        <MenuContainer>
        </MenuContainer>
    </Container>
  );
}

export default Aside;