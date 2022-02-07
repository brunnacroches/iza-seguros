// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect} from 'react';
import { Button, Form  } from 'react-bootstrap';
import api from "../../../services/api";
import { Container, ButtonNew  } from "./styles";

// import  "./styles.ts";
/*

& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ITask {
  status: boolean;
  title: string;
  cpf: number;
  created_at: Date;
  fineshed: boolean;
  updated_at: Date;
  details: boolean;

}

const Tasks: React.FC = () => {

  // PARA SALVAR OS DADOS NO BANCO DE DADOS
  

  return (
    <Container>
        <div className='container'>
          <br />
          <ButtonNew>
            <div className='task-header'>
              <h1>New Tasks</h1>
              <Button variant="dark" size="sm">Voltar</Button>
            </div>
          </ButtonNew>
          <br />
          <div className='containerForm'>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="type"/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}/>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
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