import styled from 'styled-components';
import {primaryColor} from 'constants/colors';

export const Wrapper = styled.div`
  position: relative;

  .slick {
    &-track {
      display: flex;

      &:before,
      &:after {
        display: none;
      }
    }

    &-slide {
      > div {
        display: flex;
      }
    }

    &-dots {
      position: static;
      display: flex !important;
      justify-content: center;
      margin: 8px 0 16px 0;

      li {
        width: 20px;
        height: 8px;
        border-radius: 50%;
        margin: 0;

        &.slick-active {
          button {
            background: ${primaryColor};
          }
        }

        button {
          padding: 0;
          margin: auto;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e4e4e4;

          &:before {
            display: none;
          }
        }
      }
    }
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: 101;
  max-width: 100%;
  margin: auto 0;

  .slick {
    &-slider {
      width: 100%;
    }

    &-track {
      display: flex;

      &:before,
      &:after {
        display: none;
      }
    }

    &-slide {
      > div {
        display: flex;
      }
    }
  }
`;

export const Slide = styled.div``;

export const SlideImage = styled.img`
  width: 100vw;
  height: 100vh;
  max-height: 444px;
  object-fit: cover;
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background: #fff;
  transition: all 0.3s ease;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100vw;

  opacity: ${({active}) => (active ? 1 : 0)};
  transform: translateY(${({active}) => (active ? '0px' : '-50px')});
  pointer-events: ${({active}) => (active ? 'all' : 'none')};
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 3px;
  z-index: 110;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderNav = styled.div`
  position: absolute;
  bottom: 34px;
  left: 12px;
  right: 12px;
  z-index: 102;

  .TrackX {
    display: none !important;
  }

  .ScrollbarsCustom-Content {
    display: flex;
    justify-content: center;
  }
`;

export const SlideNav = styled.div`
  min-width: 62px;
  width: 62px;
  height: 62px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({image}) => image});
  position: relative;
  margin: 0 4px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
    transition: all 0.3s ease;
    opacity: 0;
  }

  ${({active}) => {
    if (!active) {
      return `
        &:before {
          opacity: 1;
        }
      `;
    }
  }}
`;
