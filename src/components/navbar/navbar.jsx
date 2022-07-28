import React, { useState } from 'react';
import { Container,
  Wrapper,
  LogoContainer,
  Menu,
  MenuItem,
  linkStyle,
  MobileIcon} from './navbar.elementes.jsx';
import { SiCodechef } from "react-icons/si";
import { FaHome, FaUsers, FaBars } from "react-icons/fa";
import { RiCake3Fill, RiContactsFill } from "react-icons/ri";
import { GiSlicedBread, GiCookingGlove} from "react-icons/gi";
import { IconContext } from "react-icons";
import Contact from '../contact/contact.jsx';
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

function Navbar () {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const pressContact = () => {
    setShowContact(!showContact);
  }

  return(
    <>
    <BrowserRouter>
      <Container>
        <Wrapper>
          <IconContext.Provider value={{style: {fontSize: "1.2em", marginRight: "0.2em"}}}>
          <LogoContainer>
            <SiCodechef size="1.5em" />
            <p>Cakes</p>
            <p>Pro</p>
          </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaBars size="1.5em" />
          </MobileIcon>

          <Menu open={showMobileMenu}>

            <MenuItem>
              <Link to="#home" style={linkStyle}>
                <FaHome />
                Home
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="#services">
                <GiCookingGlove />
                Services
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="#desserts">
                <RiCake3Fill />
                Desserts
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="#breads">
                <GiSlicedBread />
                Bread
              </Link>
            </MenuItem>

            <MenuItem>
              <Link to="#about-us">
                <FaUsers />
                About-us
              </Link>
            </MenuItem>

            <MenuItem onClick={pressContact}>
              <Link to="">
                <RiContactsFill />
                Contact
              </Link>
            </MenuItem>

          </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
      <Contact 
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </BrowserRouter>
    </>
  );
}

export default Navbar;
