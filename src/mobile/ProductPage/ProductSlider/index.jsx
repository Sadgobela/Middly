import React from 'react';
import { string } from 'prop-types';

import { featuredProducts } from 'constants/staticData';

import WithScroll from '../WithScroll';
import CardNewArrival from 'components/CardNewArrival';

import { Wrapper, SliderContainer } from './styled';

const ProductSlider = ({ title, seeMoreText }) => {
  return <Wrapper>
    <SliderContainer>
      <WithScroll
        marginTop={0}
        title={title}
        showSeeMoreArrow={false}
        seeMoreText={seeMoreText}
        seeMoreCounter={null}
        height={265}
      >
        {featuredProducts.map((product, index) => (
          <CardNewArrival key={index} {...product} />
        ))}
      </WithScroll>
    </SliderContainer>
  </Wrapper>
};

ProductSlider.defaultProps = {
  title: 'More From This Seller',
  seeMoreText: 'See More'
};

ProductSlider.propTypes = {
  title: string,
  seeMoreText: string
};

export default ProductSlider;