import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { SiNetflix } from 'react-icons/si';
import { GiSharpSmile } from 'react-icons/gi';
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
  background-image: ${({sticky}) => (sticky ? 'linear-gradient(var(--black), var(--black))' : 'linear-gradient(var(--black) 32%, transparent)')};
  height: 90px;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({sticky}) => (sticky ? '1rem' : '1.2rem')};

  position: fixed;
  top: 0;
  z-index: 999;

  transition: background-image .2s ease;

  @media screen and (max-width: 991px) {
    height: 91px;
    background-image: linear-gradient(var(--black) 32%, var(--black));
    font-size: 1rem;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: ${({sticky}) => (sticky ? 'center' : 'flex-end')};

  padding: 0 .5rem;
  
  height: 90px;

  transition: all .2s ease;

  @media screen and (max-width: 991px) {
    align-items: center;
    padding: 0 1rem;

  }

  @media screen and (max-width: 600px) {
    padding: 1.5rem;
  }

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  color: var(--white);
  font-size: 2rem;

  cursor: pointer;
`;

export const NavIcon = styled(SiNetflix)`
  font-size: 3.5rem;
  color: var(--red);
`;

export const NavProfile = styled(GiSharpSmile)`
  font-size: 3.5rem;

  color: var(--red);
  background-color: #fff;

  padding: .5rem;
  border-radius: 2px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 991px) {
    display: flex;

    transition: all .2s ease;

    font-size: 1.9rem;
    color: var(--white);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  list-style: none;
  text-align: center;

  border-top: 3px solid transparent;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;

    width: 100%;
    height: calc(100vh - 90px);
    background: var(--black);

    position: absolute;
    top: 90px;
    left: ${({click}) => (click ? 0 : '-100%')};

    opacity: 1;
    border: none;
    transition: all .2s ease;
  }
`;

export const NavItem = styled.li`

  border-bottom: 2px solid transparent;

  transition: all .2s ease;

  @media screen and (max-width: 991px) {
   width: 100%;
   border: none;


   &:hover {
     border: none;
   }
  }

`;

export const NavLinks = styled(Link)`
  color: var(--white);

  display: flex;
  align-items: center;

  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;

  padding: .5rem 1.6rem;
  height: 100%;

  @media screen and (max-width: 991px) {
    text-align: center;
    
    padding: 2rem;
    width: 100%;

    display: table;

  }
`;