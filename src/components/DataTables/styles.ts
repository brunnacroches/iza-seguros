import styled from 'styled-components';
// import { Controllers } from '../ContentHeader/styles';


export const Container = styled.div`
  border-radius:16px 16px 16px 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  background-color: ${props => props.color};

  list-style: none;
  margin: 10px 0;
  padding: 12px 12px;

  display: flex;
  /* COLOCAR UM PARA CADA LADO */
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`;

export const Tag = styled.div`
`;



