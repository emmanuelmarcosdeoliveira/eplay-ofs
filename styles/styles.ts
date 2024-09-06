import { createGlobalStyle } from 'styled-components'

export const colors = {
  /* Branca */
  white: '#eee',
  /* Preta */
  black: '#111',
  /* Cinza */
  primary: '#333',
  /* Verde */
  secondary: '#10AC84',
  // Cinza Claro
  tertiary: '#a3a3a3'
}

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Roboto', 'sans-serif';
}
  body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
  /* padding-bottom: 80px; */
   }
   .wrapper {
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
   }
`
