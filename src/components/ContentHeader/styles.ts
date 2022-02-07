import styled from 'styled-components';

// ! FAZENDO A COR FICAR DINAMICA 
// ? 1- criar uma interface para o componente container 
interface ITitleContainerProps {
  lineColor: string;
  
}

export const Container = styled.div`
  width: 100%;
  /* CADA UM FICAR UM LADO */
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 20px;
  padding: 15px;
  
  `;

/* ESTILIZANDO SOMENTE O H1 QUE ESTA CONTIDO 
DENTRO DO MEU CONTAINER */
export const TitleContainer = styled.div<ITitleContainerProps>`
cursor: pointer;
  transition: all .3s;
  position: relative;
  top: -90px;
  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
> h1 {
  color: ${props => props.theme.colors.orange};
   &::after {
    content: '';
    display: block;
    width: auto;
    };
  }
`;

export const Controllers = styled.div`
/* FICAR UM DO LADO DO OUTRO */
  display: flex;
  
`;
export const BottonNovoIza = styled.a`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  height: 48px;
  width: 270px;
  display: flex;
  text-align: right;
  position: relative;
  top: -75px;
  font-size: 20px;
  line-height: 40px;
  padding: 0 12px 10px 10px;
  flex-direction: column;
  cursor: pointer;
  transition: all .4s;
  &:hover {
    transform: translateX(10px);
  }
   /*/ TIRAR O SUBLINHADO */
   text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
`;

export const LottiePlus = styled.a`
  display: flex;
  align-items: center;  
  height: 30px;
  width: auto;
  position: relative;
  top: -40px;
  left: -105px;
  /*/ TIRAR O SUBLINHADO */
  text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
`;
