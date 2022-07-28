import React from 'react';
import {CardsContainer, WrapperElements} from './productsCards.elements.jsx';
import CardStructure from './cardStructure.jsx';

function ProductsCards (props){
  return (
    <CardsContainer>
      <WrapperElements id={"desserts"}>
        <CardStructure 
          image="image_card_1.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="delicious strawberry cake with vanilla cream and a sweet glaze on top, ideal for any situation."
        />
        <CardStructure 
          image="image_card_2.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="asdfasdfasf adsfasdfadsf asdfads cream and a sweet glaze on top, ideal for any situation."
        />
        <CardStructure 
          image="image_card_3.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="delicious strawberry cake with vanilla cream and a sweet glaze on top, ideal for any situation."
        />
      </WrapperElements>
      <WrapperElements id={"breads"}>
        <CardStructure 
          image="card_bread_1.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="delicious strawberry cake with vanilla cream and a sweet glaze on top, ideal for any situation."
        />
        <CardStructure 
          image="card_bread_2.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="delicious strawberry cake with vanilla cream and a sweet glaze on top, ideal for any situation."
        />
        <CardStructure 
          image="card_bread_3.jpg"
          cardTitle="Strawberry Cake"
          cardDescription="delicious strawberry cake with vanilla cream and a sweet glaze on top, ideal for any situation."
        />
      </WrapperElements>
    </CardsContainer>
  );
}

export default ProductsCards;
