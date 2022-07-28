import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  z-index: 100;


  @media screen and (max-width: 1110px){
    background-color: #000;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: Roboto, sans-serif;

  p{
    &:nth-child(2){
      color: #FF891F;
      font-weight: bold;
    }
    &:nth-child(3){
      color: #fff;
      font-weight: bold;
    }
  }

  svg{
    fill: #fff;
  }

`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 1110px){
    background-color: #000;
    position: absolute; 
    top: 70px;
    left: ${({open})=> open ? "0" : "-100%"}; 
    width: 80%; 
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s all ease; 
  }
`;

export const MenuItem = styled.li`
  height: 90%;

  @media screen and (max-width: 1110px){
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const linkStyle = `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0.5rem 1.3rem;
  font-size: 1.1rem;
  transition: 0.5s all ease;
  cursor: pointer;

  &:hover{
    color: black;
    background-color: #FF891F;
    transition: 0.5s all ease;
    border-radius: 15px;
  }


  @media screen and (max-width: 1110px){
    width: 100%;

    &:hover{
      border-radius: 0px;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1110px){
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-right: 1.2em;
  }

  svg{
    fill: #FF891F;
  }
`;
