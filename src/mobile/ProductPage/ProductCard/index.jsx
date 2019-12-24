import React from 'react';
import { string, number, bool } from 'prop-types';

import Heart from 'assets/Heart';
import Bookmark from 'assets/Bookmark';

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
  OldPrice,
  More,
  MoreDot,
  Sale
} from './styled';

const ProductCard = ({
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
    {oldPrice && <Sale>-{parseInt(100 - newPrice / oldPrice * 100)}%</Sale>}
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
          <Heart width={16} height={14} isLiked={isLiked} /> <LikesCount>{likesCount}</LikesCount>
        </Likes>

        <More>
          <MoreDot/>
          <MoreDot/>
          <MoreDot/>
        </More>
      </Tools>
    </CardFooter>
  </Card>
);

ProductCard.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  isLiked: bool.isRequired,
  isWished: bool.isRequired,
  newPrice: number.isRequired,
  oldPrice: number,
  likesCount: number.isRequired
};

export default ProductCard;
