import styled from 'styled-components';

export const TitleComponent = styled.div`
  h1 {
    font-family: 'Sickness';
    color: red;
    font-size: 500%;
    text-align: center;
  }
  h2 {
    font-family: 'Sickness';
    color: red;
    font-size: 300%;
    text-align: center;
  }
`;

export const VideoComponent = styled.div`
  .video {
    width: 75%;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;
