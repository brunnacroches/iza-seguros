import React from "react";
import ReactDOM from "react-dom";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import 'react-responsive-modal/styles.css';

// TEMA
import App from "./App";

// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes/routes';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
      
//   </BrowserRouter>,
//   document.getElementById("root")
// );













// eslint-disable-next-line no-lone-blocks
{/* <BrowserRouter>
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
,document.getElementById("root") */}