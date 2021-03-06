import styled from 'styled-components';

export const ContainerContent = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.warning};
  background-color: ${(props) => props.theme.colors.tertiary};

  /* padding: 50px;
  padding-left: 50px; */

  height: cal(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: ${props => props.theme.colors.orange};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track{
    background-color: ${props => props.theme.colors.white};
    border-radius: 10px;
  }
`;
