import React from "react";
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
import Login from './pages/Login'

// import Routes from './routes/routes';

// TEMA
import orange from './styles/themes/orange';
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
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
  ,document.getElementById("root")
);



