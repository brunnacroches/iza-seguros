import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes/app.routes';
import Header from './components/Header';
// import { ThemeProvider } from 'styled-components';
// import GlobalStyles from './styles/GlobalStyles';
// import { Routes, Route } from "react-router-dom";
// import Layout from './components/Layout';
// import HeaderContent from './pages/HeaderContent';
// import Crud from './pages/Crud';

// TEMA
// import orange from './styles/themes/orange';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

// const App: React.FC = () => {
//   return (
//     <div>
//     <ThemeProvider theme={orange}>
//       <GlobalStyles />
//        <Layout>
//         <Routes>
//           <Route path='HeaderContent' element={<HeaderContent />} />
//             <Route path="/HeaderContent" element={<HeaderContent />} />
//             <Route path='/' element={<Crud />} />
//         </Routes>
//       </Layout>
// </ThemeProvider>
//     </div>
//   );
// }

// export default App;







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


//~ NOMEAÇÃO DAS PÁGINAS
  // nomear as páginas de index. faz com que na importação nao precise colocar o que vem depois do .
  // ex: = > index.js ==>
  // import Modal from './pages/Modal'; (COM NOME INDEX.TSX)
  // import Modal from './pages/Modal/name.js'; (SEM O NOME INDEX)
