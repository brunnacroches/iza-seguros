import styled from 'styled-components';

export const Container = styled.div`
/* ÁREA QUE QUE O MENU VAI FICAR DISPONÍVEL */
  grid-area: AS;
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
  color:red;
`;

export const MenuContainer = styled.nav`
  /*/ DEIXA UM DO LADO DO OUTRO */
  display: flex;
  /*/ DEIXA TUDO EM COLUNAS */
  flex-direction: column;
  margin-top: 100px;
`;

export const MenuItemLink = styled.a`
color: ${(props) => props.theme.colors.violtet};
font-weight: bold;
/*/ ALTURA ENTRE OS LINKS */
margin: 10px 0;
/*/ TIRAR O SUBLINHADO */
text-decoration:none;
/*/ TRANSICAO DA TROCA */
transition: opacity .3s;
/*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
&:hover {
  opacity: .7;
}
`;
export const MenuLottie = styled.button`
`;



