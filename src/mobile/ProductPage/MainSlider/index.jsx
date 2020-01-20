import React, { useEffect, useRef, useState } from 'react';
import { arrayOf } from 'prop-types';
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
      const currentRef = sliderPopup.current;
      if (direction === 'left' && (slides.length - 1) > index) {
        if (currentRef) currentRef.slickGoTo(index + 1);
        setIndex(index + 1);
      } else if (direction === 'right' && index > 0) {
        if (currentRef) currentRef.slickGoTo(index - 1);
        setIndex(index - 1);
      }
    }
  };

  let firstClientX; let clientX;

  const preventTouch = e => {
    const minValue = 5;

    clientX = e.touches[0].clientX - firstClientX;

    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }

    return true;
  };

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
  };

  useEffect(() => {
    const currentRef = slider.current;
    if (currentRef) {
      currentRef.addEventListener("touchstart", touchStart);
      currentRef.addEventListener("touchmove", preventTouch, {
        passive: false
      });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("touchstart", touchStart);
        currentRef.removeEventListener("touchmove", preventTouch, {
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

                if (sliderPopup && sliderPopup.current) {
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
  slides: arrayOf()
};

export default MinSlider;