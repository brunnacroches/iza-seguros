import React from 'react';
import { 
  Container, 
  Profile, 
  Welcome, 
  UserName 
} from './styles';

const MainHeader: React.FC = () => {
  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
          <Welcome>Olá</Welcome>
          <UserName>Lucas Chagas</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
