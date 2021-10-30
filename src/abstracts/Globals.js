import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --white: hsl(0, 0%, 100%);
    --black: hsl(270, 3%, 11%);
    --lightGray: hsl(210, 17%, 95%);
    --darkGray: hsl(264, 5%, 20%);
    --peach: hsl(11, 72%, 66%);
    --lightPeach: hsl(11, 100%, 80%);
    --lighterPeach: hsl(14, 76%, 97%);
    
    /* radius */
    --mainRadius: 2rem;
    --secondaryRadius: 1rem;

    /* grid gap */
    --gap: 5rem; 
      
    /* shadows */
    --mainShadow: 0.1rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    overflow-x: hidden;
    font-family: 'Jost', sans-serif;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
