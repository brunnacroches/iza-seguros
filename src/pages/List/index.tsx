// * aqui vai ficar a estrutua e página inteligente

import React from "react";
import { Container } from "./styles";

const List: React.FC = () => {
  return (
    <Container>
      <h1>List</h1>
    </Container>
  );
};

export default List;

/**
 */
/**
 * @O @MEU @List @É @TIPO @FC
 * ? ==> const List:
 * * NOME DA PÁGINA
 * ? -> const List <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- É PARA ATRIBUIR A TIPAGEM DA MINHA PÁGINA
 * * A TIPAGEM DA PÁGINA:
 * ? -> React.FC <- ( A PÁGINA É DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUNÇÃO :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>List</h1>
 * ? </Container>
 * ? );
 */
