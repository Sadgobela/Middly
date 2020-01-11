import React from 'react';
import { useWindowSize } from "@reach/window-size";
import { string, number, bool } from 'prop-types';
import Heart from '../../assets/Heart';
import {
  CardFooter,
  ImageContainer,
  Image,
  Card,
  Likes,
  Title,
  Shipping,
  Price,
  Tools,
  Info,
  OldPrice,
  Sale,
  Actions
} from './styled';
import Bookmark from '../../assets/Bookmark';

const CardNewArrival = ({
  title,
  imgSrc,
  isLiked,
  isWished,
  newPrice,
  oldPrice,
  inline
}) => {
  const { width } = useWindowSize();
  const isMobile = width <= 767;

  let sale = null;

  if(oldPrice && newPrice) sale = parseInt(newPrice / oldPrice * 100);

  return (
    <Card inline={inline}>
      <ImageContainer inline={inline}>
        <Image src={imgSrc} alt="product" inline={inline} />
        {sale && !inline ? <Sale>-{sale}%</Sale> : null}

        {
          !inline && isMobile &&
            <Likes>
              <Heart isLiked={isLiked} />
            </Likes>
        }
      </ImageContainer>
      <CardFooter inline={inline}>
        <Info inline={inline}>
          <Price inline={inline}>
            ${newPrice ? newPrice.toFixed(2) : 0}
            {oldPrice && <OldPrice inline={inline}>${oldPrice.toFixed(2)}</OldPrice>}
          </Price>
          <Shipping inline={inline}>Free Shipping</Shipping>
        </Info>
        <Title inline={inline}>{title}</Title>

        {
          isMobile
            ? <>
              {
                inline &&
                <Likes inline={inline}>
                  <Heart isLiked={isLiked}/>
                </Likes>
              }
              <Actions inline={inline}>
                <span/>
                <span/>
                <span/>
              </Actions>
            </>
            :
            <Tools inline={inline}>
              <Likes>
                <Heart isLiked={isLiked}/>
              </Likes>
              <Bookmark isWished={isWished}/>
            </Tools>
        }
      </CardFooter>
    </Card>
  )
};

CardNewArrival.propTypes = {
  title: string.isRequired,
  imgSrc: string.isRequired,
  isLiked: bool.isRequired,
  isWished: bool.isRequired,
  newPrice: number,
  oldPrice: number,
  inline: bool
};

CardNewArrival.defaultProps = {
  newPrice: null,
  oldPrice: null,
  inline: false
};

export default CardNewArrival;
