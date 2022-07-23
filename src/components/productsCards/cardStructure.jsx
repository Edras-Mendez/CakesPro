import React from 'react';
import { Container, 
  ImageWrapper,
  Image, 
  CardsDescription } from './cards.elements.jsx';

function CardStructure (props){
  return (
    <Container>
      <ImageWrapper>
        <Image alt={'ProductImage'} src={require(`../../imgs/${props.image}`)}/>
      </ImageWrapper>
        <CardsDescription>
          <h3>{props.cardTitle}</h3>
          <p>{props.cardDescription}</p>
        </CardsDescription>
    </Container>
  );
}

export default CardStructure;
