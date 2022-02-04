/* eslint-disable no-lone-blocks */
import styled from 'styled-components';
// import { Controllers } from '../ContentHeader/styles';


interface ItagProps {
    color: string;
}

// CONTAINER GERAL
export const Container = styled.div`
  border-radius:16px 16px 16px 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.colors.clear};
  list-style: none;
  margin: 10px 0;
  padding: 12px 15px;
  display: flex;
  /* COLOCAR UM PARA CADA LADO */
  justify-content: space-between;
  flex-direction: column;
  font-size: 15px;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: translateX(10px);
  }
`;
{/* SELECT INPUT */}
export const HeaderContainer = styled.div`

`;

{/* SELECT LINK SEGURADOS */}
export const MenuItemLink = styled.a`
position: relative;
  top: -152px;
  left: 760px;
  cursor: pointer;
  transition: all .3s;
  /*/ TIRAR O SUBLINHADO */
  text-decoration:none;
  font-weight: bold;
  color: ${(props) => props.theme.colors.black};
`;
{/* SELECT INPUT */}
export const LottieDownload = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25px;
  font-size: 13px;
  position: relative;
  top: -120px;
  left: 850px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;


 {/* HEADER TITULO DA LISTA */}
export const TitleContainer = styled.div`
  list-style: none;
  margin: 0px 0;
  padding: 12px 15px 20px 20px;
  display: flex;
  /* COLOCAR UM PARA CADA LADO */
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  top: -50px;
  left: 0px;
  position: relative;
  font-weight: bold;
  
  

`;
 {/* HEADER TITULO DO INPUT */}
export const TitleInput = styled.div`
  font-size: 13px;
  padding: 15px 20px 50px 20px;
`;
 {/* HEADER TITULO DO SEARCH */}
export const TitleSeach = styled.div`
  font-size: 13px;
  padding: 15px 20px 50px 20px;
`;

{/* CONTEÚDO DA LISTA */}
export const ListContainer = styled.li`
  border-radius:16px 16px 16px 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.theme.colors.clear};
  list-style: none;
  margin: 10px 0;
  top: -50px;
  position: relative;
  padding: 12px 15px;
  display: flex;
  /* COLOCAR UM PARA CADA LADO */
  justify-content: space-between;
  align-items: center;
  font-size: 15px;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

// BUTTON
export const Tag = styled.div<ItagProps>`
  width: 67px;
  height: 30px;
  border-radius: 15px;
  background-color: ${props => props.color};
  &:hover {
  opacity: 0.7;
  transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
`;

// > div spam 


