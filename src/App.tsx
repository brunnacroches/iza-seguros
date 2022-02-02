import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Page from './pages/Page';
import Modal from './pages/Modal';
import Register from './pages/Register';


import Routes from './routes';

// TEMA
import orange from './styles/themes/orange';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={orange}>
      <GlobalStyles />
      <Layout>
        <Page />
        <Modal />
      </Layout>
    </ThemeProvider>
  );
}

export default App;










// ~COMENTÁROO => ESTRUTURA BÁSICA
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
      //

//~ RODANDO OS LOTTIES CASO DE PROBLEMA COLOQUE NOVAMENTE
{
  /* 
    <div className="lotties">
      <UncontrolledLottie />
      <ControlledLottie />
    </div> 
    */
}

//~ NOMEAÇÃO DAS PÁGINAS
  // nomear as páginas de index. faz com que na importação nao precise colocar o que vem depois do .
  // ex: = > index.js ==>
  // import Modal from './pages/Modal'; (COM NOME INDEX.TSX)
  // import Modal from './pages/Modal/name.js'; (SEM O NOME INDEX)
