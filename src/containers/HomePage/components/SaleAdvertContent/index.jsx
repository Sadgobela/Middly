import React from 'react';
import {
  BuyButton, Description, Title, Wrapper,
} from './styled';

const SaleAdvertContent = () => (
  <Wrapper>
    <Title>Sale 30% OFF</Title>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam.
    </Description>
    <BuyButton>Buy now</BuyButton>
  </Wrapper>
);

export default SaleAdvertContent;
