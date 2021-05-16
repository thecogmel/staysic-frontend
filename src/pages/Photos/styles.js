import styled from 'styled-components';

export const TitleComponent = styled.div`
  h1 {
    font-family: 'Sickness';
    color: red;
    font-size: 500%;
    text-align: center;
  }
`;

export const Content = styled.div`
  margin-top: 4%;
  h2 {
    font-family: 'Sickness';
    color: red;
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  img {
    height: 227px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s;
  }
  img:hover {
    filter: brightness(32%);
  }
  .figure-caption {
    text-align: center;
    font-family: 'Sickness';
    font-size: 1.5rem;
    color: red;
    background-color: black;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;

export const ModalContent = styled.div`
  img,
  figure {
    margin: 0;
  }
`;
