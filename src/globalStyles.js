import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --background: #111;
    --s_back: #f5f1e5;

    --main_color: #f74b3d;

    --white: #fff;
    --black: #000;
    --green: #46d369;
    --yellow: #f9c13d;
    --gray: #b6b6b6;
    --dark_gray: #222222;
    --light_gray: #222222ad;

  }

  html, body {
    background-color: var(--background);
    color: var(--white);
  }

  body::-webkit-scrollbar {
    width: 1em;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  body, button, textarea, input {
    font: 400 1rem 'Inter', sans-serif ;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export const Container = styled.div`
  z-index: 1;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;
  padding: 50px 50px;

  @media screen and (max-width: 991px) {
    padding: 30px 20px;
  }
`;

export const ALink = styled.a`
  background: var(--white);
  color: var(--black);

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default GlobalStyle