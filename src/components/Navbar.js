import React from 'react';
import { useState } from 'react';
import HeadLogo from './HeadLogo';
import useWindowSize from '@rehooks/window-size';
import TransitionLink from 'gatsby-plugin-transition-link';
import NavbarBrand from './styles/NavbarBrand';
import NavLinks from './styles/NavLinks';
import HamburgerMenu from './HamburgerMenu';
import isEntryExit from './isEntryExit';
import InnerDrop from './InnerDrop';

export default function Navbar() {
  const [isToggledOn, setToggle] = useState(false);
  const toggle = () => setToggle(!isToggledOn);
  let windowSize = useWindowSize();

  return (
    <nav onClick={toggle}>
      <NavbarBrand>
        <TransitionLink {...isEntryExit} to="/" className="navbar-item">
          <HeadLogo alt="Eat Play Love Logo" />
        </TransitionLink>
        <HamburgerMenu />
      </NavbarBrand>
      <NavLinks
        className={
          (isToggledOn && windowSize.innerWidth < 800) ||
          windowSize.innerWidth > 800
            ? 'toggle-open'
            : 'toggle-closed'
        }
      >
        <TransitionLink {...isEntryExit} to="/">
          <div>HOME</div>
        </TransitionLink>
        <InnerDrop />
        <TransitionLink {...isEntryExit} to="/retreats">
          <div> RETREATS</div>
        </TransitionLink>
        <TransitionLink {...isEntryExit} to="/about">
          <div>ABOUT US</div>
        </TransitionLink>
        <TransitionLink {...isEntryExit} to="/contact">
          <div>CONTACT</div>
        </TransitionLink>
      </NavLinks>
    </nav>
  );
}
