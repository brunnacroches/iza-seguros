import React from "react";
import Lottie from 'react-lottie';
import { ContainerSelect } from "./styles";

//~ COMENTÁRIOS
    // ! CRIANDO UMA INTERFACE QUE VAI RECEBER OS OPTIONS 
    // ! CADA OPCAO VAI TER UM VALOR QUE PODE SER UMA STRING OU TEXTO
    // LABEL : É O QUE APARECE PARA O USUÁRIO
    // VALUE : É O QUE USAMOS PARA FAZER MANIPULAÇAO 
    // ? PROPRIEDADE " ONCHAGE " : É UMA PROPRIEDADE DE QUANDO A LISTA MUDAR
    // ! OPTION.MAP => PARA PERCORRER CADA ITEM DA OPÇÃO
    // ! PARA CADA OPÇÃO COLOCA AQUI DENTRO OPTION.VALUE > OPTION.VALUE (FICANDO ASSIM DINAMICO)
// 

interface TableProps {
  headerConfig: TableHead[]
  rows:any[];
  actions?:any[];
}

export interface TableHead{
  id:string;
  label:string;
}

const defaultProps: Partial<TableProps> = {actions:[]} 

export const Table: React.FC<TableProps> = ({headerConfig,rows, actions}) => {
  
  
  return (
      <table>
        <tr>
          {
          headerConfig.map(({id,label})=>{
            return <th key={id}>{label}</th>
          })}
          {actions?.length ? <th>Ações</th>: null}
        </tr>

        {rows.map((row:any)=>{

          return <tr key={row.id}>
            {headerConfig.map(({id},i)=>{
              return <td key={`${id}-${i}`}>{row[id]}</td>
            })}
          </tr>
        })}
              <tr>
          
        </tr>
        </table>
  );
};

Table.defaultProps = defaultProps

export default Table;







//~ COMENTÁRIOS : PARA ADD NO COMPONENTE
  // ! PARA ADD NO COMPONENTE 
  // import React from "react";
  // import plus from '../../assets/lotties/add.json';
  // import Lottie from 'react-lottie';
  // ? import SelectInput from "../SelecInput";
  // import Botton from "../Botton";
  // import InputLabel from "../InputLabel";

  // import { 
  //   Container,
  //   TitleContainer,
  // ?  Controllers,
  //   BottonNovoIza,
  //   LottiePlus
  // } from "./styles";

  // const ContentHeader: React.FC = () => {

  //~ const options = [
  //~  {value: 'Rodrigo', label: 'Rodrigo'},
  //~  {value: 'Maria', label: 'Maria'},
  //~ {value: 'Ana', label: 'Ana'}
  //~ ]
// 

//   return (
//     <Container>
//       <TitleContainer>
//         <h1>Segurados</h1>
//       </TitleContainer>
//      ? <SelectInput options={options}/>
//      ? <SelectInput options={options}/>
//      ? <SelectInput options={options}/>
//       <InputLabel />
//       <Controllers>
//         {/* <Botton /> */}
//       <BottonNovoIza href="#">
//       Adiconar Seguradores 
//       <LottiePlus href="#">
//         <Lottie 
//             options={{
//               animationData: plus,
//               loop: true,
//             }}
//           />
//       </LottiePlus>
//       </BottonNovoIza>
//       </Controllers>
//     </Container>
//   );
// };

// export default ContentHeader;








