import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #191919;
  width: 100%;
  height: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top: 10px solid #FF891F;
  margin-bottom: 0px;
`;
export const FooterWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //flex-wrap: wrap;

  @media screen and (max-width: 630px){
    flex-wrap: wrap;
  }
`;
export const Content = styled.div`

  ul{
    list-style: none;
  }
  li{
    margin: 10px;
  }

  @media screen and (max-width: 630px){
    ul{
      display: flex;
      flex-wrap: wrap;
    }
    li{
    margin: 3px;
    }
  }
`;

export const RightsReserved = styled.div`
  background-color: #494949;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  p{
    color: #fff;
  }
`;
