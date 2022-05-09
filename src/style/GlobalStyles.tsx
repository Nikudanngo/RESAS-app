import { createGlobalStyle } from "styled-components";

export interface Theme {
  theme: {
    color: string;
    bgColor: string;
  };
}

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props: Theme) => props.theme.bgColor};
    color: ${(props: Theme) => props.theme.color};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;
