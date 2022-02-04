import React from "react";
import { BrowserRouter } from 'react-router-dom';


// import Routes from './routes/routes';

// TEMA
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);



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