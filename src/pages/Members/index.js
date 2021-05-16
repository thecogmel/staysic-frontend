import React from 'react';
import { Container, Figure, Row, Col, Form, Button } from 'react-bootstrap';

import Toolbar from '../../components/Toolbar';
import { TitleComponent, Content, Memberdiv } from './styles';
import Member7 from '../../assets/7.jpg';

function Members() {
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
      <Container>
        <Content>
          <Memberdiv>
            <Figure className="w-100">
              <Row>
                <Col sm={3}>
                  <Figure.Image
                    width={200}
                    height={100}
                    alt="#7"
                    src={Member7}
                    className="rounded float-start"
                  />
                </Col>
                <Col sm className="d-flex align-items-center">
                  <h2 className="mb-0">#7 - Andre</h2>
                </Col>
              </Row>

              <Figure.Caption className="mt-4">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti dolores excepturi enim reprehenderit facilis saepe,
                  necessitatibus facere, molestiae veniam rerum cum fugit
                  laborum? Animi aliquam nemo facere repudiandae nesciunt
                  officiis?
                </p>
              </Figure.Caption>
            </Figure>
          </Memberdiv>
          <hr />
          <Memberdiv>
            <Figure className="w-100">
              <Row>
                <Col sm={3}>
                  <Figure.Image
                    width={200}
                    height={100}
                    alt="#7"
                    src={Member7}
                    className="rounded float-start"
                  />
                </Col>
                <Col sm className="d-flex align-items-center">
                  <h2 className="mb-0">#7 - Andre</h2>
                </Col>
              </Row>

              <Figure.Caption className="mt-3">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti dolores excepturi enim reprehenderit facilis saepe,
                  necessitatibus facere, molestiae veniam rerum cum fugit
                  laborum? Animi aliquam nemo facere repudiandae nesciunt
                  officiis?
                </p>
              </Figure.Caption>
            </Figure>
          </Memberdiv>
          <hr />
          <Memberdiv>
            <Figure className="w-100">
              <Row>
                <Col sm={3}>
                  <Figure.Image
                    width={200}
                    height={100}
                    alt="#7"
                    src={Member7}
                    className="rounded float-start"
                  />
                </Col>
                <Col sm className="d-flex align-items-center">
                  <h2 className="mb-0">#7 - Andre</h2>
                </Col>
              </Row>

              <Figure.Caption className="mt-4">
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corrupti dolores excepturi enim reprehenderit facilis saepe,
                  necessitatibus facere, molestiae veniam rerum cum fugit
                  laborum? Animi aliquam nemo facere repudiandae nesciunt
                  officiis?
                </p>
              </Figure.Caption>
            </Figure>
          </Memberdiv>
          <Row>
            <Col md={5}>
              <Form>
                <h2>Seja um membro</h2>
                <Form.Group controlId="name">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Digite aqui" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="email@email.com" />
                </Form.Group>

                <Form.Group controlId="number">
                  <Form.Label>Número</Form.Label>
                  <Form.Control type="number" placeholder="9888-888" />
                </Form.Group>
                <Form.Group controlId="instrument">
                  <Form.Label>Instrumento</Form.Label>
                  <Form.Control as="select" custom>
                    <option>Guitarra</option>
                    <option>Bateria</option>
                    <option>Baixo</option>
                    <option>Percussão</option>
                    <option>Voz</option>
                    <option>Samples/DJ</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Enviar cadastro!
                </Button>
              </Form>
            </Col>
          </Row>
        </Content>
      </Container>
    </Container>
  );
}

export default Members;
