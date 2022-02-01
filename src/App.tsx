import React from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/GlobalStyles';
import UncontrolledLottie from './components/UncontrolledLottie';
import ControlledLottie from './components/ControlledLottie';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import List from './pages/List';
// TEMA 
import orange from './styles/themes/orange';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={orange} >
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
