import styled from 'styled-components';
// import { Controllers } from '../ContentHeader/styles';

interface IcontainerProps {
  color: string;
}

interface ItagProps {
    color: string;
}

export const Container = styled.li<IcontainerProps>`
  border-radius:16px 16px 16px 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.color};
  list-style: none;
  margin: 15px 0;
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

// export const Tag = styled.div<ItagProps>`
//   width: 67px;
//   height: 30px;
//   border-radius: 15px;
//   background-color: ${props => props.color};
//   &:hover {
//   opacity: 0.7;
//   transform: translateX(10px);
//   }

//   > div {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// > div spam 


