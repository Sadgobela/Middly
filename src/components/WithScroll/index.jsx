import React from 'react';
import Scrollbar from 'react-scrollbars-custom';

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
  ButtonText,
  FollowButton
} from './styled';
import Icon from 'components/Icon';
import Arrow from 'assets/Arrow';

const WithSlider = ({ children, title, withSeeMore, seeMoreText, seeMoreCounter, showSeeMoreArrow, marginTop, padding, height, showTrackX, showFollow, followed }) => {
  return (
    <ContentWrapper marginTop={marginTop}>
      <Header>
        <Title>
          {title}
          {
            showFollow &&
              <FollowButton followed={followed}>
                {followed ? <Icon type="checkbox" /> : <Icon type="plus" />}
              </FollowButton>
          }
        </Title>
        <Thumb>
          {seeMoreText} {seeMoreCounter && <b>({seeMoreCounter})</b>}{' '}
          {showSeeMoreArrow && <img
            style={{ transform: 'rotateY(180deg)' }}
            width={10}
            height={16}
            src={arrow}
            alt="arrow"
          />}
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
  height: number,
  seeMoreText: string,
  seeMoreCounter: number,
  showSeeMoreArrow: bool,
  showFollow: bool,
  followed: bool
};

WithSlider.defaultProps = {
  marginTop: 50,
  withSeeMore: false,
  showTrackX: false,
  height: '100%',
  seeMoreText: 'View all',
  seeMoreCounter: 96,
  showSeeMoreArrow: true,
  showFollow: false,
  followed: false
};

export default WithSlider;
