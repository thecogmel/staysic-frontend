import { createGlobalStyle } from 'styled-components';
import Star from '../assets/nona_vermelho.png';

export default createGlobalStyle`
  @font-face {
    font-family: 'Sickness';
    src: local('Sickness'), url(../assets/Sickness.ttf) format('truetype');
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
    background-size: 25%;
    -webkit-font-smoothing: antialiased;
    font-family: 'Courier New', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  button{
    cursor:pointer;
  }
`;
