import styled from 'styled-components'

export const ListContainer = styled.section`
  margin: 2rem 0 2rem 0;
  
  h2 {
    padding: 0 0 0 1rem;
    margin: 0 0 .5rem 0;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;



  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const ListItems = styled.div`
  display: flex;

  height: 375px;
  min-height: 375px;
  max-height: 375px;

  padding: 0 30px;

  transition: all .5s ease;
  
`;

export const ListItem = styled.div`
  display: flex;

  min-width: 250px;
  max-width: 250px;

  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;

    transform: scale(0.90);
    transition: all .2s ease;

    &:hover {
      transform: scale(1);
    }
  }

`;

export const Navigation = styled.div`

  position: absolute;

  width: 40px;
  height: 375px;

  background: var(--trans_black);

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  opacity: 0;

  transition: all .2s ease;

  svg {
    font-size: 3rem;
  }

  @media (max-width: 980px) {
    opacity: 1;
  }

`;

export const NavBefore = styled(Navigation)`
  left: 0;
`;

export const NavNext = styled(Navigation)`
  right: 0;
`;