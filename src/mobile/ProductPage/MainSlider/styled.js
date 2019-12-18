import styled from 'styled-components';
import {primaryColor} from '../../../constants/colors';

export const Wrapper = styled.div`
  position: relative;

  .slick {
    &-arrow {
      display: none !important;
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

export const Slide = styled.div``;

export const SlideImage = styled.img`
  width: 100vw;
  height: 100vh;
  max-height: 444px;
  object-fit: cover;
`;
