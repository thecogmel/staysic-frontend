import React from 'react';
import { Container, Figure, Row } from 'react-bootstrap';

import bio from '../../assets/bio.jpg';
import Toolbar from '../../components/Toolbar';
import { TitleComponent, Content } from './styles';

function Bio() {
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
      <Container>
        <Content>
          <Row className="justify-content-center">
            <Figure>
              <Figure.Image
                width={347}
                height={167}
                alt="Staysic-band"
                src={bio}
              />
            </Figure>
          </Row>
          <Row className="mt-4">
            <h2>Biografia</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              feugiat tristique arcu, eget dictum libero consectetur eget.
              Pellentesque pretium massa eget fringilla consectetur. Cras vel
              odio egestas, rutrum tortor sit amet, lobortis lorem. Etiam ac
              ligula bibendum mauris fermentum consequat. Sed rutrum tortor eget
              metus maximus, vel mollis odio pretium. Vivamus sit amet purus
              accumsan, pretium arcu a, pharetra ligula. In mattis auctor quam,
              eget tempus lorem euismod sit amet. Proin sapien dolor, gravida
              ultrices velit eu, efficitur elementum ex. Sed sed dapibus tortor.
              Etiam bibendum elit consectetur tellus pretium, sit amet vulputate
              odio sodales. Nam eget justo sapien. In semper mi odio, at
              ullamcorper ligula malesuada in.
            </p>{' '}
            <p>
              Integer vehicula vestibulum velit, vel faucibus lectus blandit
              eget. Vivamus vel enim aliquet, finibus est vitae, accumsan
              turpis. Praesent sit amet lobortis diam. Suspendisse volutpat
              semper felis. Praesent fringilla augue erat, a lacinia lacus
              semper sit amet. Proin lacinia iaculis ullamcorper. Curabitur sem
              sem, elementum quis blandit at, blandit sit amet enim. Suspendisse
              sit amet tempus arcu.
            </p>
          </Row>
        </Content>
      </Container>
    </Container>
  );
}

export default Bio;
