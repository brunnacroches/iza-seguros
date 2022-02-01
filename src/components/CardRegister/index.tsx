import React from "react";
import Lottie from 'react-lottie';
import SelectInput from '../SelectInput';
// import { Controllers } from '../ContentHeader/styles';

import { 
  Container,
  Controllers
} from "./styles";

interface CarRegisterProps {
  cardColor: string;
  tagColor: string;
  titleStatus: string;
  selectSegurados: string;
  textInput: string;
  downSet: string;
  buscarNome: string;
  selectBuscar: string;
  linkExportar: string;
  img: string;
  textInputSearch: string;
  closeimg: string;
  lupaimg:string;

  contStatus: string;
  textButton: string;
  constNomeCPF: string;
  icodown: string;
  constCPF: string;
  constInicio: string;
  buttonAtivo: string;
  buttonInativo: string;
  textName: string;
  numberCPF: string;
  textData: string;
  buttonDetalhes: string;
  icoUp: string;
  textButtonEnd: string;

  textPage: string;
  numberPage: string;
  iconDown: string;
  onlyNumber: string;
  textDe: string;
  imgBack: string;
  imgGo: string;

}

const CardRegister: React.FC<CarRegisterProps> = ({
  // HEADER
  cardColor,
  tagColor,
  titleStatus,
  selectSegurados,
  downSet,
  buscarNome,
  selectBuscar,
  linkExportar,
  img,
  textInput,
  textInputSearch,
  closeimg,
  lupaimg,
// BODY
  contStatus,
  textButton,
  constNomeCPF,
  icodown,
  constCPF,
  constInicio,
  buttonAtivo,
  buttonInativo,
  textName,
  numberCPF,
  textData,
  buttonDetalhes,
  icoUp,
  textButtonEnd,
// FOOTER
  textPage,
  numberPage,
  iconDown,
  onlyNumber,
  textDe,
  imgBack,
  imgGo,
}) => {

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
    <Container color= {cardColor}>
      <Controllers>
        <SelectInput options={options} />
        <SelectInput options={buscar} />
      </Controllers>
        {/* HEADER */}
        <div className="Card__Header">
          <div className="Card__Header__Status">
            <span>{titleStatus}</span>
            <select>{selectSegurados}</select>
            <span>{textInput}</span>
            <link href="#">{downSet}</link>
          </div>
          <div className="Card__Header__Search">
            <span>{buscarNome}</span>
            <span>{selectBuscar}</span>
            <span>{textInputSearch}</span>
            <link href="#">{lupaimg}</link>
            <link href="#">{closeimg}</link>
          </div>
          <div className="Card__Header__Link">
            <span>{linkExportar}</span>
            <link href="#">{img}</link>
          </div>
        </div>
        {/* BODY */}
        <div className="Card__Title__Content">
            <div className="Card__Title__Content__Status">
              <span>{contStatus}</span>
              <select>{buttonAtivo}</select>
              <select>{buttonInativo}</select>
              <span>{textButton}</span>
            </div>
            <div className="Card__Title__Content__Nome">
              <span>{constNomeCPF}</span>
              <link href="#">{icodown}</link>
              <span>{textName}</span>
            </div>
            <div className="Card__Title__Content__CPF">
              <span>{constCPF}</span>
              <select>{numberCPF}</select>
            </div>
            <div className="Card__Title__Content__Date">
              <span>{constInicio}</span>
              <span>{textData}</span>
              <link href="#">{icoUp}</link>
            </div>
            <div className="Card__Title__Content__Button">
              <link href="#">{imgGo}</link>
              <select>{buttonDetalhes}</select>
              <span>{textButtonEnd}</span>
            </div>
        {/* FOOTER */}
        </div>
        <div className="Card__Footer">
          <div className="Card__Footer__Page">
            <span>{textPage}</span>
            <select>{numberPage}</select>
            <select>{iconDown}</select>
          </div>
          <div className="Card__Footer__Number">
            <span>{onlyNumber}</span>
            <span>{textDe}</span>
          </div>
          <div className="Card__Footer__End">
            <span>{imgBack}</span>
            <link href="#">{imgGo}</link>
          </div>
        </div>
    </Container>
  );
};

export default CardRegister;


// <Button color={button} /> : quando ela de fecha sozinha ela não tem 
// nada dentro dela
// <Button><Button/> : ela tem algo dentro