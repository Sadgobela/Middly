import styled from 'styled-components';
import {Input, Button} from 'antd';
import {FlexContainer} from '../../globalStyles';
import {primaryColor, mainWhiteColor, mainBlackColor, headerShadowColor} from '../../constants/colors';
import media from 'constants/media';

export const MainColor = styled.span`
  color: ${primaryColor};
`;

export const BoldText = styled.strong`
  margin-left: 8px;
`;

export const ShopsWrapper = styled.div`
  margin-top: 89px;
  padding-bottom: 50px;
  background: ${mainWhiteColor};
`;

export const SubscribeBlock = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  padding-bottom: 116px;
  padding-top: 56px;
  ${({backgroundImage}) => (backgroundImage ? `background-image: url(${backgroundImage});` : '')}
  
  @media(max-width: ${media.mobileMax}) {
    padding: 13px 16px 24px;
    flex-wrap: wrap;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    
    > div {
      flex-wrap: wrap;
      width: 100%;
    }
  }
`;

export const SellTitle = styled(FlexContainer)`
  justify-content: center;
  line-height: 1.5;
  letter-spacing: -0.3px;
  display: flex;
  align-items: center;

  span {
    position: relative;
    top: 1px;
  }
`;

export const SubscribeTitle = styled.div`
  font-size: 22px;
  color: ${mainBlackColor};
  margin-bottom: 26px;
  letter-spacing: 0.7px;

  @media (max-width: ${media.mobileMax}) {
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 132%;
    text-align: center;
    letter-spacing: 0.016em;
    color: #000000;
    margin-bottom: 24px;
    max-width: 240px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledEmailInput = styled(Input)`
  width: 293px !important;
  height: 46px !important;
  background: ${mainWhiteColor}!important;
  border: 1px solid ${headerShadowColor} !important;
  border-right-width: 0;
  border-radius: 4px 0 0 4px !important;
  &:focus {
    box-shadow: none !important;
  }

  @media (max-width: ${media.mobileMax}) {
    width: 100% !important;
    height: 48px !important;
  }
`;

export const SubscribeButton = styled(Button)`
  width: 152px !important;
  min-width: 40px !important;
  height: 46px !important;
  border: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 6px 20px !important;
  font-size: 16px !important;
  text-transform: uppercase;
  color: ${mainWhiteColor}!important;
  background: ${primaryColor}!important;
  border: 0;
  border-radius: 0 4px 4px 0 !important;

  @media (max-width: ${media.mobileMax}) {
    width: 100% !important;
    height: 46px !important;
    margin-top: 24px !important;
    border-radius: 4px !important;
  }
`;

export const SliderContainer = styled.div`
  padding: 15px 0 10px;

  .slick {
    &-list {
      padding: 0 12px 10px !important;
    }

    &-slide {
      width: 159px !important;
      max-width: 159px;
      margin: 0 4px;
    }
  }
`;

export const SliderContainerList = styled.div`
  padding: 15px 0 10px;

  .slick {
    &-track {
      align-items: flex-start;
    }

    &-list {
      padding: 0 0 10px !important;
    }

    &-slide {
      margin: 0 32px;
      flex-wrap: wrap;

      > div {
        width: 100%;
      }
    }

    &-dots {
      position: static;
      display: flex !important;
      align-items: center;
      justify-content: center;
      padding: 14px 0 24px;

      li {
        margin: auto 6px;
        width: 8px;
        height: 8px;

        &.slick-active button {
          background: ${primaryColor};
        }

        button {
          padding: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${headerShadowColor};
          transition: all 0.3s ease;

          &:before,
          &:after {
            display: none;
          }
        }
      }
    }
  }
`;
