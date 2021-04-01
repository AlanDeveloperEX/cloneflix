import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavProfile } from './Navbar.elements';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [sticky , setSticky] = useState(false);

  const handleStick = () => {
    let scroll = window.scrollY
    if (scroll >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  window.addEventListener('scroll', handleStick);

  return (
    <>
      <Nav sticky = { sticky } >
        <NavbarContainer sticky = { sticky }>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>

          <MobileIcon onClick={handleClick} >
            {click ? <FaTimes/> : <FaBars/> }
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click} >
            <NavItem >
              <NavLinks to='/' >
                <NavProfile/>
              </NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
