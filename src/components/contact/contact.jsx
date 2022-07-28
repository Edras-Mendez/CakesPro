import React from 'react';
import { ContactContainer, 
  ExitContainer,
  ContactWrapper,
  ContactImage,
  FormContainer,
  ContactForm, 
  ButtomContainer } from './contact.elements.jsx';
import imageSVG from '../../imgs/contactImage.svg';
import { ImCancelCircle } from "react-icons/im";

function Contact ({ showContact, setShowContact }){


  return (
  <>
    { showContact && 
    <ContactContainer >
      <ContactWrapper>
      <ExitContainer>
        <ImCancelCircle onClick={() => setShowContact(false)}/>
      </ExitContainer>
        <ContactImage alt={"contact_Image"} src={imageSVG} />
        <FormContainer>
          <ContactForm>
            <label htmlFor="mail">E-mail: </label>
            <input id="mail" type="email" name="e-mail" placeholder='Enter your E-mail here' />
            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" placeholder='Enter your message here'></textarea>
            <ButtomContainer>
              <input type="submit" value="send" />
            </ButtomContainer>
          </ContactForm>
        </FormContainer>
      </ContactWrapper>
    </ContactContainer>
    }
  </>
  );
}

export default Contact;
