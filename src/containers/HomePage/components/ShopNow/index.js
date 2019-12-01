import React from 'react';
import PropTypes from 'prop-types';

import Arrow from 'assets/Arrow';
import {Wrapper, Item, Title, Price, OldPrice, ShopLink} from './styled';

const ShopNow = ({list}) => {
  return (
    <Wrapper>
      {list && list.length
        ? list.map((item, key) => {
            return (
              <Item background={item.image} key={key}>
                <Title>{item.title}</Title>
                <Price>
                  <small>BD</small>
                  {item.newPrice ? item.newPrice : item.price}
                  {item.newPrice ? (
                    <OldPrice>
                      <small>BD</small>
                      {item.price}
                    </OldPrice>
                  ) : null}
                </Price>
                <ShopLink>
                  <span>Shop Now</span>
                  <Arrow />
                </ShopLink>
              </Item>
            );
          })
        : null}
    </Wrapper>
  );
};

ShopNow.defaultProps = {
  list: []
};

ShopNow.propTypes = {
  list: PropTypes.array
};

export default ShopNow;
