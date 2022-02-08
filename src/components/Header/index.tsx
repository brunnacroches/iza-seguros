import React from 'react';
import { Link } from 'react-router-dom'; 
import LogoIzaI from '../../assets/svg/logo-iza-i-orange.svg';
import LogoIzaPonto from '../../assets/svg/logo-iza-ponto-orange.svg';
import LogoIzaZa from '../../assets/svg/logo-iza-za-orange.svg';
import { 
  Container, 
  Nav, 
  Navbar 
} from 'react-bootstrap';


import {
  // HeaderLogo,
  LogoIzaP,
  LogoIzaIP,
  LogoIza
} from './styles';

const Header: React.FC = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> 
        {/* <HeaderLogo> */}
          <LogoIzaP src={LogoIzaPonto} alt=""/>
          <LogoIzaIP src={LogoIzaI} alt="" />
          <LogoIza src={LogoIzaZa} alt="" />
        {/* </HeaderLogo> */}
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} className="nav-link" to="/">Início</Nav.Link>
      <Nav.Link as={Link} className="nav-link" to="/tarefas">Crud</Nav.Link>
      <Nav.Link as={Link} className="nav-link" to="/">Termos</Nav.Link>
      <Nav.Link as={Link} className="nav-link" to="/">Login</Nav.Link>
      <Nav.Link as={Link} className="nav-link" to="/">Fazer cotação</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Header;