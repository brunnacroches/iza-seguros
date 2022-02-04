import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Page Login
// import Login from "../pages/Login";
// Page CRUD
import Crud from "../pages/Crud";
// HeaderContent 
import HeaderContent from "../pages/HeaderContent";


// SWITCH = ROUTES
//  "/page" = chamando a rota
const AuthRoutes: React.FC = () => (
  <Layout>
    <Routes>
      {/* ROTA ESPECÍFICA PARA CHAMAR ESSE COMPONENTE */}
      <Route path="/" element={HeaderContent} />
      <Route path="/Crud" element={Crud} />
    </Routes>
  </Layout>
);

// DUAS ROTAS PARA E PASSANDO OS TIPOS
// REAPROVEITAR AS TELAS
export default AuthRoutes;

// ! MUDANÇAS NO "EXACT"
// ? antigo - v5 <Route exact path="/" component={Home} />
// ? novo - v6 <Route path="/" element={<Home />} />

// ! MUDANÇAS NO "SWITCH"
// ? SITHC = ROUTES

{/* <ThemeProvider theme={orange}>
      <GlobalStyles />
       <Layout>
          <HeaderContent />
          <Crud />
      </Layout>
    </ThemeProvider> */}