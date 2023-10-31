import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    background: rgb(46,37,75);
    background: linear-gradient(90deg, rgba(46,37,75,1) 25%, rgba(73,58,115,1) 60%, rgba(92,73,144,1) 100%);
    color: white;
  }
`;
 
export default GlobalStyle;