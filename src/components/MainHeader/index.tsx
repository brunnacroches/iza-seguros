import  Toggle  from '../Toggle';
import React, {useMemo} from 'react';
// o userMemo é um hooks decora o valor 
import emojis from '../../utils/emojis';
import { 
  Container, 
  Profile, 
  Welcome, 
  UserName,
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
      <Profile>
          <Welcome>Olá{emoji}</Welcome>
          <UserName>Lucas Chagas</UserName>
      </Profile>
      <Toggle/> 
      {/*  SEGUNDO ELEMENTO */}
    </Container>
  );
};

export default MainHeader;


