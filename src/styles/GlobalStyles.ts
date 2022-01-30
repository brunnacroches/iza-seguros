import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
html, body, #root {
  height: 100%;
}

*, button, input {
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif;
}

button {
  cursor: pointer;
}

`;
