import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { ToolbarDiv } from './styles';

function Toolbar() {
  return (
    <ToolbarDiv className="my-4">
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        bg="red"
        className="py-0"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/schedule">Agenda</Nav.Link>
            <Nav.Link href="/bio">Bio</Nav.Link>
            <Nav.Link id="cast" href="/members">
              Integrantes
            </Nav.Link>
            <Nav.Link href="/photos">Fotos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ToolbarDiv>
  );
}

export default Toolbar;
