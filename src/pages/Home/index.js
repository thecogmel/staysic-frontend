import React from 'react';
import { Container } from 'react-bootstrap';

import Toolbar from '../../components/Toolbar';
import { TitleComponent, VideoComponent } from './styles';

function Home() {
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
      <Container>
        <VideoComponent className="d-flex justify-content-center mt-5">
          <div className="video embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/VpATBBRajP8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </VideoComponent>
        <TitleComponent>
          <h2 className="mt-5">We are not your kind!</h2>
        </TitleComponent>
      </Container>
    </Container>
  );
}

export default Home;
