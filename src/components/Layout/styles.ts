import styled from "styled-components";

export const Grid = styled.div`
  /* ⤵︎ UM GRID É CONSTITUÍDO DE COLUNAS E LINHAS  */
  display: grid;
  /* ⤵︎  A PRIMEIRA COLUNA VAI TER 250PX E O RESTANTE O TANTO QUE ESTIVER DISPONÍVEL  (AUTO) */
  grid-template-columns: 250px auto;
  /* ⤵︎ MH (MAIN HEADER ) VAI TER ALTURA DE 70PX  */
  grid-template-rows: 70px auto;
  /*  ⤵︎  COMO VAI SER DISTRIBUÍDO
      MONTANDO O GRID LAYOUT */
  /*NA PRIMEIRA LINHA E PRIMEIRA COLUNA: AS (ASIDE) */
  /*NA PRIMEIRA  LINHA E NA SEGUNDA COLUNA: MH (MAIN HEADER )*/
  /*NA SEGUNDA LINHA E PRIMEIRA COLUNA: AS (ASIDE)*/
  /* NA SEGUNDA  LINHA E NA SEGUNDA COLUNA:CT (CONTENT)*/

  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
`;

/**
 * LAYOUT
    - MH = MAIN HEADER
    - AS = ASISE 
    - CT- CONTENT
*/

/**
 */
/**
 *  * IMPORTANTE
 *  ! ATENÇÃO!
 *  ? DUVIDA
 *  TODO MAIUSCULO
 *  @param
 * @param myParam The parameter of this method
 *
 */
