import styled from 'styled-components';

export const ListContainer = styled.section`
  margin: 2rem 0;
  padding: 0 0 0 1rem;

  h2 {
    margin: 0 0 .5rem 0;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
`;

export const ListItems = styled.div`
  display: flex;
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