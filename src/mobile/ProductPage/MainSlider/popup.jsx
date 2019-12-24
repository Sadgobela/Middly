import React, { useEffect } from 'react';
import { array, number, bool, func } from 'prop-types';
import Scrollbar from 'react-scrollbars-custom';
import Slider from 'react-slick';

import Icon from 'components/Icon';

import {
  PopupWrapper,
  IconWrapper,
  SliderWrapper,
  Slide,
  SlideImage,
  SliderNav,
  SlideNav
} from './styled';

const Popup = ({ slides, index, setIndex, sliderPopup, showPopup, setShowPopup }) => {
  useEffect(() => {
    if(showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showPopup]);

  const settings = {
    dots: false,
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

  return <PopupWrapper active={showPopup}>
    <IconWrapper onClick={() => setShowPopup(false)}>
      <Icon
        type="close"
        svgStyle={{ width: 24, height: 24, color: '#1A1A1A' }}
      />
    </IconWrapper>

    <SliderWrapper>
      <Slider {...settings} ref={sliderPopup}>
        {
          slides && slides.length && slides.map((slide, key) =>
            <Slide key={key}>
              <SlideImage src={slide}/>
            </Slide>
          )
        }
      </Slider>
    </SliderWrapper>

    <SliderNav>
      <Scrollbar
        disableTracksWidthCompensation
        style={{ height: 62 }}
        trackXProps={{
          renderer: (props) => {
            const {elementRef, ...restProps} = props;
            return <span {...restProps} ref={elementRef} className="TrackX"/>;
          }
        }}
      >
        {
          slides && slides.length && slides.map((slide, key) =>
            <SlideNav
              key={key}
              active={key === index}
              image={slide}
              onClick={() => {
                setIndex(key);
                sliderPopup.current.slickGoTo(key)
              }}
            />
          )
        }
      </Scrollbar>
    </SliderNav>
  </PopupWrapper>
};

Popup.defaultProps = {
  slides: [],
  index: 0,
  showPopup: false,
  setShowPopup: () => {}
};

Popup.propTypes = {
  slides: array,
  index: number,
  showPopup: bool,
  setShowPopup: func
};

export default Popup;