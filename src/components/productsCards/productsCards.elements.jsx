import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const WrapperElements = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 25px;

  @media screen and (max-width: 1154px){
    display: flex;
    width: 80%;
    flex-direction: column;
    margin: 0px 0px;

    @media screen and (max-width: 782px){
      width: 100%;
    }
`;

export const Title = styled.div`
  width: 100%;
  border-radius: 15px;
  border-top: 2px solid #FF891F;
  border-bottom: 2px solid #FF891F;
  margin: 75px 0px 15px 0px;
  //margin-bottom: 15px;

  h2{
    font-size: 45px;
    font-family: 'Edu Tas Beginner';
    text-align: center;
  }
`;

