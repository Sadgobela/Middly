import styled from 'styled-components';
import {FlexContainer} from 'globalStyles';
import {primaryColor, mainBlackColor, grayBackroundColor} from 'constants/colors';
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
  padding: ${({padding}) => (padding ? padding : '32px 45px')};
  width: 100%;
  margin-bottom: 0;

  .slick {
    &-list {
      padding: 0 0 10px;
    }

    &-prev {
      left: -45px;
    }

    &-next {
      right: -35px;
    }

    &-dots {
      bottom: -35px !important;

      li {
        &.slick-active button {
          &:after {
            background: #656565;
            width: 8px;
            height: 8px;
          }
        }
        button {
          position: relative;
          padding: 0;

          &:before {
            display: none;
          }

          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 6px;
            height: 6px;
            background: ${grayBackroundColor};
            border-radius: 50%;
            transition: all 0.3s ease;
          }
        }
      }
    }
  }

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
