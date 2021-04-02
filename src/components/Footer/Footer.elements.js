import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 2rem 1rem;

  background: var(--black);

  svg {
    color: var(--red);
    font-size: 1.5rem;
    margin: .2rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: .2rem;
  }
`;