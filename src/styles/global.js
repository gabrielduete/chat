import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --white: #ffff;
    --gray: #5F627A;
    --gray-strong: #75756A;
    --black: #0E0D12;
    --black-strong: #252331;
    --black-weak: #343145;
    --black-weak-2: #4c4466;
    --blue-strong: #1951FC;
    --blue-weak: #3384FE;
    // Spaces
    --space-lang: 1400px;
    --space-short: 700px;
    // Fonts
    --font-title: 4em;
    --font-medium: 1.5em;
    --font-small: 'PT Sans', sans-serif;
  }
  
  body{
    background-color: var(--black);
    color: var(--white);
    font-family: var(--font-small);
    font-size: 0.95em;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--gray);
    border-radius: 100px;
  }
`

export default GlobalStyles
