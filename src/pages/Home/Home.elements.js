import styled from 'styled-components'

export const NegativeTop = styled.div`
  margin-top: -7rem;
`;

export const Loading = styled.div`
  /* width: 100%;
  max-width: 100%; */
  z-index: 99;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--black);

  img {
    width: 50%;
  }
`;
