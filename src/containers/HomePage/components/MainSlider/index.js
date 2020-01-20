import React, {useEffect, useRef} from 'react';
import PropTypes, {object} from 'prop-types';
import Slider from 'react-slick';

import {MainSliderWrapper, SlideWrapper, SlideContent, SlideTitle, SlideDescription, SlideButton} from './styled';

const MainSlider = ({slides}) => {
  const settings = {
    dots: true,
    arrows: false
  };

  let firstClientX;
  let clientX;

  const preventTouch = (e) => {
    const minValue = 5;

    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }

    return true;
  };

  const touchStart = (e) => {
    firstClientX = e.touches[0].clientX;
  };

  const containerRef = useRef();

  useEffect(() => {
    const newRef = containerRef.current;
    if (newRef) {
      newRef.addEventListener('touchstart', touchStart);
      newRef.addEventListener('touchmove', preventTouch, {
        passive: false
      });
    }

    return () => {
      if (newRef) {
        newRef.removeEventListener('touchstart', touchStart);
        newRef.removeEventListener('touchmove', preventTouch, {
          passive: false
        });
      }
    };
  });

  return (
    <MainSliderWrapper ref={containerRef}>
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

MainSlider.propTypes = {
  slides: PropTypes.arrayOf(object).isRequired
};

export default MainSlider;
