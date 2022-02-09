// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect} from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import api from "../../services/api";
import { Modal } from 'react-responsive-modal';
import moment from 'moment'; 
import { 
  ContainerSegurado, 
  ButtonNews,
  TitleSegurado,
  ModalIza,
  ModalHeader,
  ModalCadastro,
  BadgePosition

} from "./styles";
import { useNavigate,} from 'react-router-dom';

// useNavigate = useHistory

// import  "./styles.ts";
/*
& CRIANDO UMA ITERFACE PARA FAZER A TIPAGEM E FALAR QUAIS ATRIBUTOS QUE ELA TEM
*/
interface ISegurados {
  status: boolean;
  title: string;
  cpf: number;
  created_at: Date;
  finished: boolean;
  updated_at: Date;
  details: boolean;
  id: number;
}

const Segurados: React.FC = () => {
  // ? ⇩⇩⇩ NOTE ⇩⇩⇩
    // ? coloando o dado dentro de uma variável para exibir na tabela ( PASSO 2 )
    // ? criando uma array
    // ? por ser vetor é passado outra [] < <ISegurado[]> ([])
  const [ segurados, setSegurados] = useState <ISegurados[]> ([])
  const navigate = useNavigate();


  //^ ⇩⇩⇩ NOTE ⇩⇩⇩
      //^  ⇩ (PASSO 1)
      //^ ⇩ fazendo o consumo da API ⇩
    
    useEffect(() => {
        loadSegurados()
    }, [])
    //^ ⇧⇧⇧ NOTE ⇧⇧⇧ 
    //^ ⇧  o [] vazio pq eu quero que ele execute assim que a página seja iniciada ⇩
    
    //^ ⇩ funcao assincrona = quando fizer uma requisão e essa requisição pode demorar ou nao ⇩
    //^ ⇩ e essa requisão vai retornar um dado futuro  ⇩
    async function loadSegurados() {
      
      //^ ⇩ chamando a API ⇩
      const response = await api.get('/segurados')
      console.log(response)
      // ? ⇩  pegando os dados da minha resposta( da minha requisição ) ⇩
      setSegurados(response.data)
    }
    async function finishedSegurado(id: number) {
      await api.patch(`/segurados/${id!}`)
      loadSegurados()
    }
    async function deleteSegurado(id: number) {
      await api.delete(`/segurados/${id!}`)
      loadSegurados()
    }
    function formateDate(date: Date) {
      return moment(date).format("DD/MM/YYYY")
    }
    function newSegurado () {
      navigate('/tarefas_cadastro')
    }
    function editSegurado(id: number) {
      navigate(`/tarefas_cadastro/${id}`)
    }
    function viewSegurado(id: number) {
      navigate(`/tarefas/${id}`)
    }

    //~MODAL

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

  return (
    <ContainerSegurado>
        <div className='container'>
          <br />
          <ButtonNews>
              <TitleSegurado>
                  <h1>Segurados</h1>
              </TitleSegurado>
              <Button variant="light" style={{ color: "white", background: "#FF5148" }}  onClick={newSegurado}>Adicionar Novos Segurados</Button>
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
                  {/* //~SEGURADO.MAP (já que ela é uma array) e vou pegar um "Segurado" */}
                  {/* //~retornando a seguinte estrutura ... */}
                    {
                      segurados.map(segurado => (
                        <><tr key={segurado.id}>
                          <td>
                            {/* //^na primeira coluna que é o Status  */}
                            <Badge pill bg={segurado.finished ? "success" : "danger"}>
                              {segurado.finished ? "ATIVO" : "INATIVO"}
                            </Badge>
                          </td>
                          <td>{segurado.title}</td>
                          <td>{segurado.cpf}</td>
                          <td>{formateDate(segurado.updated_at)}</td>
                          <td><Button size="sm" variant='Light'
                            style={{
                              color: "white",
                              background: "#680265",
                            }} onClick={onOpenModal}>VER DETALHES </Button> {' '}</td>

                          <td>
                            <Button size="sm" disabled={segurado.finished} onClick={() => editSegurado(segurado.id)}>Editar</Button> {' '}
                            <Button size="sm" disabled={segurado.finished} variant='warning' onClick={() => finishedSegurado(segurado.id)}>Finalizar</Button> {' '}
                            <Button size="sm" variant='danger' onClick={() => deleteSegurado(segurado.id)}>Remover</Button> {' '}
                          </td>
                        </tr><ModalIza>
                            <Modal open={open} onClose={onCloseModal} center>
                              <ModalHeader>
                              <BadgePosition>
                                <Badge pill bg={segurado.finished ? "success" : "danger"}>
                                  {segurado.finished ? "SEGURADO ATIVO" : "SEGURADO INATIVO"}
                                </Badge>
                              </BadgePosition>
                                <h2>Lucas das Chagas Testa Nome Nome</h2>
                              </ModalHeader>
                              <ModalCadastro>
                                <div className='CPF'>
                                  <h3> CPF </h3>
                                  336.475.018-16
                                </div>
                                <hr></hr>
                                <div className='Email'>
                                  <h3> Email </h3>
                                  lucas.testa@iza.com.vc
                                </div>
                                <hr></hr>
                                <div className='Telefone'>
                                  <h3> Telefone </h3>
                                  (11)97456-8243
                                </div>
                                <hr></hr>
                                <div className='Data de Nascimento'>
                                  <h3> Data de Nascimento </h3>
                                  16/07/1986
                                </div>
                                <hr></hr>
                                <div className='Início da vigencia'>
                                  <h3> Início da vigencia </h3>
                                  06/01/2022
                                </div>
                                <hr></hr>
                                <div className='Button'>
                                  <Button variant="light" style={{ color: "white", background: "#FF5148" }} onClick={newSegurado}>DESATIVAR SEGURADO</Button>
                                </div>

                              </ModalCadastro>
                            </Modal>
                          </ModalIza></>
                      ))
                    }
                </tbody>
          </Table>
        </div>
    </ContainerSegurado>
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