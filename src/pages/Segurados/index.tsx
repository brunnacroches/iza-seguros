// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect} from 'react';
import { Badge, Button } from 'react-bootstrap';
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
import Table, { TableHead } from '../../components/Table';

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
    function viewSegurados(id: number) {
      navigate(`/tarefas/${id}`)
    }

    //~MODAL

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const headerConfig: TableHead[] = [
      {id:'status', label:'Status'},
      {id:'nome', label:'Nome'},
      {id:"cpf",label:"CPF"}
    ]

    const rows = [
      {id:1,status:'Ativo', nome:'João', cpf:'370.998.308-80'},
    {id:2,status:'Inativo', nome:'Maria', cpf:'370.998.238-80'}
  ]


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
          <Table headerConfig={headerConfig} rows={rows} actions={[
            {
            type:'edit',
            tooltip:'Editar',
            onClick:(id:number)=>{}
          }]}/>
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