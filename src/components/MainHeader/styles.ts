// o userMemo é um decora O VALOR
import React, {useMemo} from 'react';
import styled from 'styled-components';

//  ESTILIZANDO O PRIMEIRO ELEMENTO <CONTAINER> 
export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};
  //  FICAR UM DO LADO DO OUTRO*/
  display: flex;
  //  FICAR UM DO LADO E O OTURO DO OUTRO LADO*/
  justify-content: space-between;
  //  FICAR DO CENTRO */
  align-items: center;
  //  ESPAÇAMENTO NAS LATERAIS */
  padding: 0 50px;
  font-size: 15px;

  //  BORDA INFERIOR */
  /* border-bottom: 1px solid ${props => props.theme.colors.black}; */
`;

//  ESTILIZANDO O SEGUNDO ELEMENTO <PROFILE>
export const Profile = styled.div`
  color: ${props => props.theme.colors.
orange};
//  FICAR UM DO LADO DO OUTRO 
  /* display: flex; */
//  NA MESMA LINHA 
  /* flex-direction: row; */
`;

export const Welcome = styled.h3`
`;

export const UserName = styled.span`
`;


// !
// ?
/* 
& rosa
! vermelho
^ amarelo
* verde
~ roxo
*/

/*
TODO AMARELO
& rosa
*/