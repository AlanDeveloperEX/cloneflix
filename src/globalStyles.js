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

    --trans_black: #0009;
    --black: #000;

    --white: #fff;
    --green: #46d369;
    --yellow: #f9c13d;

    --light_red: #de0912;
    --red: #ab060f;

    --light_gray: #222222ad;
    --gray: #b6b6b6;
    --dark_gray: #222222;

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

  margin: 0 auto;
  padding: 50px 50px;

  @media screen and (max-width: 991px) {
    padding: 30px 20px;
  }
`;

export const ALink = styled.a`
  background: ${({normal}) => (normal ? 'var(--white)' : 'var(--dark_gray)')};
  color: ${({normal}) => (normal ? 'var(--black)' : 'var(--white)')};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.1rem;
  font-family: 600;

  padding: .9rem 2rem;

  border-radius: 4px;

  transition: all .2s ease;

  opacity: 1;

  &:hover {
    opacity: .7;
  }

  svg {
    margin-right: .5rem;
  }
`;

export default GlobalStyle