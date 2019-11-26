import React from 'react';
import Slider from 'react-slick';

import {MainSliderWrapper, SlideWrapper, SlideContent, SlideTitle, SlideDescription, SlideButton} from './styled';

const MainSlider = ({slides}) => {
  const settings = {
    dots: true,
    arrows: false
  };

  return (
    <MainSliderWrapper>
      <Slider {...settings}>
        {slides
          ? slides.map((slide) => {
              return (
                <SlideWrapper key={slide.id} backgroundImage={slide.image}>
                  <SlideContent>
                    {slide.title ? <SlideTitle dangerouslySetInnerHTML={{__html: slide.title}} /> : null}
                    {slide.description ? (
                      <SlideDescription dangerouslySetInnerHTML={{__html: slide.description}} />
                    ) : null}
                    {slide.url ? <SlideButton to={slide.url}>Get started</SlideButton> : null}
                  </SlideContent>
                </SlideWrapper>
              );
            })
          : null}
      </Slider>
    </MainSliderWrapper>
  );
};

export default MainSlider;
