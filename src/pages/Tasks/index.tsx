// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import api from "../../services/api";


/*
& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ITask {
  status: boolean;
  title: string;
  cpf: number;
  created_at: Date;
  fineshed: boolean;
  updated_at: Date
  details: boolean;

}



const Tasks: React.FC = () => {
  // ? ⇩⇩⇩ NOTE ⇩⇩⇩
    // ? coloando o dado dentro de uma variável para exibir na tabela ( PASSO 2 )
    // ? criando uma array
    // ? por ser vetor é passado outra [] < <ITask[]> ([])
  const [ tasks, setTasks] = useState <ITask[]> ([])

  //^ ⇩⇩⇩ NOTE ⇩⇩⇩
      //^  ⇩ (PASSO 1)
      //^ ⇩ fazendo o consumo da API ⇩
    
    useEffect(() => {
        loadTasks()
    }, [])
    //^ ⇧⇧⇧ NOTE ⇧⇧⇧ 
    //^ ⇧  o [] vazio pq eu quero que ele execute assim que a página seja iniciada ⇩
    
    //^ ⇩ funcao assincrona = quando fizer uma requisão e essa requisição pode demorar ou nao ⇩
    //^ ⇩ e essa requisão vai retornar um dado futuro  ⇩
    async function loadTasks() {
      
      //^ ⇩ chamando a API ⇩
      const response = await api.get('/tasks')
      console.log(response)
      // ? ⇩  pegando os dados da minha resposta( da minha requisição ) ⇩
      setTasks(response.data)
    }

  return (
    <div className='container'>
      <br />
      <h1>Tasks Page</h1>
      <br />
      <Table striped bordered hover>
            <thead>
              <tr>
                {/* //! STATUS ATIVO E INATIVO BOTÃO ALTERANDO DE COR */}
                <th> Status </th>
                {/* //! NOME COM ORDEM CRESCENTE */}
                <th> Nome </th>
                {/* //! CPF */}
                <th> CPF </th>
                {/* //! INÍCIO DA VIGENCIA ORDEM DECRESCENTE */}
                <th> Início da vigência </th>
                {/* //! BOTAO VER DELHATES : CRUD > MODAL */}
                <th> Ações </th>
                {/* //! AÇÕES EDITAR, ADD, REMOVER */}
                <th> Ações </th>
              </tr>
            </thead>
            <tbody>
              {/* //~TASK.MAP (já que ela é uma array) e vou pegar uma "tasks" */}
              {/* //~retornando a seguinte estrutura ... */}
                {
                  tasks.map(task => (
                    <tr key={task.title}>
                      {/* //^na primeira coluna que é o Status  */}
                      <td>{ task.status }</td>
                      <td>{ task.title }</td>
                      <td>{ task.cpf }</td>
                      <td>{ task.created_at }</td>
                      <td>{ task.details }</td>
                    </tr>
                  ))
                }

              <tr>
                  <td>BOTAO(ATIVO/INATIVO)</td>
                  <td>Lucas das Chagas Testa Nome Sobrenome</td>
                  <td>336.475.018-16</td>
                  <td>06/01/2022</td>
                  <td>BOTAO VER DETALHES(MODAL)</td>
                  <td>EDT/ADD/REMO</td>
              </tr>
              <tr>
                  <td>BOTAO(ATIVO/INATIVO)</td>
                  <td>Lucas das Chagas Testa Nome Sobrenome</td>
                  <td>336.475.018-16</td>
                  <td>06/01/2022</td>
                  <td>BOTAO VER DETALHES(MODAL)</td>
                  <td>EDT/ADD/REMO</td>
              </tr>
              <tr>
                  <td>BOTAO(ATIVO/INATIVO)</td>
                  <td>Lucas das Chagas Testa Nome Sobrenome</td>
                  <td>336.475.018-16</td>
                  <td>06/01/2022</td>
                  <td>BOTAO VER DETALHES(MODAL)</td>
                  <td>EDT/ADD/REMO</td>
              </tr>
            </tbody>
      </Table>
    </div>
  );
};
export default Tasks;


  // ? ⇩⇩⇩ NOTE ⇩⇩⇩
  // ! ⇩⇩⇩ NOTE ⇩⇩⇩
  // ~ ⇩⇩⇩ NOTE ⇩⇩⇩
  // ^ ⇩⇩⇩ NOTE ⇩⇩⇩
  // * ⇩⇩⇩ NOTE ⇩⇩⇩
  // ? ⇩⇩⇩ NOTE ⇩⇩⇩
  /* 
  & ⇩⇩⇩ NOTE ⇩⇩⇩
  */    
  /*
   TODO ⇩⇩⇩ NOTE ⇩⇩⇩
*/