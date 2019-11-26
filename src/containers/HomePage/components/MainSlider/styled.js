import styled from 'styled-components';

import {primaryColor, headerShadowColor} from 'constants/colors';

export const MainSliderWrapper = styled.div`
  .slick {
    &-slide {
      > div {
        width: 100%;
      }
    }

    &-dots {
      position: static;
      display: flex !important;
      align-items: center;
      justify-content: center;
      background: #fafafa;
      padding: 24px 0;

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

          &:before {
            display: none;
          }
        }
      }
    }
  }
`;

export const SlideWrapper = styled.div`
  width: 100vw;
  min-height: 155px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex !important;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 0;

  ${({backgroundImage}) => (backgroundImage ? `background-image: url(${backgroundImage});` : '')}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(80.69deg, rgba(255, 255, 255, 0.81) 31.89%, rgba(255, 255, 255, 0) 79.27%);
    z-index: 1;
  }
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 0 53px;
  margin: auto 0 0;
`;

export const SlideTitle = styled.p`
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: #000000;
  width: 100%;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

export const SlideDescription = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  width: 100%;
  margin-bottom: 13px;
  letter-spacing: 0.2px;
`;

export const SlideButton = styled.a`
  display: inline-block;
  width: 99px;
  height: 23px;
  line-height: 23px;
  background: ${primaryColor};
  border-radius: 4px;
  text-align: center;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #ffffff;
`;
