import { createGlobalStyle } from 'styled-components';

const colors = {
  /* Branca */
  color1: '#eee',
  /* Preta */
  color2: '#111',
  /* Cinza */
  color3: '#333',
  /* Verde */
  color4: '#10AC84',
};

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif';
}
  body {
  background-color: ${colors.color2};
  color: ${colors.color1}
  }

`;
