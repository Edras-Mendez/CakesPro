import React from 'react';
import { FooterContainer, 
  FooterWrapper, 
  Content,
  RightsReserved} from './footer.element.jsx';
import { LogoContainer } from '../navbar/navbar.elementes.jsx';
import { SiCodechef } from "react-icons/si";
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Footer (){
  return (
    <FooterContainer>
      <FooterWrapper>
        <Content>
          <BrowserRouter>
          <ul>
            <li><Link to="#home">Home</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="#desserts">Desserts</Link></li>
            <li><Link to="#breads">Bread</Link></li>
            <li><Link to="#about-us">About Us</Link></li>
          </ul>
          </BrowserRouter>
        </Content>
        <Content>
        <LogoContainer>
          <SiCodechef size="1.5em" />
          <p>Cakes</p>
          <p>Pro</p>
        </LogoContainer>
        </Content>
      </FooterWrapper>
        <RightsReserved>
          <p>&copy; All rights reserved</p>
        </RightsReserved>
    </FooterContainer>
  );
}

export default Footer;
