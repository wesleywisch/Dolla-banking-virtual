import React, { useEffect, useState } from "react";

import { animateScroll as scroll } from 'react-scroll';

import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './styles';

export function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  function changeNav() {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  function toggleHome() {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClass="active"
              >
                Discover
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
                activeClass="active"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              to="/signin"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
              offset={-80}
              activeClass="active"
            >
              Sign In
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}