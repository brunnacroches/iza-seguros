// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect, ChangeEvent} from 'react';
import { Button, Form  } from 'react-bootstrap';
import api from "../../../services/api";
import { ContainerTasks, ButtonNew  } from "./styles";
import { useNavigate, useParams} from 'react-router-dom';

// import  "./styles.ts";
/*

& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ITask {
  // status: boolean;
  // cpf: number;
  // created_at: Date;
  // fineshed: boolean;
  // updated_at: Date;
  // details: boolean;
  title: string;
  description:string;
}

const Tasks: React.FC = () => {

  const navigate = useNavigate();
  // PEGANDO TODOS OS PARAMETROS QUE TEM NA URL
  const { id } = useParams()
  // PARA SALVAR OS DADOS NO BANCO DE DADOS
  const [model, setModel] = useState<ITask>({
    title: '',
    description: '',
  })

  // diga ao compilador que você tem certeza de que o nome não é nulo usando! (!)
  // findTask(id!)
  // ! O mesmo vale para o operador de desigualdade estrita (!==).
  useEffect(() => {
    if (id !== undefined) {
      findTask(id!)
    }
  }, [id])

  // criando a função que recebe o tipo de campo do HTML 
  function updatedModel (e: ChangeEvent<HTMLInputElement>) {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }
  
  // Fazer a comunicação com  API

  // quando der o submit ele vai esperar chegar na funcao e vai executar todo o código que passamos aqui 
  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (id !== undefined) {

      const response = await api.put(`/tasks/${id}`, model)
    } else {

      const response = await api.post('/tasks', model)
    }
    // SALVAR E VOLTAR PARA A PÁGINA
    back()
  }

  // FUNÇÃO ASSÍNCRONA = PEGAR O "ID" E CARREGAR A TESTK CUJO A ID É IGUAL A QUE ESTAMOS RECEBENDO
  async function findTask(id: string){
    const response = await api.get(`tasks/${id}`)
    setModel({
      title: response.data.title,
      description: response.data.description
    })
  }

  function back () {
    navigate(-1)
  }
  
  return (
    <ContainerTasks>
        <div className='container'>
          <br />
          <ButtonNew>
            <div className='task-header'>
              <h1>New Tasks</h1>
              <Button variant="dark" size="sm" onClick={() => navigate(-1)}>Voltar</Button>
            </div>
          </ButtonNew>
          <br />
          <div className='containerForm'>
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    name="title" 
                    value={model.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                    />
              </Form.Group>

              <Form.Group>
                <Form.Label>Descrição</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={3}
                  name="description"
                  value={model.description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                  />
              </Form.Group>
              <Button variant="dark" type="submit">
                Salvar
              </Button>
            </Form>
          </div>
        </div>
    </ContainerTasks>
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