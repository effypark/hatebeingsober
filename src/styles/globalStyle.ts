import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  font-family: Orbit-Regular, sans-serif, Arial;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #313131 !important;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
html {
  height: 100%;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  touch-action: manipulation;
  -webkit-text-size-adjust: none;
  -ms-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -o-text-size-adjust: none;
  text-size-adjust: none;
}
 
 button { 
   background-color: transparent;
  border: none;
  height: auto;
  margin: 0;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  outline: inherit;
  color: inherit;
  
}

a {
  display: flex;
}

* {
  box-sizing: border-box;
}

h1, h2, h3 {
  margin: 0;
  padding: 0;
}

em {
  font-style: normal;
}




#__next {
  width: 100%;
  /* max-width: 500px; */
  height: 100%;
  /* background-color: #1B1B1B !important; */
  font-family: Orbit-Regular;
  color: white;
}

.react-reveal{
  width: 100%;
}

@font-face {
    font-family: 'Orbit-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/Orbit-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Orbit-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/Orbit-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'OAGothic-ExtraBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/OAGothic-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'OAGothic-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/OAGothic-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Pretendard-Black';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}





`;

export default GlobalStyle;
