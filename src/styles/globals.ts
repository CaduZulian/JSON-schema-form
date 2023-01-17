import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
    font-family: 'Source Sans Pro', sans-serif;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root{
    height: 100%;
    overflow: hidden;
  }
  body {
    font-size: 1rem;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a{
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;
