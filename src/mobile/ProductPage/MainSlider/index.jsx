import React from 'react';
import {array} from 'prop-types';
import Slider from 'react-slick';

import { Wrapper, Slide, SlideImage } from './styled';

const MinSlider = ({ slides }) => {
  const settings = {
    dots: true,
    arows: false,
    infinite: false
  };

  return <Wrapper>
    <Slider {...settings}>
      {
        slides && slides.length && slides.map((slide, key) => {
          return <Slide key={key}>
            <SlideImage src={slide}/>
          </Slide>
        })
      }
    </Slider>
  </Wrapper>
};

MinSlider.defaultProps = {
  slides: []
};

MinSlider.propTypes = {
  slides: array
};

export default MinSlider;