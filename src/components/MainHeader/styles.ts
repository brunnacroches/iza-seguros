// o userMemo é um decora O VALOR
import React, {useMemo} from 'react';
import styled from 'styled-components';

// ? ESTILIZANDO O PRIMEIRO ELEMENTO <CONTAINER> 
export const ContainerMainReader = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.header};
  //  FICAR UM DO LADO DO OUTRO*/
  display: flex;
  //  FICAR UM DO LADO E O OTURO DO OUTRO LADO*/
  justify-content: space-between;
  //  FICAR DO CENTRO */
  align-items: center;
  //  ESPAÇAMENTO NAS LATERAIS */
  /* padding: 0 50px; */
  padding-right: 15px;
  font-size: 15px;
  padding-left: 10px;
  border-radius:16px;
  width: auto;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);

  //  BORDA INFERIOR */
  /* border-bottom: 1px solid ${props => props.theme.colors.black}; */
`;

//  ESTILIZANDO O PRIMEIRO  <PROFILE>
export const Profile = styled.div`
  color: ${props => props.theme.colors.orange};
  /*/ DEIXA TUDO EM COLUNAS */
  flex-direction: column;
  /*/FICAR UM DO LADO DO OUTRO  */
  display: flex;
  /* NA MESMA LINHA  */
  /* flex-direction: row; */
  margin-left: -700px;
`;

// LADO ESQUERDO
export const Welcome = styled.span`
`;

export const UserName = styled.span`
  position: 500px;

`;

// LADO DIREITO
export const UserLogado = styled.div`
  display: flex;
  align-items: center;  
  height: 40px;
  width: auto;
  position: relative;
  flex-direction: column;
  top: 8px;
  left: 0px;
`;

export const EmpresaClient = styled.h4`
  color: ${props => props.theme.colors.primary};
  position: relative;
  font-size: 14px;
  left: 200px;
  font-weight: 500;
  width: auto;
  top: -32px;
`;
export const EmailCliente = styled.a`
  position: relative;
  font-size: 11px;
  left: 223px;
  width: auto;
  top: -43px;
  color: ${props => props.theme.colors.orange};
  font-weight: 500;
  /*/ TIRAR O SUBLINHADO */
  text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
`;
export const LinkSair = styled.a`
  color: ${props => props.theme.colors.primary};
  top: -99px;
  left: 438px;
  display: flex;
  position: relative;
  font-size: 14px;
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
export const LottiOut = styled.a`
  display: flex;
  align-items: center;  
  height: 40px;
  width: 25px;
  position: relative;
  top: -68px;
  left: 470px;
  /*/ TIRAR O SUBLINHADO */
  text-decoration:none;
  /*/ TRANSICAO DA TROCA */
  transition: opacity .3s;
  /*/ QUANDO PASSAR O MOUSE ELA VAI MUDAR DE COR */
`;

export const CircleUser = styled.div`
  display: flex;
  align-items: center;  
  width: 30px;
  height: 30px;
  position: relative;
  left: 125px;
  border-radius: 50%;
  background-color: red;

p {
  font-size: 15px;
  align-items: center;
  right: -5px;
  top: 10px;
  color:white;
  position: relative;
}
`;



