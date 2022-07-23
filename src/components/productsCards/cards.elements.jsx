import styled from 'styled-components';

export const Container = styled.div`
  background-color: #191919;
  width: 300px;
  height: 400px;
  //padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  border-bottom: 10px solid #FF891F;
  border-radius: 15px;

  @media screen and (max-width: 1154px){
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20.2em;
    margin-bottom: 25px;

    @media screen and (max-width: 782px){
      border-radius: 0px;
    }

  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 50%;

  @media screen and (max-width: 1154px){
    //width: 400px;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 15px; 
  height: 200px;

  @media screen and (max-width: 1154px){
    height: 100%;

    @media screen and (max-width: 782px){
      border-radius: 0px;
      margin-left: 3px;
    }
  }
`;

export const CardsDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  hieght: 200px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  h3{
    color: #fff;
    font-family: 'Edu Tas Beginner';
    font-size: 22px;
  }
  p{
    font-size: 18px;
    color: #fff;
    text-align: justify;
    padding: 10px;
  }


  @media screen and (max-width: 1154px){
    width: 100%;
    height: 100px;

    h3{
      width: 90%;
    }
    p{
      width: 90%;
    }
  }
`;
