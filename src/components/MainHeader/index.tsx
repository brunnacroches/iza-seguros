import  Toggle  from '../Toggle';
import React, {useMemo} from 'react';
// o userMemo é um hooks decora o valor 
import emojis from '../../utils/emojis';
import { 
  Container, 
  Profile, 
  Welcome, 
  UserName 
} from './styles';

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);
  return (
    <Container>
      <Toggle/> 
      <Profile>
          <Welcome>Olá{emoji}</Welcome>
          <UserName>Lucas Chagas</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
