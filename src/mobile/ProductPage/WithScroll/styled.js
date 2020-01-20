import styled from 'styled-components';
import {FlexContainer} from 'globalStyles';
import {primaryColor, mainBlackColor} from 'constants/colors';

import media from 'constants/media';

export const Header = styled(FlexContainer)`
  border-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 16px 20px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  letter-spacing: 0.4px;
`;

export const Thumb = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  text-align: right;
  color: ${primaryColor};

  img {
    margin-left: 20px;
    max-width: 7px;
    max-height: 11px;
  }
`;

export const SliderWrapper = styled.div`
  padding: ${({padding}) => (padding ? padding : '32px 45px')};
  width: 100%;
  margin-bottom: 0;
  display: flex;
  height: 100%;

  .ScrollbarsCustom-Content {
    display: flex;
    padding: 0 10px 10px !important;
    
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
