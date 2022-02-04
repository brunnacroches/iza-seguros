import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Crud from "../pages/Crud";
import HeaderContent from "../pages/HeaderContent";



const AppRoutes: React.FC = () => (
  <Layout>
    <Routes>
       {/* <Route path='/' element={<App />} /> */}
        <Route path='HeaderContent' element={<HeaderContent />} />
           <Route path=":teamHeaderContent" element={<HeaderContent />} />
           <Route path="Crud" element={<Crud />} />
    </Routes>
  </Layout>
);
export default AppRoutes;

// DUAS ROTAS PARA E PASSANDO OS TIPOS
// REAPROVEITAR AS TELAS










// ! MUDANÇAS NO "EXACT"
// ? antigo - v5 <Route exact path="/" component={Home} />
// ? novo - v6 <Route path="/" element={<Home />} />

// ! MUDANÇAS NO "SWITCH"
// ? SITHC = ROUTES
