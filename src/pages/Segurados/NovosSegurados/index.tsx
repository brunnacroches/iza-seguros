// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect, ChangeEvent} from 'react';
import { Button, Col, Form, Row  } from 'react-bootstrap';
import api from "../../../services/api";
import { useNavigate, useParams} from 'react-router-dom';
import { 
  ContainerSegurados, 
  ButtonSave,
  LinkBack
} from "./styles";

// import  "./styles.ts";
/*

& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ISegurado {
  // status: boolean;
  // cpf: number;
  // created_at: Date;
  // fineshed: boolean;
  // updated_at: Date;
  // details: boolean;
  title: string;
  description:string;
}

const Segurados: React.FC = () => {

  const navigate = useNavigate();
  // PEGANDO TODOS OS PARAMETROS QUE TEM NA URL
  const { id } = useParams()
  // PARA SALVAR OS DADOS NO BANCO DE DADOS
  const [model, setModel] = useState<ISegurado>({
    title: '',
    description: '',
  })

  // diga ao compilador que você tem certeza de que o nome não é nulo usando! (!)
  // findSegurado(id!)
  // ! O mesmo vale para o operador de desigualdade estrita (!==).
  useEffect(() => {
    if (id !== undefined) {
      findSegurados(id!)
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

      const response = await api.put(`/segurados/${id}`, model)
    } else {

      const response = await api.post('/segurados', model)
    }
    // SALVAR E VOLTAR PARA A PÁGINA
    back()
  }

  // FUNÇÃO ASSÍNCRONA = PEGAR O "ID" E CARREGAR A TESTK CUJO A ID É IGUAL A QUE ESTAMOS RECEBENDO
  async function findSegurados(id: string){
    const response = await api.get(`segurados/${id}`)
    setModel({
      title: response.data.title,
      description: response.data.description
    })
  }

  function back () {
    navigate(-1)
  }
  
  return (
      <ContainerSegurados>
          <div className='container'>
            <br />
              <div className='segurado-header'>
                <h1>Novos Segurados</h1>
              </div>
            <br />
            <div className='containerForm'>
            <Form>
              <Form.Group className="mb-3" controlId="nomeCompleto">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control placeholder="Nome Nome Sobrenome Sobrenome" />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="CPFSegurados">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="cpf" placeholder="336.475.018-16" />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="NascimentoData">
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="data__nascimento" placeholder="16/07/1986" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="EmailSegurado">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email__segurado" placeholder="emailsegurado@algumaempresa.com.br" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="TelefoneSegurados">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="telefone__Segurado" placeholder="(11) 97456-8243" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <LinkBack href="#" onClick={() => navigate(-1)}>
                Retornar Segurados
                </LinkBack>
              </Form>
            </div>
            <ButtonSave>
                <Button variant="light" style=
                    {{ 
                      color: "white", 
                      background: "#FF5148" 
                      }} onClick={() => navigate(-1)}>
                        Salvar Segurados
                </Button>
            </ButtonSave>
          </div>
          <hr>
          </hr>
      </ContainerSegurados>  
  );
};
export default Segurados;




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