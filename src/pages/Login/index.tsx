// * aqui vai ficar a estrutua e página inteligente

// NO PAGES FICARÁ AS PASTAS DAS NOSSAS TELAS
// TELA LOGIN

import React from "react";
import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <h1>Login</h1>
    </Container>
  );
};

export default Login;

/**
 */
/**
 * @O @MEU @Login @É @TIPO @FC
 * ? ==> const Login:
 * * NOME DA PÁGINA
 * ? -> const Login <-
 * * ESSES DOIS PONTOS :
 * ? -> : <- É PARA ATRIBUIR A TIPAGEM DA MINHA PÁGINA
 * * A TIPAGEM DA PÁGINA:
 * ? -> React.FC <- ( A PÁGINA É DO TIPO DE UM COMPONENTE FUNCIONAL )
 * * APONTANDO PARA UMA FUNÇÃO :
 * ? -> = () => {} <- (ARRAY FUNCTION)
 * * SEMPRE TEM QUE RETONRAR PELO MENOS 1 ELEMENTO !SEMPRE!
 * ? return (
 * ? <Container>
 * ?   <h1>Login</h1>
 * ? </Container>
 * ? );
 */
