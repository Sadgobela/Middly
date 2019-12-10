import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { any, string, number, bool } from 'prop-types';
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

  let firstClientX, clientX;

  const preventTouch = e => {
    const minValue = 5; // threshold

    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;

      return false;
    }
  };

  const touchStart = e => {
    firstClientX = e.touches[0].clientX;
  };

  let containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("touchstart", touchStart);
      containerRef.current.addEventListener("touchmove", preventTouch, {
        passive: false
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("touchstart", touchStart);
        containerRef.current.removeEventListener("touchmove", preventTouch, {
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
  children: any,
  marginTop: number,
  withSeeMore: bool
};

WithSlider.defaultProps = {
  marginTop: 50,
  withSeeMore: false
};

export default WithSlider;
