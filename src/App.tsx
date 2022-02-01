import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
// TEMA 
import light from './styles/themes/light';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light} >
      <GlobalStyles />
      <Layout>
      <div className="lotties">
          <UncontrolledLottie />
          <ControlledLottie />
      </div>
      <Dashboard/>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
