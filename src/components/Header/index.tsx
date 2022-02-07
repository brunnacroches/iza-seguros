import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> Seguros Iza </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} className="nav-link" to="/">Início</Nav.Link>
      <Nav.Link as={Link} className="nav-link" to="/tarefas">Tarefas</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Header;