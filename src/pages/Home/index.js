import React from 'react';
import { Container } from 'react-bootstrap';

import Toolbar from '../../components/Toolbar';
import { TitleComponent } from './styles';

function Home() {
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
    </Container>
  );
}

export default Home;
