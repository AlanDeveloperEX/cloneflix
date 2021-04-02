import styled from 'styled-components';

export const FeaturedtContainer = styled.section`
  
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 3rem;
    font-weight: 600;

    margin: 0 0 1rem 0;
  }

`;

export const FeaturedDegradeVertical = styled.div`

  width: inherit;
  height: inherit;
  background: linear-gradient(to top, var(--background) 5%, transparent 95%);

`;

export const FeaturedDegradeHorizontal = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem 0 1rem;

  width: inherit;
  height: inherit;
  background: linear-gradient(to right, var(--background) 30%, transparent 70%);

  @media (max-width: 980px) {

    background: linear-gradient(to right, var(--background) 35%, transparent 85%);

  }

  @media (max-width: 600px) {

    background: linear-gradient(to right, var(--background) 35%, transparent 100%);

  }

`;

export const FeaturedInfo = styled.div`

  display: flex;

  div {
    margin: 0 1rem 0 0;
    
    font-size: 1.5rem;
    font-weight: 600;
  }

  div:first-child {
    color: var(--green);
  }

`;

export const FeaturedDescription = styled.div`

  margin: 1.2rem 0;
  color: var(--gray);
  max-width: 40%;

  @media (max-width: 980px) {
    max-width: 60%;
  }

  @media (max-width: 600px) {
    max-width: 80%;
  }

`;

export const FeaturedButtons = styled.div`

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 1rem;

  a {
    margin-right: 1rem;
    font-weight: 600;
  }

`;

export const FeaturedGens = styled.div`



`;