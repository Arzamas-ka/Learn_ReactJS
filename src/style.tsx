import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  max-height: 100vh;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  background-color: #232323;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  text-decoration: none;

  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

button {
  border: none;
  outline: none;

  cursor: pointer;
}

#root {
  position: relative;
  min-height: 100vh;
}
`;
