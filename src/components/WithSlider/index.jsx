import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { string, number, bool, element } from 'prop-types';
import { ContentWrapper } from '../../globalStyles';
import arrow from '../../images/arrow.png';
import {
  Thumb,
  Title,
  Header,
  SliderWrapper,
  SeeMoreButton,
  CircleWrapper,
  ButtonText
} from './styled';
import Arrow from '../../assets/Arrow';

const WithSlider = ({ children, title, withSeeMore, marginTop, padding, ...rest }) => {
  const settings = {
    dots: !withSeeMore,
    ...rest
  };

  let firstClientX; let clientX;

  const preventTouch = e => {
    const minValue = 5; // threshold

    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }

    return true
  };

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
  };

  const containerRef = useRef();

  useEffect(() => {
    const currentRef = containerRef.current;
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

  return (
    <ContentWrapper marginTop={marginTop}>
      <Header>
        <Title>{title}</Title>
        <Thumb>
          View all <b>(96)</b>{' '}
          <img
            style={{ transform: 'rotateY(180deg)' }}
            width={10}
            height={16}
            src={arrow}
            alt="arrow"
          />
        </Thumb>
      </Header>
      <SliderWrapper padding={padding} ref={containerRef}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {children}
          {withSeeMore && (
            <SeeMoreButton>
              <CircleWrapper>
                <Arrow />
              </CircleWrapper>
              <ButtonText>See More</ButtonText>
            </SeeMoreButton>
          )}
        </Slider>
      </SliderWrapper>
    </ContentWrapper>
  );
};

WithSlider.propTypes = {
  title: string.isRequired,
  children: element.isRequired,
  marginTop: number,
  padding: number.isRequired,
  withSeeMore: bool
};

WithSlider.defaultProps = {
  marginTop: 50,
  withSeeMore: false
};

export default WithSlider;
