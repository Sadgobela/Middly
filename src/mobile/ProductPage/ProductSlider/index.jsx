import React from 'react';
import { string } from 'prop-types';

import { featuredProducts } from 'constants/staticData';

import WithScroll from '../WithScroll';
import ProductCard from '../ProductCard';

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
        height={254}
      >
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
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