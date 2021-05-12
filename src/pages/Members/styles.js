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
  }
  hr {
    border-top: 1px solid var(--redStaysic);
  }
  .form-label {
    color: var(--redStaysic);
  }
  #name,
  #email,
  #number,
  #instrument {
    background-color: black;
    color: red;
    border: 1px solid var(--redStaysic);
  }
  #name::placeholder,
  #email::placeholder,
  #number::placeholder,
  #instrument::placeholder {
    color: var(--redStaysic);
  }
`;

export const Memberdiv = styled.div`
  .figure-caption {
    color: red;
    /* font-size: calc(0.75rem + ((1vw - 3.6px) * 0.2564)); */
    font-size: calc(12px + (16 - 12) * ((100vw - 360px) / (1280 - 360)));
  }
`;
