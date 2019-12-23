import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 5px 0;
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
