import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      scrollbar-width: thin;
    }

    :root {
      --primary-color: ${theme.colors.primary};
    }

    body {
      font: 400 1rem ${theme.font.family};
      background: ${theme.colors.background};
      color: ${theme.colors.textPrimary};
      overflow-x: hidden;
    }

    ol,
    ul {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.primary};
      font-weight: 500;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.secondary};
      }
    }
  `}`;

export default GlobalStyle;
