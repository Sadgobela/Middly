import React from 'react';
import {string, number, array, func} from 'prop-types';

import Icon from 'components/Icon'

import Variations from '../Variations';

import {
  Wrapper,
  Name,
  SubName,
  Rating,
  Reviews,
  PriceBlock,
  Price,
  OldPrice,
  Sale,
  Coins,
  Delivery,
  DeliveryLabel,
  DeliveryDate,
  Divider,
  Buttons,
  Button
} from './styled';

const Info = ({
  subName,
  name,
  rating,
  reviews,
  price,
  newPrice,
  coins,
  colors,
  sizes,
  color,
  size,
  setColor,
  setSize
}) => {
  return <Wrapper>
    {name && <Name dangerouslySetInnerHTML={{ __html: name }}/>}
    {subName && <SubName dangerouslySetInnerHTML={{ __html: subName }}/>}

    <Rating>
      <Icon type="star" svgStyle={{width: 14, height: 14, fill: rating >= 1 ? '#FFC131' : '#ccc'}}/>
      <Icon type="star" svgStyle={{width: 14, height: 14, fill: rating >= 2 ? '#FFC131' : '#ccc'}}/>
      <Icon type="star" svgStyle={{width: 14, height: 14, fill: rating >= 3 ? '#FFC131' : '#ccc'}}/>
      <Icon type="star" svgStyle={{width: 14, height: 14, fill: rating >= 4 ? '#FFC131' : '#ccc'}}/>
      <Icon type="star" svgStyle={{width: 14, height: 14, fill: rating >= 5 ? '#FFC131' : '#ccc'}}/>

      <Reviews>({reviews})</Reviews>
    </Rating>

    <PriceBlock>
      <Price>{newPrice ? `$${newPrice}` : `$${price}`}</Price>
      {newPrice ? <OldPrice>${price}</OldPrice> : null}
      {newPrice ? <Sale>-{100 - (newPrice / price * 100)}% off</Sale> : null}

      {coins ? <Coins>Mid Coins: <span>+{coins}</span> <Icon type="coins"/></Coins> : null}
    </PriceBlock>

    <Delivery>
      <DeliveryLabel>Deliver to</DeliveryLabel> <strong>Dubai</strong>
      <Divider/>
      <span><strong>Free</strong> delivery by <DeliveryDate>Sat, Nov 23</DeliveryDate></span>
    </Delivery>

    <Variations
      colors={colors}
      sizes={sizes}
      color={color}
      size={size}
      setColor={setColor}
      setSize={setSize}
    />

    <Buttons>
      <Button>Add to Cart</Button>
      <Button type="primary">Buy Now</Button>
    </Buttons>
  </Wrapper>
};

Info.defaultProps = {
  name: null,
  subName: null,
  rating: 0,
  reviews: 0,
  price: null,
  newPrice: null,
  coins: null,
  colors: [],
  sizes: [],
  color: null,
  size: null,
  setColor: () => {},
  setSize: () => {}
};

Info.propTypes = {
  name: string,
  subName: string,
  rating: number,
  reviews: number,
  price: number,
  newPrice: number,
  coins: number,
  colors: array,
  sizes: array,
  color: string,
  size: string,
  setColor: func,
  setSize: func
};

export default Info;