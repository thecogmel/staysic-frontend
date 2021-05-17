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
              Era uma vez um menino chamado Gabriel, mais conhecido como Augusto
              Carrara, ele tinha o sonho de ser igual o Corey Taylor, decidiu
              montar sua própria banda cover do Slipknot.
            </p>
            <p>
              No entra e sai de integrantes ele acaba se desviando dos caminhos
              do Senhor Corey, e volta ao mundo dos Flashbacks, mas ai seus
              amigos vem reviver a chama que a pouco tinha se apagado, mas não
              por completo, decido do que queria, voltou atrás e foi em busca de
              seus sonhos, primeiro chamou dois guitarristas, chamados Zeca
              Paugordim e Zeca Paufinim, também conhecidos como Vertinho e
              André, depois conseguiu a ajuda de seu velho amigo de infância,
              Thomas, que também era conhecido como Aquiles do Agreste, depois
              conseguimos arrumar um baixista não muito groovador mas o mesmo
              era nosso maior suporte nas dificuldades, e assim conseguiu montar
              a banda The Nameless, que mais tarde viria a ser chamada de
              Staysic, nome este indicado por Thomas.
            </p>
            <p>
              E assim montamos esta banda, com o tempo convocamos a presença do
              Lenhador Davi no backs, DJ HC nos Scratchs e Maicão pegador nos
              Samplers e Teclado de notebook da NASA, (Não citaremos minions
              nesta biografia kkkk) para darmos continuidade ao nosso trabalho
              solidário e de suma importância para os ouvidos de grandes
              apreciadores de música boa, essa é a história por trás da maior
              banda cover de Natal/RN, gostaria que fosse melhor, porém melhor
              que isso só dois disso, obg e boa tarde meu confrades.
            </p>
          </Row>
        </Content>
      </Container>
    </Container>
  );
}

export default Bio;
