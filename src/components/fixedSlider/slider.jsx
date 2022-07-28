import { 
  SliderContainer, 
  Image, 
  InfoSlider,
  Logo, 
  DescriptionSlider } from './Slider.elements.jsx'
import { SiCodechef } from "react-icons/si";
import { IconContext } from "react-icons";

function Slider (){
  return (
    <SliderContainer id={"home"}>
      <Image>
      
      <InfoSlider>
          <Logo>
            <IconContext.Provider value={{style: {color: "#fff" }}}>
            <SiCodechef size="1.5em"/>
            <p>Cakes</p>
            <p>Pro</p>
            </IconContext.Provider>
          </Logo>

        <DescriptionSlider>
          <h2>Hello!!</h2>
          <p>
            Welcome to CakesPro where you find bakary and pastry delights.
          </p>
        </DescriptionSlider>
      </InfoSlider>
      </Image>
    </SliderContainer>
  );
}

export default Slider; 
