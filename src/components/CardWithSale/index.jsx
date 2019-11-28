import React from 'react';
import { string, number } from 'prop-types';
import { CardFooter, CardFooterArea, Image, Card, Title, Price, Views, Sale, Free, CardInline, ImageInline, CardFooterInline } from './styled';

const CardWithSale = ({ title, imgSrc, countOfViews, price, sale, inline }) => (
  <Card>
    <Sale>{sale}%</Sale>
    <Image src={imgSrc} alt="product"/>
    <CardFooter>
      <CardFooterArea>
        <Title>{title}</Title>
        <Price>{price}$</Price>
      </CardFooterArea>
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
