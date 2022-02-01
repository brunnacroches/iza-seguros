// * No pages vai ficar a estrutura e página inteligente

// NO PAGES FICARÁ AS PASTAS DAS NOSSAS TELAS
// TELA Dashboard = StatusUser

import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import DataTables from '../../components/DataTables'; 
import { Container, Content } from "./styles";


const Page: React.FC = () => {

  return (
    <Container>
      <ContentHeader title="Segurados" lineColor="#FF5148">
      </ContentHeader>
    </Container>
  );
};

export default Page;















// ~COMMENTS
  // * 1- CHAMAR O COMPONENTE CONTENT HEADER : <ContentHeader></ContentHeader>
  // * 2- PASSOU PARA O *CONTENTHEADER* O TÍTULO E PODE TB A COR DA LINHA :   <ContentHeader title ="Segurados"> 
  // * 3- E NO *DASHBOARD* ESTA SENDO MANDADO COMO FILHO OUTRO MANDADO COMPONENTE QUE É O *SELEC INPUT*
  // * 4 - OU SEJA, MANDANDO UM COMPONENTE PARA OUTRO COMPONENTE


// 




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
