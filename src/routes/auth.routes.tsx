import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";


import Login from "../pages/Login";
import Modal from "../pages/Modal";
import Page from "../pages/Page";

const AuthRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/page" element={Page} />
      <Route path="/modal/:type" element={Modal} />
    </Routes>
  </Layout>
);

// DUAS ROTAS PARA E PASSANDO OS TIPOS
// REAPROVEITAR AS TELAS
export default AuthRoutes;
