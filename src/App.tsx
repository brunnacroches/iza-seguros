import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import HeaderContent from './pages/HeaderContent';
import Crud from './pages/Crud';
import Register from './pages/Register';
import Login from './pages/Login'

// import Routes from './routes/routes';

// TEMA
import orange from './styles/themes/orange';

const App: React.FC = () => {
  return (
  <BrowserRouter>
    <ThemeProvider theme={orange}>
      <GlobalStyles />
          <Layout>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/' element={<Login />} />
              <Route path='HeaderContent' element={<HeaderContent />} />
                <Route path=":teamHeaderContent" element={<HeaderContent />} />
                <Route path="Crud" element={<Crud />} />
            </Routes>
          </Layout>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;

// eslint-disable-next-line no-lone-blocks
{/* <HeaderContent />
<Crud /> */}

// eslint-disable-next-line no-lone-blocks
{/* <ThemeProvider theme={orange}>
  <GlobalStyles />
  <Layout>
    <HeaderContent />
    <Crud />
  </Layout>
</ThemeProvider> */}




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
