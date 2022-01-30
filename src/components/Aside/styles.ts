import styled from 'styled-components';

export const Container = styled.div`
/* ÁREA QUE QUE O MENU VAI FICAR DISPONÍVEL */
  grid-area: AS;
  color: ${(props) => props.theme.colors.info};
  background-color: ${(props) => props.theme.colors.primary};
  /* PARA QUE TODO O CONTEÚDO ANDE PARTINDO DA ESQUERDA */
  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const LogImg = styled.img`
  height: 56px;
  width: 100%;
`;
export const MenuContainer = styled.nav`
`;

export const MenuItemLink = styled.a`
`;




