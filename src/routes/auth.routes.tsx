import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../pages/Login/containers/LoginForm";

const AuthRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={LoginForm} />
  </Routes>
);

export default AuthRoutes;
