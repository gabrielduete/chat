import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --white: #ffff;
    --gray: #5F627A;
    --black: #0E0D12;
    --black-strong: #252331;
    --black-weak: #343145;
    --blue-strong: #1951FC;
    --blue-weak: #3384FE;
    // Spaces
    --space-lang: 1400px;
    --space-short: 700px;
    // Fonts
    --font-title: 4em;
    --font-medium: 1.5em;
  }
  
  body{
    background-color: var(--black);
    color: var(--white);
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles
