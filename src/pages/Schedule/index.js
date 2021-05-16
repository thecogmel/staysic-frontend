import React from 'react';
import { Container } from 'react-bootstrap';

import Toolbar from '../../components/Toolbar';
import { TitleComponent, Content } from './styles';

function Schedule() {
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
      <Container>
        <Content>
          <h2>Agenda</h2>
          <ul className="mt-5">
            <li>Whiksritório - 26/05 - 21:00hr</li>
            <li>Whiksritório - 26/05 - 21:00hr</li>
            <li>Whiksritório - 26/05 - 21:00hr</li>
            <li>Whiksritório - 26/05 - 21:00hr</li>
          </ul>
        </Content>
      </Container>
    </Container>
  );
}

export default Schedule;
