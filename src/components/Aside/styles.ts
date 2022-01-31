import styled from 'styled-components';

export const Container = styled.div`
/* ÁREA QUE QUE O MENU VAI FICAR DISPONÍVEL */
  grid-area: AS;
  font-family: Work Sans;
  background-color: ${(props) => props.theme.colors.primary};
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
color: ${(props) => props.theme.colors.violet};
font-weight: bold;
font-size: 17px;
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
export const LottiePeople = styled.div`
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
  color: ${(props) => props.theme.colors.violet};
`;

export const LottieGrid = styled.div`
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
  color: ${(props) => props.theme.colors.violet};
`;
export const LottiePay = styled.div`
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
  color: ${(props) => props.theme.colors.violet};
`;
export const LottieDados = styled.div`
  height: 40px;
  width: 25px;
  position: relative;
  top: 142px;
  left: 35px;
  color: ${(props) => props.theme.colors.violet};
`;
export const LottieMensagem = styled.div`
  height: 40px;
  width: 25px;
  position: relative;
  top: 318px;
  left: 35px;
  color: ${(props) => props.theme.colors.violet};
`;


export const MenuSuporte = styled.a`
  position: relative;
  top: 235px;
  left: -3px;
  color: ${(props) => props.theme.colors.violet};
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
