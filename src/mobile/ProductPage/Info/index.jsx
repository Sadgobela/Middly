import React from 'react';
import {string, number, array, func, bool} from 'prop-types';

import Icon from 'components/Icon'

import Variations from '../Variations';
import Buttons from '../Buttons';
import Popup from './popup';

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
  Divider
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
  setSize,
  showVariationsPopup,
  setShowVariationsPopup,
  showMessage,
  setShowMessage
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
      setShowVariationsPopup={setShowVariationsPopup}
    />

    <Buttons
      setShowMessage={setShowMessage}
    />

    <Popup
      colors={colors}
      sizes={sizes}
      color={color}
      size={size}
      setColor={setColor}
      setSize={setSize}
      showVariationsPopup={showVariationsPopup}
      setShowVariationsPopup={setShowVariationsPopup}
      setShowMessage={setShowMessage}
    />
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
  showVariationsPopup: false,
  setColor: () => {},
  setSize: () => {},
  setShowVariationsPopup: () => {}
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
  showVariationsPopup: bool,
  setColor: func,
  setSize: func,
  setShowVariationsPopup: func
};

export default Info;