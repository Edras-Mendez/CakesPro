import styled from 'styled-components';
import myImage from '../../imgs/fixed_slider-background.jpg';

export const SliderContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

`;

export const InfoSlider = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 900px){
    flex-direction: column;
    justify-content: center;
  }
`;

export const Image = styled.div`
  background: url(${myImage});
  //background-color: rgba(0,0,0,0.5);
  //background-blend-mode: soft-light;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  //Object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 84%);
  //z-index: 0;

  @media screen and (max-width: 900px){
    clip-path: none;
`;

export const Logo = styled.div`
  display: flex;
  font-size: 5.5em; 
  margin-left: 0.7em;
  
  p{
    &:nth-child(2){
      color: #FF891F;
      font-weight: bold;
    }
    &:nth-child(3){
      color: #fff;
      font-weight: bold;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #000;
    }

  }

  svg{
    stroke: #000;
    stroke-width: 0.1px;
    //stroke-dasharray: 2,2;
    //stroke-linejoin: round;
  }

  @media screen and (max-width: 1034px){
    font-size: 4.5em;

    @media screen and (max-width: 948px){
      font-size: 4.0em;

      @media screen and (max-width: 900px){
        margin-left: 0px;
        margin-bottom: 15px;

        @media screen and (max-width: 382px){
          font-size: 3.5em;
        }
    }
  }

`;
export const DescriptionSlider = styled.div`
  background-color: rgba(0,0,0,0.7);
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 230px;
  padding: 0.5em;
  color: #fff;
  font-family: 'Edu Tas Beginner';
  border-radius: 15px;
  border: 5px double #fff;

  h2{
    font-size: 30px;
    margin-bottom: 10px;
  }

  p{
    text-align: justify;
    font-size: 28px;
  }

  @media screen and (max-width: 1034px){
    width: 300px;
    margin-right: 0px;

    h2{
      font-size: 30px;
      margin-bottom: 10px;
    }

    p{
      text-align: justify;
      font-size: 28px;
    }
  }
`;
