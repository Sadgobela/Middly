import React from 'react';
import { string, number } from 'prop-types';
import { FlexContainer } from '../../globalStyles';
import { CardFooter, Image, Card, Title, Price, Views, Sale } from './styled';

const CardWithSale = ({ title, imgSrc, countOfViews, price, sale }) => (
  <Card>
    <Sale>{sale}%</Sale>
    <Image src={imgSrc} alt="product" />
    <CardFooter>
      <FlexContainer width="100%">
        <Title>{title}</Title>
        <Price>{price}$</Price>
      </FlexContainer>
      <Views>{countOfViews} views</Views>
    </CardFooter>
  </Card>
);

CardWithSale.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  countOfViews: number.isRequired,
  price: number.isRequired,
  sale: number.isRequired
};

export default CardWithSale;
