import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

import { ToolbarDiv } from './styles';

function Toolbar() {
  return (
    <ToolbarDiv className="my-4">
      <Navbar collapseOnSelect expand="sm" variant="dark" bg="red">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features" className="font-weight-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Agenda
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Bio
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Integrantes
            </Nav.Link>
            <Nav.Link href="#pricing" className="font-weight-bold">
              Fotos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ToolbarDiv>
  );
}

export default Toolbar;
