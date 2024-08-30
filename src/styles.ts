import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  /* Branca */
  color1: '#eee',
  /* Preta */
  color2: '#111',
  /* Cinza */
  color3: '#333',
  /* Verde */
  color4: '#10AC84',
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
  background-color: ${colors.color2};
  color: ${colors.color1};
  padding-top: 40px;
  padding-bottom: 80px;
  
 }
`

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
`
