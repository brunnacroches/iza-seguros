// aqui vai ser usado o atalho chamado "rfc" (react functional component) que já cria a estrutura

import React, {useState, useEffect, ChangeEvent} from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import api from "../../../services/api";
import { useNavigate, useParams} from 'react-router-dom';
import { 
  ContainerSegurados, 
  ButtonBack  
} from "./styles";
import moment from 'moment';

interface ISegurado {
  id: number;
  description: string;
  title: string;
  finished:string;
  created_at: Date;
  updated_at: Date;
}

const Detail: React.FC = () => {

  const navigate = useNavigate();
   const { id } = useParams()
  const [segurado, setSegurado] = useState<ISegurado>()

  useEffect(() => {
    findSegurado()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  function back () {
    navigate(-1)
  }

   async function findSegurado() {
    const response = await api.get<ISegurado>(`/segurados/${id}`)
    console.log(response)
    setSegurado(response.data)
    // SALVAR E VOLTAR PARA A PÁGINA
    // back()
  }

  function formateDate(date: Date | undefined) {
    return moment(date).format("DD/MM/YYYY")
  }
  
  return (
    <ContainerSegurados>
        <div className='container'>
          <br />
          <ButtonBack>
            <div className='segurados-header'>
              <h1>Segurados Detail</h1>
              <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
          </ButtonBack>
          <br />
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{ segurado?.title }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
              {segurado?.description}
              <br />
              <Badge pill bg={segurado?.finished ? "sucess" : "warning"}>
                             {segurado?.finished ? "FINALIZADO" : "PENDENTE"}
              </Badge>
              <br />
              <strong>Data de Cadastro:</strong>
              <Badge pill bg="info">
                  { formateDate(segurado?.updated_at) }
              </Badge>
              <br />
              <strong>Atualização:</strong>
              <Badge pill bg="info">
                  { formateDate(segurado?.updated_at) }
              </Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </ContainerSegurados>
  );
};
export default Detail;



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