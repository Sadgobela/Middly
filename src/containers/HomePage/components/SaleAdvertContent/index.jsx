import React from 'react';
import {
  BuyButton, Description, Title, Wrapper,
} from './styled';

const SaleAdvertContent = () => (
  <Wrapper>
    <Title>Sale 30% OFF</Title>
    <Description>
      Our marketplace makes it easy to buy directly the most important things in one place!
    </Description>
    <BuyButton>Buy now</BuyButton>
  </Wrapper>
);

export default SaleAdvertContent;
