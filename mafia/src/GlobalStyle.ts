import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: "Biro";
  src: url('/assets/fonts/BiroScriptPlus.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Julius Sans One";
  src: url('/assets/fonts/JuliusSansOne-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Inter";
  src: url('/assets/fonts/Inter-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Tajawal";
  src: url('/assets/fonts/Tajawal-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}


 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden;
}



`;