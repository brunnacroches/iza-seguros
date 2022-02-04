import  Toggle  from '../Toggle';
import Lottie from 'react-lottie';
import React, {useMemo} from 'react';
import out from '../../assets/lotties/out.json';
import { Outlet } from 'react-router';

// o userMemo é um hooks decora o valor 
import emojis from '../../utils/emojis';
import { 
  Container, 
  Profile,  
  UserName,
  UserLogado,
  Welcome,
  EmpresaClient,
  EmailCliente,
  LottiOut,
  LinkSair
} from './styles';

const MainHeader: React.FC = () => {


  const emoji = useMemo(() => {
    //  SORTEANDO OS EMOJIS COM MATH.RANDON
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);
  return (
    <Container>
      {/*  PRIMEIRO ELEMENTO  */}
      <Toggle
          // labelLeft="Orange"
          // labelRight="Dark"
          // checked = {orangeTheme}
          // onChange = {handleChangeTheme}
      /> 
      <Profile>
          <Welcome>Olá{emoji}</Welcome>
          <UserName>Lucas Chagas</UserName>
      </Profile>
      {/*  SEGUNDO ELEMENTO */}
      <UserLogado>
          <EmpresaClient>Empresa Cliente </EmpresaClient>
          <EmailCliente href="#">email@empresacliente.com.br</EmailCliente>
          <LottiOut href="#">
            <Lottie 
                options={{
                  animationData: out,
                  loop: true,
                }}
                />
          </LottiOut>
          <LinkSair href="#">Sair</LinkSair>
          <Outlet />
      </UserLogado>
    </Container>
  );
};

export default MainHeader;


