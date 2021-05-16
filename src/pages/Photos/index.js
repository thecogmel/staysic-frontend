import React, { useState } from 'react';
import { Container, Figure, Row, Col, Modal } from 'react-bootstrap';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';
import Toolbar from '../../components/Toolbar';
import { TitleComponent, Content, ModalContent } from './styles';

function Photos() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const photosArray = [
    {
      name: photo1,
      show: show1,
      handleClose: handleClose1,
      handleShow: handleShow1,
      caption: '#8 - whiskritorio - 21/05',
    },
    {
      name: photo2,
      show: show2,
      handleClose: handleClose2,
      handleShow: handleShow2,
      caption: '#8 - whiskritorio - 21/05',
    },
    {
      name: photo3,
      show: show3,
      handleClose: handleClose3,
      handleShow: handleShow3,
      caption: '#8 - whiskritorio - 21/05',
    },
    {
      name: photo4,
      show: show4,
      handleClose: handleClose4,
      handleShow: handleShow4,
      caption: '#8 - whiskritorio - 21/05',
    },
  ];
  return (
    <Container fluid>
      <TitleComponent className="pt-3">
        <h1>Staysic</h1>
      </TitleComponent>
      <Toolbar />
      <Container>
        <Content>
          <Row>
            {photosArray.map((item) => (
              <Col
                sm={6}
                className="d-flex justify-content-center flex-column mb-5"
              >
                <Figure className="d-flex justify-content-center">
                  <Figure.Image
                    width={406}
                    height={227}
                    alt="Staysic-band"
                    src={item.name}
                    onClick={item.handleShow}
                  />
                </Figure>
                <Figure.Caption>{item.caption}</Figure.Caption>
              </Col>
            ))}
          </Row>
        </Content>
      </Container>
      {photosArray.map((item) => (
        <Modal show={item.show} onHide={item.handleClose} centered size="lg">
          <ModalContent>
            <Figure>
              <Figure.Image alt={item.name} src={item.name} />
            </Figure>
          </ModalContent>
        </Modal>
      ))}
    </Container>
  );
}

export default Photos;
