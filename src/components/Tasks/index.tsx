import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import api from "../../services/api"

// import SelectInput from '../SelectInput';
// import {Button} from "react-bootstrap";
// import { LottieDownload } from "./styles";
// import { withTheme } from "styled-components";
// import download from '../../assets/lotties/download.json';
// import add from '../../assets/lotties/add.json';
// import Lottie from 'react-lottie';


// começar a consumir os dados da  API
const Tasks: React.FC = () => {

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {

    const response = await api.get('/tasks')
    console.log(response)

  }

  return(
    <div className="container">
      <h1>Segurados</h1>
      <br />
          <h1> input </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Status </th>
                <th>Nome </th>
                <th>CPF </th>
                <th>Início da vigência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
              </div>
  );
}
export default Tasks;

