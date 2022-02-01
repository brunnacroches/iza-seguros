import styled from 'styled-components';

export const Container = styled.a`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  height: 48px;
  width: 270px;
  display: flex;
  text-align: right;
  position: relative;
  font-size: 20px;
  line-height: 40px;
  padding: 0 12px 10px 10px;
  flex-direction: column;
   /*/ TIRAR O SUBLINHADO */
   text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
`;
