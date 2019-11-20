import React from 'react';
import Slider from 'react-slick';
import { element, string, number, bool } from 'prop-types';
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

const WithSlider = ({ children, title, withSeeMore, marginTop, ...rest }) => {
  const settings = {
    dots: !withSeeMore,
    ...rest
  };

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
      <SliderWrapper>
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
  withSeeMore: bool
};

WithSlider.defaultProps = {
  marginTop: 50,
  withSeeMore: false
};

export default WithSlider;
