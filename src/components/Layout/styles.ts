import styled from 'styled-components';

export const ContainerLayout = styled.div`
  /* ⤵︎ UM GRID É CONSTITUÍDO DE COLUNAS E LINHAS  */
  display: grid;
  /* ⤵︎  A PRIMEIRA COLUNA VAI TER 250PX E O RESTANTE O TANTO QUE ESTIVER DISPONÍVEL  (AUTO) */
  grid-template-columns: 300px ;
  height: 90vh;
  /* ⤵︎ MH (MAIN HEADER ) VAI TER ALTURA DE 70PX  */
  grid-template-rows: 70px auto;

  grid-template-areas:
    'AS MH'
    'AS CT';
    
  height: 90vh;
`;
