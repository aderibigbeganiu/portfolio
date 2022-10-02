import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{
  theme: {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
  };
}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.20s linear;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0;
  }
  `;
