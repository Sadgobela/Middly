import React from 'react';
import Div100vh from 'react-div-100vh';
import PropTypes from 'prop-types';

import {Wrapper, Header, Title, Items, Content, FreeShipping, Subtotal, SubtotalPrice, Checkout} from './styled';
import {cart} from 'constants/staticData';
import CartItem from './CartItem';

const Cart = ({}) => {
  return (
    <Wrapper>
      <Header>
        <Title>My cart</Title>
        <Items>
          {cart.length} item{cart.length > 1 ? 's' : ''}
        </Items>
      </Header>
      <Div100vh style={{height: '100vh', maxHeight: 'calc(100rvh - 292px)', overflowX: 'hidden', overflowY: 'auto'}}>
        <Content>
          {cart && cart.length && cart.map((item, key) => item && <CartItem item={item} key={key} />)}
          <FreeShipping>Free shipping on orders over $200</FreeShipping>
          <Subtotal>
            <span>Subtotal:</span> <SubtotalPrice>$379</SubtotalPrice>
          </Subtotal>
          <Checkout>Checkout</Checkout>
        </Content>
      </Div100vh>
    </Wrapper>
  );
};

Cart.defaultProps = {};

Cart.propTypes = {};

export default Cart;
