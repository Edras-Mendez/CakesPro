import React, { useState } from 'react';
import { Container,
  Wrapper,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon} from './navbar.elementes.jsx';
import { SiCodechef } from "react-icons/si";
import { FaHome, FaUsers, FaBars } from "react-icons/fa";
import { RiCake3Fill, RiContactsFill } from "react-icons/ri";
import { GiSlicedBread, GiCookingGlove} from "react-icons/gi";
import { IconContext } from "react-icons";
import Contact from '../contact/contact.jsx';

function Navbar () {

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const pressContact = () => {
    setShowContact(!showContact);
  }

  return(
    <>
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
              <MenuItemLink>
                <FaHome />
                Home
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <GiCookingGlove />
                Services
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <RiCake3Fill />
                Desserts
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink>
                <GiSlicedBread />
                Bread
              </MenuItemLink>
            </MenuItem>

            <MenuItem>
              <MenuItemLink >
                <FaUsers />
                About-us
              </MenuItemLink>
            </MenuItem>

            <MenuItem onClick={pressContact}>
              <MenuItemLink >
                <RiContactsFill />
                Contact
              </MenuItemLink>
            </MenuItem>

          </Menu>
          </IconContext.Provider>
        </Wrapper>
      </Container>
      <Contact 
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </>
  );
}

export default Navbar;
