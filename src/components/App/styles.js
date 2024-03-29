import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lobster+Two:400,700|Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color:#1f2e40;
    color:#f5f5f5;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  .app-container {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`

export default GlobalStyles;