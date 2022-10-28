import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arimo', sans-serif;
  }

  .animate-shake{
    animation: shake 150ms 2 linear;

    @keyframes shake {
    0% {
      transform: translate(3px, 0);
    }
    50% {
      transform: translate(-3px, 0);
    }
    100% {
     transform: translate(0, 0);
  }
}
  }

  .animate-spin{
    animation: spin 1s linear infinite;

    @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
   }
   }

   font-size: 40px;
   color: #3f84c0;
  }

`;

export default GlobalStyles;
