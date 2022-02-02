// * aqui vai ficar a estrutura e página inteligente
// PASTA LISTA

import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import DataTables from '../../components/DataTables';


import { Container, Content } from "./styles";

const Modal: React.FC = () => {
  const options = [
    {value: 'Rodrigo', label: 'Segurados Inativos'},
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Rodrigo', label: 'Rodrigo'}
  ]
  const buscar = [
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Rodrigo', label: 'Rodrigo'}
  ]
  return (
    <Container>
      <Content>
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
        <DataTables 
            children=""
            cardColor="#e6e6ea"
            tagColor="#15CF74"
            data="Início da Vigência"
            name="Nome"
            cpf="CPF"
            title="Status"
        />
      </Content>
    </Container>
  );
};

export default Modal;

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


//  <Content>
        // <CardRegister 
        //     cardColor="#FFFFFF"
        //     tagColor=""
        //     titleStatus="Status do segurado"
        //     selectSegurados=""
        //     textInput="Segurados Inativos"
        //     downSet=""
        //     buscarNome="Buscar por nome ou CPF do segurado"
        //     textInputSearch="Digite nome ou CPF"
        //     lupaimg=""
        //     selectBuscar=""
        //     closeimg=""
        //     linkExportar="Exportar dados"
        //     img=""
          
        //     contStatus="Status"
        //     buttonAtivo=""
        //     buttonInativo=""
        //     textButton="Ativo"
        //     constNomeCPF="Nome"
        //     icodown=""
        //     textName="Lucas das Chagas Testa Nome Sobrenome"
        //     constCPF="CPF"
        //     numberCPF="336.475.018-16"
        //     constInicio="Início da vigência"
        //     icoUp=""
        //     textData="06/01/2022"
        //     buttonDetalhes=""
        //     textButtonEnd="VER DETALHES"
          
        //     textPage="Segurados por página:"
        //     numberPage="10"
        //     iconDown=""
        //     onlyNumber="1-10 de 330"
        //     textDe="de"
        //     imgBack=""
        //     imgGo=""
        // />
//         <SelectInput options = {options} />
//         <SelectInput options = {buscar} />
//  </Content>