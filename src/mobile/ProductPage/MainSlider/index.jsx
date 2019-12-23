import React, { useEffect, useRef, useState } from 'react';
import {array} from 'prop-types';
import Slider from 'react-slick';

import Popup from './popup';

import { Wrapper, Slide, SlideImage } from './styled';

const MinSlider = ({ slides }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [index, setIndex] = useState(0);
  const slider = useRef(null);
  const sliderPopup = useRef(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    touchThreshold: 15,
    cssEase: 'linear',
    onSwipe: (direction) => {
      if(direction === 'left' && (slides.length - 1) > index) {
        sliderPopup && sliderPopup.current && sliderPopup.current.slickGoTo(index + 1);
        setIndex(index + 1);
      } else if(direction === 'right' && index > 0) {
        sliderPopup && sliderPopup.current && sliderPopup.current.slickGoTo(index - 1);
        setIndex(index - 1);
      }
    }
  };

  let firstClientX, clientX;

  const preventTouch = e => {
    const minValue = 5;

    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }
  };

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
  };

  useEffect(() => {
    if (slider && slider.current) {
      slider.current.addEventListener("touchstart", touchStart);
      slider.current.addEventListener("touchmove", preventTouch, {
        passive: false
      });
    }

    return () => {
      if (slider && slider.current) {
        slider.current.removeEventListener("touchstart", touchStart);
        slider.current.removeEventListener("touchmove", preventTouch, {
          passive: false
        });
      }
    };
  });

  return <Wrapper ref={slider}>
    <Slider {...settings}>
      {
        slides && slides.length && slides.map((slide, key) =>
          <Slide key={key}>
            <SlideImage
              src={slide}
              onClick={() => {
                setShowPopup(true);
                setIndex(key);

                if(sliderPopup && sliderPopup.current) {
                  sliderPopup.current.slickGoTo(key)
                }
              }}
            />
          </Slide>
        )
      }
    </Slider>
    <Popup
      slides={slides}
      index={index}
      setIndex={setIndex}
      sliderPopup={sliderPopup}
      showPopup={showPopup}
      setShowPopup={setShowPopup}
    />
  </Wrapper>
};

MinSlider.defaultProps = {
  slides: []
};

MinSlider.propTypes = {
  slides: array
};

export default MinSlider;