// * aqui vai ficar a estrutua e página inteligente

import React from "react";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
};

export default Dashboard;

/**
 */
/**
 * @O @MEU @DASHBOARD @É @TIPO @FC
 * ? ==> const Dashboard:
 * * NOME DA PÁGINA
 * ? -> const Dashboard <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- É PARA ATRIBUIR A TIPAGEM DA MINHA PÁGINA
 * * A TIPAGEM DA PÁGINA:
 * ? -> React.FC <- ( A PÁGINA É DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUNÇÃO :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>Dashboard</h1>
 * ? </Container>
 * ? );
 */
