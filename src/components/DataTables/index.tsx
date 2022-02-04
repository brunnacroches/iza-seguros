import React from "react";
import Lottie from 'react-lottie';
import SelectInput from '../SelectInput';
import { Controllers } from "../ContentHeader/styles";
import download from '../../assets/lotties/download.json';

import { 
  Container,
  HeaderContainer,
  TitleContainer,
  ListContainer,
  Tag,
  TitleInput,
  TitleSeach,
  MenuItemLink,
  LottieDownload
} from './styles';

interface DataTableProps {
  title: string
  name: string;
  cpf: string;
  data: string;
  children: string;
  tagColor: string;
}

const DataTables: React.FC<DataTableProps> = ({
  title,
  name,
  cpf,
  data,
  children,
  tagColor,
}) => {
  const options = [
    {value: 'Rodrigo', label: 'Segurados Inativos'},
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Rodrigo', label: 'Rodrigo'}
  ]
  const buscar = [
    {value: 'Rodrigo', label: 'Digite nome ou C'},
    {value: 'Rodrigo', label: 'Rodrigo'},
    {value: 'Rodrigo', label: 'Rodrigo'}
  ]
      
  return (
      <Container>
        {/* SELECT INPUT */}
        <HeaderContainer>
          <Controllers>
          <TitleInput>
            <h3>Status do Segurado</h3>
            <SelectInput options={options} />
          </TitleInput>
          <TitleSeach>
            <h3>Buscar pr nome ou CPF do segurado</h3>
            <SelectInput options={buscar} />
          </TitleSeach>
          </Controllers>
          {/* MENSAGEM IZA */}         
          <LottieDownload href="#">
          <Lottie
              options={{
              animationData: download,
              loop: true,
            }}
          />
        </LottieDownload>
          <MenuItemLink href="#">
          Segurados
        </MenuItemLink>

        {/* HEADER TITULO DA LISTA */}
        </HeaderContainer>
        <TitleContainer>
        <h1>{title}</h1>
        </TitleContainer>
        {/* CONTEÚDO DA LISTA*/}
        <ListContainer>
        <Tag color={tagColor} />
        <div>
          <span>{title}</span>
        </div>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <span>{cpf}</span>
        </div>
        <div>
          <span>{data}</span>
        </div>
        <h3>{children}</h3>
        </ListContainer>
      </Container>
  );
}

export default DataTables;





















// // ? MODELO DATATABLES CASO DE ESTUDO
//     const columns: GridColDef[] = [
//       { field: 'id', headerName: 'ID', width: 70 },
//       { field: 'firstName', headerName: 'First name', width: 130 },
//       { field: 'lastName', headerName: 'Last name', width: 130 },
//       {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//       },
//       {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params: GridValueGetterParams) =>
//           `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//       },
//     ];

//     const rows = [
//       { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//       { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//       { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//       { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//       { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//       { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//       { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//       { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//       { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//     ];

//     export default function DataTable() {
//       return (
//         <div style={{ height: 400, width: '100%' }}>
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             rowsPerPageOptions={[5]}
//             checkboxSelection
//           />
//         </div>
//       );
//     }