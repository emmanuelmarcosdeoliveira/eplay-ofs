import { createGlobalStyle } from 'styled-components'

export const breakPoints = {
  desktop: '1024px',
  tablet: '768px'
}

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
  @media (max-width: ${breakPoints.desktop}) {
    max-width: 80%;
    }
   }
   html {
    scroll-behavior: smooth;
    :target {
      scroll-margin-top: .5rem;
    }
   }
   .animeLeft {
    opacity: 0;
    transform: translateX(-80px);
    animation: animeLeft 1s ease forwards;
    animation-delay: 500ms;
      }
      @keyframes animeLeft {
        to {
         opacity :1;
         transform: initial;
        }
      }
      .animeRigth {
    opacity: 0;
    transform: translateX(80px);
    animation: animeRigth 1s ease forwards;
    animation-delay: 500ms;
      }
      @keyframes animeRigth {
        to {
         opacity :1;
         transform: initial;
        }
      }
      .animeBotton {
    opacity: 0;
    transform: translateY(-80px);
    animation: animeLeft 1s ease forwards;
    animation-delay: 500ms;
      }
      @keyframes animeBotton {
        to {
         opacity :1;
         transform: initial;
        }
      }
      .animeTop {
    opacity: 0;
    transform: translateY(80px);
    animation: animeTop  1s ease forwards;
    animation-delay: 300ms;
      }
      @keyframes animeTop {
        to {
         opacity :1;
         transform: initial;
        }
      }

`
