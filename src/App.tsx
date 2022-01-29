import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import LoginForm from "./pages/Login/containers/LoginForm";

// import ReactDOM from "react-dom";

// import DadosCadastraisXX from "./pages/DadosCadastraisXX";
// import Dashboard from "./pages/Dashboard";
// import PagamentosXX from "./pages/PagamentosXX";
// import PainelXX from "./pages/PainelXX";
// import AdicaoConcluida from "./pages/Segurados/containers/AdicaoConcluida";
// import SeguradosForm from "./pages/Segurados/containers/SeguradosForm";
// import SeguradosModal from "./pages/Segurados/containers/SeguradosModal";
// import SeguradosTable from "./pages/Segurados/containers/SeguradosTable";
// import SuportForm from "./pages/Suporte/containers/SuporteForm";

import "./global.css";

const App: React.FC = () => {
  return (
    // EMPACOTAR
    <>
      <GlobalStyles />
      <LoginForm />
    </>
  );
};

export default App;

// ReactDOM.render(<DadosCadastraisXX />, document.getElementById("root"));
// ReactDOM.render(<Dashboard />, document.getElementById("root"));
// ReactDOM.render(<LoginForm />, document.getElementById("root"));
// ReactDOM.render(<PagamentosXX />, document.getElementById("root"));
// ReactDOM.render(<PainelXX />, document.getElementById("root"));
// ReactDOM.render(<AdicaoConcluida />, document.getElementById("root"));
// ReactDOM.render(<SeguradosModal />, document.getElementById("root"));
// ReactDOM.render(<SeguradosTable />, document.getElementById("root"));
// ReactDOM.render(<SeguradosForm />, document.getElementById("root"));
// ReactDOM.render(<SuportForm />, document.getElementById("root"));

// aqui eu vou passar o index
// Redux
// Next.js
// conf do router
// colocar rota de cada ação
