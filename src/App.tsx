

import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from "styled-components";
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';
import Layout from './components/Layout';
import Page from './pages/Page';
import Modal from './pages/Modal';
// TEMA 
import orange from './styles/themes/orange';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={orange} >
      <GlobalStyles />
        <Layout>
          <Page />
        </Layout>
    </ThemeProvider>
  );
};

export default App;




// ! RODANDO APENAS A ESTRUTURA BÁSICA DO MENU E HEADER
// const App: React.FC = () => {
  //   return (
    //     <ThemeProvider theme={orange} >
    //       <GlobalStyles />
    //         <Layout>
    //         </Layout>
    //     </ThemeProvider>
    //   );
    // };
    
    
    // ! RODANDO OS LOTTIES CASO DE PROBLEMA COLOQUE NOVAMENTE
    {/* 
    <div className="lotties">
      <UncontrolledLottie />
      <ControlledLottie />
    </div> 
    */}


    // ! NOMEAÇÃO DAS PÁGINAS
    // nomear as páginas de index. faz com que na importação nao precise colocar o que vem depois do .
    // ex: = > index.js ==> 
    // import Modal from './pages/Modal'; (COM NOME INDEX.TSX)
// import Modal from './pages/Modal/name.js'; (SEM O NOME INDEX)



