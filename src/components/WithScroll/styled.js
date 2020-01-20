import styled from 'styled-components';
import {FlexContainer} from 'globalStyles';
import {primaryColor, mainBlackColor} from 'constants/colors';
import media from 'constants/media';

export const Header = styled(FlexContainer)`
  border-bottom: 2px ${primaryColor} solid;
  padding-bottom: 7px;

  @media (max-width: ${media.mobileMax}) {
    border-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 16px 21px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  letter-spacing: 0.5px;
  color: ${mainBlackColor};
  font-weight: bold;

  @media (max-width: ${media.mobileMax}) {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #343434;
    display: flex;
    align-items: center;
  }
`;

export const Thumb = styled.div`
  font-size: 14px;
  cursor: pointer;
  position: relative;
  top: 5px;

  img {
    margin-left: 10px;
  }
  @media (max-width: ${media.mobileMax}) {
    top: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    text-align: right;
    color: #000000;

    img {
      margin-left: 20px;
      max-width: 7px;
      max-height: 11px;
    }
  }
`;

export const SliderWrapper = styled.div`
  padding: ${({padding}) => padding || '32px 45px'};
  width: 100%;
  margin-bottom: 0;
  display: flex;
  height: 100%;

  .ScrollbarsCustom-Content {
    display: flex;
    padding: 0 12px 10px !important;
    min-height: 0 !important;
    
    &:after {
      content: '';
      min-width: 12px;
      height: 1px;
      display: inline-flex;
    }
  }
  
  ${({showTrackX}) => (!showTrackX ? '.TrackX { display: none; }' : '')}

  @media (max-width: ${media.mobileMax}) {
    padding: 0;
  }
`;

export const SeeMoreButton = styled(FlexContainer)`
  cursor: pointer;
  width: 100%;
  flex-direction: column;
  display: flex !important;
  justify-content: center;
  min-width: 150px;
`;

export const CircleWrapper = styled(FlexContainer)`
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px ${primaryColor} solid;
  margin-bottom: 10px;
`;

export const ButtonText = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${mainBlackColor};
`;

export const FollowButton = styled.button`
  padding: 0;
  margin: 0 0 2px;
  outline: none;
  border: 1px solid ${({followed}) => (followed ? '#999' : '#ED484F')};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0;
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-left: 14px;
  padding: 0;

  span {
    display: none;
  }

  svg {
    max-width: ${({followed}) => (followed ? '9px' : '9.5px')};
    max-height: ${({followed}) => (followed ? '6.5px' : '9.5px')};
    fill: ${({followed}) => (followed ? '#999' : 'initial')};
  }
`;
