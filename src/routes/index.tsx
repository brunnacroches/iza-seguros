import React from "react";
import { BrowserRouter } from "react-router-dom";

import Auth from "./auth.routes";
import Layout from '../components/Layout/index';

const Routes: React.FC = () => (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>

);

export default Routes;

{/* <Layout>
<BrowserRouter>
  <Auth />
</BrowserRouter>
</Layout>
); */}