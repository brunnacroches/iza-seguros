import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.warning};
  background-color: ${(props) => props.theme.colors.tertiary};
`;
