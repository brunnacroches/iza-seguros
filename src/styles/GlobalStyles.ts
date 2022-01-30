import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  /* QUANDO COLOCO UMA BORDA, ESSA BORDA VAI SOMAR  NA LARGURA E NA ALTURA DO ELEMENTO => O BORDER-BOX EVITA SUPERPRESA, E NAO ADICIONA PARA FORA */
  box-sizing: border-box;
}

/* por padrão a altura inteira */
html, body, #root {
  height: 100%;
}

/* sem borda, sem outline(sem definir a cor do contorno) */
*, button, input {
  border: 0;
  outline: 0;
  font-family: 'Roboto', sans-serif;
}

/*  */
button {
  cursor: pointer;
}

`;

/**
 *  * IMPORTANTE
 *  ! ATENÇÃO!
 *  ? DUVIDA
 *  TODO MAIUSCULO
 *  @param
 * @param myParam The parameter of this method
 *
 */
/**
 */
