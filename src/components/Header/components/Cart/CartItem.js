import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
  Item,
  ItemContent,
  ItemPrice,
  ItemQuantity,
  ItemQuantityLabel,
  ItemThumb,
  ItemTitle,
  ItemQuantityField,
  ItemQuantityMinus,
  ItemQuantityPlus
} from './styled';

const CartItem = ({item}) => {
  const [quantity, setQuantity] = useState(item.quantity || 0);

  return (
    <Item>
      <ItemThumb src={item.thumb} />
      <ItemContent>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>${item.price}</ItemPrice>
        <ItemQuantity>
          <ItemQuantityLabel>Quantity: </ItemQuantityLabel>

          <ItemQuantityMinus onClick={() => setQuantity(quantity - 1)}>–</ItemQuantityMinus>
          <ItemQuantityField value={quantity} />
          <ItemQuantityPlus onClick={() => setQuantity(quantity + 1)}>+</ItemQuantityPlus>
        </ItemQuantity>
      </ItemContent>
    </Item>
  );
};

CartItem.defaultProps = {
  item: null
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;
