import React from 'react';
import { FooterContainer, 
  FooterWrapper, 
  Content,
  RightsReserved} from './footer.element.jsx';
import { LogoContainer } from '../navbar/navbar.elementes.jsx';
import { SiCodechef } from "react-icons/si";

function Footer (){
  return (
    <FooterContainer>
      <FooterWrapper>
        <Content>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Bread</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </Content>
        <Content>
          <ul>
            <li><a href="#">Contact</a></li>
          </ul>
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
