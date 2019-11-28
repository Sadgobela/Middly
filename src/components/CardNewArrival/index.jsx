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
  Tools,
  Info,
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
  likesCount,
  inline
}) => (
  <Card inline={inline}>
    <Image src={imgSrc} alt="product" inline={inline} />
    <CardFooter inline={inline}>
      <Info inline={inline}>
        <Price inline={inline}>
          ${newPrice}
          {oldPrice && <OldPrice>{oldPrice}$</OldPrice>}
        </Price>
        <Shipping inline={inline}>Free Shipping</Shipping>
      </Info>
      <Title inline={inline}>{title}</Title>
      <Tools inline={inline}>
        <Likes>
          <Heart isLiked={isLiked} /> <LikesCount>{likesCount}</LikesCount>
        </Likes>
        <Bookmark isWished={isWished} />
      </Tools>
    </CardFooter>
  </Card>
);

CardNewArrival.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  isLiked: bool.isRequired,
  isWished: bool.isRequired,
  newPrice: number.isRequired,
  oldPrice: number,
  likesCount: number.isRequired
};

export default CardNewArrival;
