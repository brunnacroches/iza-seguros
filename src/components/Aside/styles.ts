import { borderRight, fontSize } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
/* ÁREA QUE QUE O MENU VAI FICAR DISPONÍVEL */
  grid-area: AS;
  font-family: Work Sans;
  background-color: ${(props) => props.theme.colors.menu};
  border-radius:0 0 16px 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  /*/ PARA QUE TODO O CONTEÚDO ANDE PARTINDO DA ESQUERDA */
  padding-left: 30px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  /* margin-top: 30px;
  padding-right: 0px */
`;

// ! LOGO IZA => PONTO
export const LogoIzaP = styled.img`
  height: 15px;
  width: 15px;
  position: relative;
  top: -10px;
  left: 60px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > svg {
  font-size: 18px;
  margin-right: 5px
}
  
`;
// ! LOGO IZA => I
export const LogoIzaIP = styled.img`
  height: 48px;
  width: 20px;
  position: relative;
  left: 42px;
  top: 30px;

  


`;
// ! LOGO IZA => IZA
export const LogoIza = styled.img`
  height: 100px;
  width: 105px;
  position: relative;
  top: 30px;
  left: 45px;

> svg {
  font-size: 18px;
  margin-right: 5px
}
`;

export const MenuContainer = styled.nav`
  /*/ DEIXA UM DO LADO DO OUTRO */
  display: flex;
  /*/ DEIXA TUDO EM COLUNAS */
  flex-direction: column;
  margin-top: -55px;
  margin-left: 75px;
`;

export const MenuItemLink = styled.a`
color: ${(props) => props.theme.colors.white};
font-weight: bold;
font-size: 17px;
display: flex;
align-items: center;
/*/ ALTURA ENTRE OS LINKS */
margin: 9px 0;
/*/ TIRAR O SUBLINHADO */
text-decoration:none;
/*/ TRANSICAO DA TROCA */
transition: opacity .3s;
/*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
&:hover {
  opacity: .7;
}

`;
export const LottiePeople = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
`;

export const LottieGrid = styled.a`
  display: flex;
  align-items: center;  
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
`;
export const LottiePay = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
`;
export const LottieDados = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
`;
export const LottieMensagem = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25px;
  position: relative;
  top: 253px;
  left: 30px;
`;


export const MenuSuporte = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  top: 170px;
  left:-70px;
  color: ${(props) => props.theme.colors.white};
  /*/ DEIXA UM DO LADO DO OUTRO */
    display: flex;
  /*/ DEIXA TUDO EM COLUNAS */
  flex-direction: column;
  margin-top: -55px;
  margin-left: 75px;
  font-size: 18px;
  font-weight: bold;
  /*/ TIRAR O SUBLINHADO */
  text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
&:hover {
  opacity: .7;
}
`;

export const DividerLine = styled.div`
  width: 290px;
  left: -28px;
  height: 0.5px;
  background-color: ${(props) => props.theme.colors.white};
  position: relative;
  bottom: -55px;
`;

/**
 * @O @MEU @DASHBOARD @É @TIPO @FC
 * ? ==> const Dashboard:
 * * NOME DA PÁGINA
 * ? -> const Dashboard <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- É PARA ATRIBUIR A TIPAGEM DA MINHA PÁGINA
 * * A TIPAGEM DA PÁGINA:
 * ? -> React.FC <- ( A PÁGINA É DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUNÇÃO :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>Dashboard</h1>
 * ? </Container>
 * ? );
 */
