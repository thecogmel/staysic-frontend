import { createGlobalStyle } from 'styled-components';
import Star from '../assets/nona_vermelho.png';
import Font from '../assets/Sickness.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Sickness';
    src: url(${Font}) format('truetype');
  }

  :root {
  --redStaysic: #8D0000;
  }

   body{
    background: black;
    background-image: url(${Star});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: 30%;
    -webkit-font-smoothing: antialiased;
    font: 400 12px 'Courier New', sans-serif;
  }
  button{
    cursor:pointer;
  }
`;
