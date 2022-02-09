import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import TasksForm from '../pages/Tasks/Form';
import TasksDetail from '../pages/Tasks/Detail';
import Layout from "../components/Layout";
import Login from '../pages/Login';
// import Layout from "../components/Layout";
// import Crud from "../pages/Crud";
import Modal from "../pages/Modal";


const AppRoutes: React.FC = () => {
  return (
        <Routes>
            <Route path='/' element={<Home /> } />
                <Route path='/login' element={<Login /> } />
                <Route path='/modal' element={<Modal /> } />
                <Route element={<Layout />} >
                    <Route path='/tarefas' element={<Tasks /> } />
                    <Route path='/tarefas_cadastro' element={<TasksForm /> } />
                    <Route path='/tarefas_cadastro/:id' element={<TasksForm /> } />
                    <Route path='/tarefas/:id' element={<TasksDetail /> } />
                </Route>
        </Routes>
  );
}

export default AppRoutes;

// const AppRoutes: React.FC = () => (
//   <Layout>
//     <Routes>
//        {/* <Route path='/' element={<App />} /> */}
//         <Route path='HeaderContent' element={<HeaderContent />} />
//            <Route path=":teamHeaderContent" element={<HeaderContent />} />
//            <Route path="Crud" element={<Crud />} />
//     </Routes>
//   </Layout>
// );
// export default AppRoutes;

// DUAS ROTAS PARA E PASSANDO OS TIPOS
// REAPROVEITAR AS TELAS










// ! MUDANÇAS NO "EXACT"
// ? antigo - v5 <Route exact path="/" component={Home} />
// ? novo - v6 <Route path="/" element={<Home />} />

// ! MUDANÇAS NO "SWITCH"
// ? SITHC = ROUTES
