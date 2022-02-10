// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect, ChangeEvent} from 'react';
import { Button, Col, FloatingLabel, Form, Row  } from 'react-bootstrap';
import api from '../../services/api';
import { useNavigate, useParams} from 'react-router-dom';
import { 
  ContainerSegurados, 
  ButtonSave,
  LinkBack,
  Label,
  TitleLabel
} from "./styless";

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
                <h1>Suporte Iza</h1>
              </div>
            <br />
            <div className='containerForm'>
            <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="nomeCompleto">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="nome" placeholder="Nome Nome Sobrenome Sobrenome" />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="Assunto__Empresa">
                    <Form.Label>Assunto</Form.Label>
                    <Form.Control type="assunto" placeholder="Assunto suporte alguma coisa" />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="AlgumaEmpresa">
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type="alguma__Empresa" placeholder="Alguma Empresa S.A" />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="emailSegurado">
                    <Form.Label>ssss</Form.Label>
                    <Form.Control type="telefone__Segurado" placeholder="ssss" />
                  </Form.Group> */}
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="emailsegurado">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="alguma__Empresa" placeholder="emailsegurado@algumaempresa.com.br" />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="TelefoneSegurados">
                    <Form.Label>ssss</Form.Label>
                    <Form.Control type="telefone__Segurado" placeholder="ssss" />
                  </Form.Group> */}
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="TelefoneSegurados">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="telefone__Segurado" placeholder="(11) 97456-8243" />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="TelefoneSegurados">
                    <Form.Label>ssss</Form.Label>
                    <Form.Control type="telefone__Segurado" placeholder="ssss" />
                  </Form.Group> */}
                </Row>
              </Form>
              <>
              <Label>
                <FloatingLabel controlId="floatingTextarea2" label="Mensagem">
                  <TitleLabel>Mensagem</TitleLabel>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ 
                      height: '265px' }}
                    />
                </FloatingLabel>
              </Label>              
              </>
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


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { Modal } from 'react-responsive-modal';
// import { borderRadius } from 'styled-system';


// import {
//   Container,
//   ButtonModal,
// } from'./styless'


// const ModalForms: React.FC = () => {

//     const [open, setOpen] = useState(false);
//     const onOpenModal = () => setOpen(true);
//     const onCloseModal = () => setOpen(false);

//       return (

//       <Container>
//         <div>
//         <ButtonModal>
//           <button onClick={onOpenModal} 
//           style={{ 
//             color: "white", 
//             background: "#FF5148", 
//             borderRadius:3,
//             height: 60, 
//             width: 150,
//             }}>Open modal
//           </button>
//         </ButtonModal>
//           <Modal open={open} onClose={onCloseModal} center>
//               <h2>Simple centered modal</h2>
//               <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//               pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
//               hendrerit risus, sed porttitor quam.
//               </p>
//           </Modal>
//           </div>
//     </Container>
//   );
// }

// export default ModalForms;



