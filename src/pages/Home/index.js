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
      <Container fluid className="w-50 text-align-center">
        <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/VpATBBRajP8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <TitleComponent>
          <h2 className="mt-5">We are not your kind!</h2>
        </TitleComponent>
      </Container>
    </Container>
  );
}

export default Home;
