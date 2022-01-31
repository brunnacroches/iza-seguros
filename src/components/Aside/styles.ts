import styled from 'styled-components';

export const Container = styled.div`
/* ÁREA QUE QUE O MENU VAI FICAR DISPONÍVEL */
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.primary};
  /* PARA QUE TODO O CONTEÚDO ANDE PARTINDO DA ESQUERDA */
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
  display: flex;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
`;




