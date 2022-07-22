import styled from 'styled-components';

export const ContainerServices = styled.div`
  width: 100%;
  height: 230px;
  margin: 70px 0; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;

  @media screen and (max-width: 782px){
    height: auto;
    margin-bottom: 70px;
  }
`;

export const Wrapper = styled.div`
  background-color: #191919;
  border-radius: 20px;
  border-bottom: 10px solid #FF891F;
  border-top: 10px solid #FF891F;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%; 
  height: 100%;
  padding: 15px;

  h2{
    width: 80%;
    font-size: 30px;
    color: #fff;
    margin-bottom: 15px;
    border-bottom: 2px solid #ccc;
  }

  p{
    font-size: 22px;
    width: 80%;
    color: #fff;
  }

  @media screen and (max-width: 782px){
    width: 100%;
    border-radius: 0;
    height: auto;

    p{
      text-align: justify;
    }
  }
  
`;
