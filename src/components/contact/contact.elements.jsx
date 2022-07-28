import styled from 'styled-components';

export const ContactContainer = styled.div`
  //background-color: rgba(255,255,255,0.8);
  background-color: rgba(0,0,0,0.8);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const ExitContainer = styled.div`
  position: absolute;
  top: 0; 
  display: flex;
  justify-content: flex-end;
  width: 100%;
  
  svg{
    fill: #fff;
    margin: 10px;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const ContactWrapper = styled.div`
  background-color: #191919;
  position: relative;
  width: 850px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 10px solid #FF891F;
  border-bottom: 10px solid #FF891F;

  @media screen and (max-width: 750px){
    width: 500px;
    height: 500px;
    flex-direction: column;
  }
`;
export const ContactImage = styled.img`
  margin-left: 5px; 
  width: 45%;
  height: 90%;
  //object-fit: contain;
  
  @media screen and (max-width: 750px){
    width: 100%;
    height: 40%;
    object-fit: contain;
  }
`;
export const FormContainer = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactForm = styled.form`
  width: 90%;
  height: 80%;
  //border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label{
    font-size: 15px;
    font-family: Roboto, sans-serif;
    color: #fff;
    font-weight: bold;
  }

  input[type="email"]{
    width: 100%;
    background-color: #000;
    padding: 10px;
    border: 0px;
    outline: none;
    border-bottom: 1px solid #FF891F;
    border-radius: 10px;
    font-family: Roboto, sans-serif;
    transition: all 0.7s;
    color: #fff;
  }
  textarea{
    background-color: #000;
    resize: vertical;
    min-width: 100%;
    min-height: 145px;
    overflow: hidden;
    border: 0px;
    border-radius: 10px;
    padding: 7px;
    color: #fff;
    outline: none;
    border-bottom: 1px solid #FF891F;
    font-family: Roboto, sans-serif;
    transition: all 0.7s;
  }

  textarea:focus, input[type="email"]:focus{
    background-color: #fff;
    border: 2px solid #FF891F;
    color: #000;
  }

  @media screen and (max-width: 750px){
    height: 70%;

    textarea{
      min-height: 100px;
    }
`;
export const ButtomContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 7px;
  position: relative;

  input[type="submit"]{
    position: absolute;
    padding: 10px 35px;
    background-color: #000;
    border: 1.5px solid #fff;
    color: #fff;
    border-radius: 10px;

    &:hover{
      background-color: #fff;
      border: 1.5px solid #000;
      color: #000;
    }

    &:active{
      padding: 7px 30px;
    }
  }

  @media screen and (max-width: 750px){
    margin: 5px;
  }

`;
