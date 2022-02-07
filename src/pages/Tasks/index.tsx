// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect} from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import api from "../../services/api";
import moment from 'moment'; 
import { Container, ButtonNews  } from "./styles";
import { useNavigate,} from 'react-router-dom';

// useNavigate = useHistory

// import  "./styles.ts";
/*
& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ITask {
  status: boolean;
  title: string;
  cpf: number;
  created_at: Date;
  finished: boolean;
  updated_at: Date;
  details: boolean;
  id: number;
}

const Tasks: React.FC = () => {
  // ? ⇩⇩⇩ NOTE ⇩⇩⇩
    // ? coloando o dado dentro de uma variável para exibir na tabela ( PASSO 2 )
    // ? criando uma array
    // ? por ser vetor é passado outra [] < <ITask[]> ([])
  const [ tasks, setTasks] = useState <ITask[]> ([])
  const navigate = useNavigate();


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
    async function finishedTask(id: number) {
      await api.patch(`/tasks/${id!}`)
      loadTasks()
    }
    async function deleteTask(id: number) {
      await api.delete(`/tasks/${id!}`)
      loadTasks()
    }
    function formateDate(date: Date) {
      return moment(date).format("DD/MM/YYYY")
    }
    function newTask () {
      navigate('/tarefas_cadastro')
    }
    function editTask(id: number) {
      navigate(`/tarefas_cadastro/${id}`)
    }
    function viewTask(id: number) {
      navigate(`/tarefas/${id}`)
    }
  return (
    <Container>
        <div className='container'>
          <br />
          <ButtonNews>
            <div className='task-header'>
              <h1>Tasks Page</h1>
              <Button variant="dark" onClick={newTask}>Nova Tarefa</Button>
            </div>
          </ButtonNews>
          <br />
          <Table striped bordered hover className='text-center'>
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
                        <tr key={task.id}>
                          <td>
                          {/* //^na primeira coluna que é o Status  */}
                          <Badge pill bg={ task.finished ? "success" : "warning" }>
                              { task.finished ? "ATIVO" : "INATIVO" }
                          </Badge>
                          </td>
                          <td>{ task.title }</td>
                          <td>{ task.cpf }</td>
                          <td>{ formateDate(task.updated_at) }</td>
                          <td>{ task.details }</td>
                          <td><Button size="sm" variant="Light" style={{ color: "white", background: "#680265" }}  >VER DETALHES</Button>{' '}</td>
                          <td>
                            <Button size="sm" disabled={task.finished} onClick={() => editTask(task.id)}>Editar</Button> { ' ' }
                            <Button size="sm" disabled={task.finished} variant='warning' onClick={() => finishedTask(task.id)}>Finalizar</Button> { ' ' }
                            <Button size="sm" variant='info' onClick={() => viewTask(task.id)} >Vizualizar </Button> { ' ' }
                            <Button size="sm"variant='danger'onClick={() => deleteTask(task.id)}>Remover</Button> { ' ' }
                          </td>
                        </tr>
                      ))
                    }
                </tbody>
          </Table>
        </div>
    </Container>
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