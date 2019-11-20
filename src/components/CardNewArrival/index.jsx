import React from 'react';
import { string, number, bool } from 'prop-types';
import Heart from '../../assets/Heart';
import { FlexContainer } from '../../globalStyles';
import {
  CardFooter,
  Image,
  Card,
  Likes,
  LikesCount,
  Title,
  Shipping,
  Price,
  OldPrice
} from './styled';
import Bookmark from '../../assets/Bookmark';

const CardNewArrival = ({
  title,
  imgSrc,
  isLiked,
  isWished,
  newPrice,
  oldPrice,
  likesCount
}) => (
  <Card>
    <Image src={imgSrc} alt="product" />
    <CardFooter>
      <FlexContainer width="100%">
        <Price>
          ${newPrice}
          {oldPrice && <OldPrice>{oldPrice}$</OldPrice>}
        </Price>
        <Shipping>Free Shipping</Shipping>
      </FlexContainer>
      <Title>{title}</Title>
      <FlexContainer alignItems="center" width="100%">
        <Likes>
          <Heart isLiked={isLiked} /> <LikesCount>{likesCount}</LikesCount>
        </Likes>
        <Bookmark isWished={isWished} />
      </FlexContainer>
    </CardFooter>
  </Card>
);

CardNewArrival.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  isLiked: bool.isRequired,
  isWished: bool.isRequired,
  newPrice: number.isRequired,
  oldPrice: number.isRequired,
  likesCount: number.isRequired
};

export default CardNewArrival;
