import React from 'react';
import Scrollbar from 'react-scrollbars-custom';
import { AutoSizer } from 'react-virtualized';

import { any, string, number, bool } from 'prop-types';
import { ContentWrapper } from 'globalStyles';
import arrow from 'images/arrow.png';
import {
  Thumb,
  Title,
  Header,
  SliderWrapper,
  SeeMoreButton,
  CircleWrapper,
  ButtonText
} from './styled';
import Arrow from 'assets/Arrow';

const WithSlider = ({ children, title, withSeeMore, marginTop, padding, height, showTrackX }) => {
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
      <SliderWrapper padding={padding} showTrackX={showTrackX}>
        <Scrollbar
          disableTracksWidthCompensation
          style={{ height }}
          trackXProps={{
            renderer: (props) => {
              const {elementRef, ...restProps} = props;
              return <span {...restProps} ref={elementRef} className="TrackX"/>;
            }
          }}
        >
          {children}
          {withSeeMore && (
            <SeeMoreButton>
              <CircleWrapper>
                <Arrow />
              </CircleWrapper>
              <ButtonText>See More</ButtonText>
            </SeeMoreButton>
          )}
        </Scrollbar>
      </SliderWrapper>
    </ContentWrapper>
  );
};

WithSlider.propTypes = {
  title: string.isRequired,
  children: any,
  marginTop: number,
  withSeeMore: bool,
  showTrackX: bool,
  height: number
};

WithSlider.defaultProps = {
  marginTop: 50,
  withSeeMore: false,
  showTrackX: false,
  height: '100%'
};

export default WithSlider;
