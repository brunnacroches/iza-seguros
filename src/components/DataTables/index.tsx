import React from "react";
import Lottie from 'react-lottie';
import SelectInput from '../SelectInput';
import { Controllers } from "../ContentHeader/styles";

import { Container, Tag } from './styles';

interface DataTableProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  children: string;
}

const DataTables: React.FC<DataTableProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  children
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
      <Container color={cardColor}>
        <Tag color={tagColor} />
        <Controllers>
          <SelectInput options={options} />
          <SelectInput options={options} />
        </Controllers>
        <div>
          <span>{title}</span>
          <span>{subtitle}</span>
        </div>
        <h3>{children}</h3>
      </Container>
  );
}

export default DataTables;





















// ? MODELO DATATABLES CASO DE ESTUDO
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