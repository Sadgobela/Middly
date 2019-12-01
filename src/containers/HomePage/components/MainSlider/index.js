import React, {useEffect, useRef} from 'react';
import Slider from 'react-slick';

import {MainSliderWrapper, SlideWrapper, SlideContent, SlideTitle, SlideDescription, SlideButton} from './styled';

const MainSlider = ({slides}) => {
  const settings = {
    dots: true,
    arrows: false
  };

  let firstClientX, clientX;

  const preventTouch = (e) => {
    const minValue = 5;

    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }
  };

  const touchStart = (e) => {
    firstClientX = e.touches[0].clientX;
  };

  let containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('touchstart', touchStart);
      containerRef.current.addEventListener('touchmove', preventTouch, {
        passive: false
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('touchstart', touchStart);
        containerRef.current.removeEventListener('touchmove', preventTouch, {
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

export default MainSlider;
